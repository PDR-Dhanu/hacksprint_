# Submission-to-Scoring Logic Flow

This document explains how a project, once submitted by a student, immediately becomes available for judges to score. The entire process is seamless and happens in real-time without requiring a page refresh, thanks to a centralized state management system.

The logic involves two key components:

1.  `ProjectSubmission.tsx`: The form where students submit their project.
2.  `ScoringDashboard.tsx`: The interface where judges see the list of projects to be scored.

---

### Part 1: The Submission Component (`src/app/student/_components/ProjectSubmission.tsx`)

This component is responsible for capturing the project details and sending them to the central data store.

#### Key Logic:

-   **State Management:** It uses `useState` to hold the form data (project name, description, GitHub URL).
-   **API Call:** When the user clicks the "Submit Project" button, the `handleSubmitProject` function is triggered.
-   **`api.submitProject`:** This is the crucial function call. It takes the project data and the current team's ID and calls the central API handler. This handler is responsible for creating a new `Project` object in the application's global state.
-   **Optimistic UI:** Upon successful submission, the UI immediately switches to the `ProjectView` component, making the app feel fast and responsive.

#### Full Code:

```tsx
"use client";

import React, { useState } from 'react';
import { useHackathon } from '@/context/HackathonProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import type { Team } from '@/lib/types';
import { generateProjectIdea, suggestThemes } from '@/app/actions';
import { Loader, Wand2, Lightbulb } from 'lucide-react';
import BackButton from '@/components/layout/BackButton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface ProjectSubmissionProps {
    team: Team;
}

export default function ProjectSubmission({ team }: ProjectSubmissionProps) {
    const { api, state } = useHackathon();
    const { selectedHackathonId } = state;
    const [projectName, setProjectName] = useState('');
    const [projectDesc, setProjectDesc] = useState('');
    const [githubUrl, setGithubUrl] = useState('');
    
    const [interest, setInterest] = useState('');
    const [themes, setThemes] = useState<string[]>([]);
    const [generatedIdea, setGeneratedIdea] = useState<string | null>(null);
    const [isGeneratingThemes, setIsGeneratingThemes] = useState(false);
    const [isGeneratingIdea, setIsGeneratingIdea] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmitProject = async (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedHackathonId) {
            setIsSubmitting(true);
            try {
                // This call adds the new project to the central data store.
                await api.submitProject(selectedHackathonId, { name: projectName, description: projectDesc, githubUrl, teamId: team.id });
            } finally {
                setIsSubmitting(false);
            }
        }
    };

     const handleSuggestThemes = async () => {
        if (!interest) return;
        setIsGeneratingThemes(true);
        setThemes([]);
        setGeneratedIdea(null);
        try {
            const result = await suggestThemes(interest);
            setThemes(result);
        } finally {
            setIsGeneratingThemes(false);
        }
    };

    const handleGenerateIdea = async (theme: string) => {
        setIsGeneratingIdea(true);
        setGeneratedIdea(null);
        try {
            const idea = await generateProjectIdea({ theme });
            setGeneratedIdea(idea);
        } catch (error) {
            console.error("Error generating project idea:", error);
            setGeneratedIdea("Failed to generate an idea. Please ensure your API key is correct and try again.");
        } finally {
            setIsGeneratingIdea(false);
        }
    };

    return (
        <div className="container max-w-3xl mx-auto">
            <BackButton />
            <Card>
                 <CardHeader>
                    <CardTitle className="text-3xl font-bold font-headline">Submit Your Project</CardTitle>
                    <CardDescription>Fill out the details for your team's submission.</CardDescription>
                </CardHeader>
                <CardContent className="border-t pt-6">
                     <div className="space-y-6 mb-8 p-4 border border-dashed border-border rounded-lg">
                        <div className="space-y-2">
                             <Label htmlFor="interest" className="flex items-center gap-2 font-semibold text-lg"><Wand2 className="text-primary"/> AI Idea Generation</Label>
                            <div className="flex gap-2">
                                <Input 
                                    id="interest" 
                                    value={interest} 
                                    onChange={e => setInterest(e.target.value)} 
                                    placeholder="Describe your interests (e.g., 'AI in Healthcare')" 
                                    disabled={isGeneratingThemes}
                                />
                                <Button onClick={handleSuggestThemes} disabled={isGeneratingThemes || !interest}>
                                    {isGeneratingThemes ? <Loader className="animate-spin"/> : 'Suggest Themes'}
                                 </Button>
                            </div>
                        </div>

                        {themes.length > 0 && (
                            <Carousel opts={{ align: "start" }} className="w-full">
                                <CarouselContent>
                                    {themes.map((theme, index) => (
                                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                            <div className="p-1">
                                                <Card className="bg-muted/50">
                                                    <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                                                        <p className="font-semibold text-center">{theme}</p>
                                                        <Button size="sm" onClick={() => handleGenerateIdea(theme)} disabled={isGeneratingIdea}>
                                                            {isGeneratingIdea ? <Loader className="animate-spin"/> : <><Lightbulb className="mr-2"/> Generate Idea</>}
                                                        </Button>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        )}
                        
                        {generatedIdea && (
                            <Card className="bg-muted">
                                <CardContent className="pt-6">
                                    <p className="font-mono text-sm text-foreground">{generatedIdea}</p>
                                </CardContent>
                            </Card>
                        )}
                    </div>


                    <form onSubmit={handleSubmitProject} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="projectName">Project Name</Label>
                            <Input id="projectName" value={projectName} onChange={e => setProjectName(e.target.value)} required disabled={isSubmitting} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="projectDesc">Project Description</Label>
                            <Textarea id="projectDesc" value={projectDesc} onChange={e => setProjectDesc(e.target.value)} required disabled={isSubmitting} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="githubUrl">GitHub Repository URL</Label>
                            <Input id="githubUrl" type="url" value={githubUrl} onChange={e => setGithubUrl(e.target.value)} required disabled={isSubmitting} />
                        </div>
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                           {isSubmitting ? <><Loader className="mr-2 h-4 w-4 animate-spin"/> Submitting...</> : 'Submit Project'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
```

---

### Part 2: The Scoring Dashboard (`src/app/judge/_components/ScoringDashboard.tsx`)

This component displays the list of projects available for judging. Because it's connected to the same central data store (`HackathonProvider`), it updates automatically.

#### Key Logic:

-   **Data Source:** It uses the `useHackathon()` hook to access the global state, specifically `state.projects`.
-   **Filtering:** The `useMemo` hook filters the global `projects` array to get only the projects that belong to the currently selected hackathon (`hackathon.id`).
-   **Real-Time Updates:** Whenever the global `state.projects` array is updated by the `HackathonProvider` (which happens when a new project is submitted), this component automatically re-renders.
-   **Rendering:** The `ProjectList` child component receives the filtered list of projects and displays them. If a new project appears in the props, it's rendered on the judge's screen instantly.

#### Full Code:

```tsx
"use client";

import React, { useState, useMemo } from 'react';
import { Project, Hackathon } from '@/lib/types';
import ProjectList from './ProjectList';
import ScoringForm from './ScoringForm';
import { useHackathon } from '@/context/HackathonProvider';

interface ScoringDashboardProps {
    hackathon: Hackathon;
}

export default function ScoringDashboard({ hackathon }: ScoringDashboardProps) {
    const { state } = useHackathon();
    const { projects } = state; // This comes from the global context
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // This useMemo hook recalculates the list of projects whenever the global `projects` state changes.
    const hackathonProjects = useMemo(() => {
        return projects.filter(p => p.hackathonId === hackathon.id);
    }, [projects, hackathon.id]);

    if (selectedProject) {
        return <ScoringForm project={selectedProject} onBack={() => setSelectedProject(null)} />;
    }

    // ProjectList is re-rendered with the new list of projects automatically.
    return (
        <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 font-headline text-center">Projects for Judging: {hackathon.name}</h2>
            <ProjectList projects={hackathonProjects} onSelectProject={setSelectedProject} />
        </div>
    );
}
```
