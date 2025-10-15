
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BarChart, GalleryVertical, FileText, Github, Lightbulb, Trophy, Users, Handshake, Scale, BrainCircuit, Check, UsersRound, Award, Code, CheckCircle, Shield, Server, Search, CodeXml, User, Building2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useMemo } from 'react';
import { useHackathon } from "@/context/HackathonProvider";
import GradientText from "@/components/ui/GradientText";
import { motion } from "framer-motion";
import ElectricBorder from "@/components/ui/ElectricBorder";
import CountUp from 'react-countup';
import { COLLEGES } from "@/lib/colleges";
import AnimatedShaderHero from "@/components/ui/animated-shader-hero";
import { useRouter } from "next/navigation";


const FeatureCard = ({ icon, title, description, index }: { icon: React.ReactNode, title: string, description: string, index: number }) => (
    <ElectricBorder
        color="orange"
        speed={0.3}
        chaos={0.2}
        thickness={2}
        style={{ borderRadius: '0.5rem' }}
    >
        <div 
            className="group rounded-lg bg-card/80 p-6 text-center transition-all duration-300 transform-gpu animate-card-in will-change-transform h-full"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="relative">
                <div className="mb-4 text-primary w-12 h-12 mx-auto flex items-center justify-center" style={{ filter: 'drop-shadow(0 0 10px hsl(var(--primary)))'}}>
                    {icon}
                </div>
                <h3 className="text-xl font-bold font-headline text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </div>
        </div>
    </ElectricBorder>
);


const features = [
    { icon: <Users className="w-8 h-8" />, title: "Team Formation", description: "Easily register, create, and join teams to start collaborating." },
    { icon: <Lightbulb className="w-8 h-8" />, title: "AI Idea Generation", description: "Brainstorm project ideas with our intelligent suggestion system." },
    { icon: <Github className="w-8 h-8" />, title: "Project Submissions", description: "Seamlessly submit your projects with GitHub repository integration." },
    { icon: <BarChart className="w-8 h-8" />, title: "Live Leaderboard", description: "Track team progress in real-time with our dynamic leaderboard." },
    { icon: <FileText className="w-8 h-8" />, title: "AI Code Review", description: "Get instant, AI-powered feedback on your code submissions." },
    { icon: <GalleryVertical className="w-8 h-8" />, title: "Project Showcase", description: "A gallery of all submitted projects to celebrate the work." },
    { icon: <Scale className="w-8 h-8" />, title: "Fair Judging", description: "A dedicated portal for judges to score projects, enhanced with AI summaries." },
    { icon: <Handshake className="w-8 h-8" />, title: "Team Finder", description: "Discover teams or recruit members based on skills and interests." },
];

const partners = [
    { name: 'Cognizant', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
    { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
    { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
    { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg' },
];

const testimonials = [
  {
    quote: "HackSprint's AI tools gave our team the edge we needed. The code review was like having a senior dev on call 24/7!",
    name: "Aarav Sharma",
    role: "Winning Student, CodeCrafters",
  },
  {
    quote: "As a judge, the AI-generated summaries were a game-changer. I could grasp the core of each project instantly, making the scoring process faster and fairer.",
    name: "Priya Menon",
    role: "Hackathon Judge",
  },
  {
    quote: "Managing the entire event was seamless. The admin dashboard gave me a bird's-eye view of everything, from registrations to final reports.",
    name: "Dr. Rajesh Kumar",
    role: "Faculty Coordinator",
  },
  {
    quote: "The AI Teammate Matchmaker is genius! It connected me with a team that had the exact skills we were missing.",
    name: "Sofia Chen",
    role: "Participant, Data Dynamos",
  },
  {
    quote: "I've never seen a student hackathon platform this comprehensive. It handles everything from A to Z.",
    name: "Ben Carter",
    role: "Industry Mentor",
  },
  {
    quote: "Generating a pitch outline with the AI coach saved us hours. We could focus on building instead of worrying about slides.",
    name: "Fatima Al-Jamil",
    role: "Finalist, Cloud Nine",
  },
  {
    quote: "The real-time leaderboard created such an exciting and competitive atmosphere. We were hooked!",
    name: "Leo Gonzalez",
    role: "Participant, The Algo-Rhythms",
  },
  {
    quote: "Support was incredible. We had an issue, submitted a ticket, and the AI triage got us a helpful response almost immediately.",
    name: "Chloe Wilson",
    role: "Student, Bug Busters",
  },
  {
    quote: "From an organizational standpoint, HackSprint is a dream. The automated reports and analytics are invaluable.",
    name: "Prof. David Lee",
    role: "University IT Department",
  },
  {
    quote: "The platform is incredibly intuitive for students. Our adoption rate was nearly 100% from day one.",
    name: "Isabelle Moreau",
    role: "Student Body President",
  },
];


const faqItems = [
    {
        question: "How do I register for a hackathon?",
        answer: "To register, navigate to the Student Portal, sign up for an account, and wait for admin approval. Once approved, you can select an active hackathon for your college and join or create a team."
    },
    {
        question: "Can I join a hackathon without a team?",
        answer: "Yes! You can register as an individual and then use our 'Team Finder' page. You can browse existing teams that are looking for members or use the AI Matchmaker to find students with complementary skills."
    },
    {
        question: "What kind of AI assistance does HackSprint offer?",
        answer: "HackSprint integrates AI at multiple stages. This includes an AI Idea Generator to brainstorm projects, an AI Code Reviewer for instant feedback on your code, an AI Pitch Coach to structure your presentation, and an AI Teammate Matchmaker to help you find the perfect collaborators."
    },
    {
        question: "Is HackSprint free to use for our college?",
        answer: "Yes, HackSprint is offered free of charge for internal college hackathons. Our goal is to foster innovation and learning within educational institutions by providing a powerful, accessible platform."
    },
];

const HowItWorksAnimation = () => {
    const steps = [
        { title: "Sign Up", description: "Register as a student for your college's event.", icon: <User className="w-6 h-6" />, position: { top: '8%', left: '10%' } },
        { title: "Form Team", description: "Create a new team or join an existing one with a code.", icon: <Users className="w-6 h-6" />, position: { top: '40%', left: '85%' } },
        { title: "Build & Submit", description: "Use AI tools, collaborate, and submit your project.", icon: <Code className="w-6 h-6" />, position: { top: '70%', left: '5%' } },
        { title: "Compete & Win", description: "Get judged, climb the leaderboard, and win prizes!", icon: <Trophy className="w-6 h-6" />, position: { top: '92%', left: '90%' } },
    ];
    
    const roadPath = "M 50 20 C 200 80, 200 120, 350 180 S 200 280, 50 320 S 200 420, 350 380";
    
    const arrowPath = "M2,2 L10,6 L2,10 L4,6 Z"; // Simple arrow shape
    const archerPath = "M45,15 C40,15 35,20 35,25 M45,15 C50,15 55,20 55,25 M45,15 L45,5 M35,25 L45,35 L55,25"; // Simple archer figure

    return (
        <div className="relative w-full max-w-lg mx-auto h-[450px] md:h-[500px] md:max-w-2xl lg:max-w-4xl">
            <motion.svg 
                viewBox="0 0 400 400" 
                className="absolute inset-0 w-full h-full" 
                preserveAspectRatio="none"
            >
                <defs>
                    <radialGradient id="fireGradient">
                        <stop offset="0%" stopColor="hsl(var(--secondary))" />
                        <stop offset="50%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsla(var(--primary), 0)" />
                    </radialGradient>
                    <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--secondary))" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" />
                    </linearGradient>
                </defs>
                <path 
                    id="road-path"
                    d={roadPath}
                    fill="none" 
                    stroke="url(#roadGradient)" 
                    strokeWidth="3" 
                    strokeDasharray="10 5"
                    className="animate-road-draw"
                />
                
                <path d={archerPath} stroke="hsl(var(--foreground))" strokeWidth="1.5" fill="none" />
                
                <g>
                    <motion.path
                        d={arrowPath}
                        fill="url(#fireGradient)"
                        className="drop-shadow-[0_0_4px_hsl(var(--primary))]"
                        style={{ scale: 1.5 }}
                    >
                        <animateMotion
                            dur="10s"
                            repeatCount="indefinite"
                            rotate="auto"
                            keyPoints="0;1"
                            keyTimes="0;1"
                        >
                            <mpath href="#road-path" />
                        </animateMotion>
                    </motion.path>
                     <motion.path
                        d={roadPath}
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="1.5"
                        strokeDasharray="1000"
                        className="animate-flame-trail"
                    >
                     </motion.path>
                </g>

            </motion.svg>

            {steps.map((step, index) => (
                <div 
                    key={index}
                    className="absolute p-3 sm:p-4 max-w-[150px] sm:max-w-[200px] rounded-lg bg-card/80 backdrop-blur-sm border border-border shadow-lg animate-step-fade-in"
                    style={{ 
                        top: step.position.top, 
                        left: step.position.left, 
                        animationDelay: `${index * 2 + 1}s` 
                    }}
                >
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                        <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex-shrink-0">
                           {step.icon}
                        </div>
                        <h4 className="font-bold font-headline text-base sm:text-lg">{step.title}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{step.description}</p>
                </div>
            ))}
        </div>
    );
};
export default function Home() {
  const router = useRouter();

  const handlePrimaryClick = () => {
    router.push('/student');
  };

  const handleSecondaryClick = () => {
    router.push('/judge');
  };

  const institutionsCount = COLLEGES.length;

  return (
    <div className="overflow-x-hidden">
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center -mt-14">
            <AnimatedShaderHero
                headline={{
                    line1: "Welcome to HackSprint",
                    line2: ""
                }}
                subtitle="Your all-in-one platform for managing internal college hackathons. From registration to results, we've got you covered."
                buttons={{
                    primary: {
                        text: "Get Started as Student",
                        onClick: handlePrimaryClick,
                    },
                    secondary: {
                        text: "Enter as Judge or Admin",
                        onClick: handleSecondaryClick,
                    }
                }}
            />
        </section>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <section className="py-24 scroll-m-20" data-animate-on-scroll>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">Why Choose HackSprint?</h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">An integrated platform designed to elevate your hackathon experience from start to finish.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ElectricBorder
                        color="orange"
                        speed={0.3}
                        chaos={0.2}
                        thickness={2}
                        style={{ borderRadius: '0.75rem' }}
                    >
                        <Card className="text-center p-6 h-full">
                            <BrainCircuit className="w-12 h-12 mx-auto mb-4 text-primary"/>
                            <h3 className="text-xl font-bold font-headline">AI-Powered Assistance</h3>
                            <p className="text-muted-foreground mt-2">Leverage cutting-edge AI for idea generation, code reviews, project summaries, and more.</p>
                        </Card>
                    </ElectricBorder>
                    <ElectricBorder
                        color="orange"
                        speed={0.3}
                        chaos={0.2}
                        thickness={2}
                        style={{ borderRadius: '0.75rem' }}
                    >
                        <Card className="text-center p-6 h-full">
                            <UsersRound className="w-12 h-12 mx-auto mb-4 text-primary"/>
                            <h3 className="text-xl font-bold font-headline">Seamless Collaboration</h3>
                            <p className="text-muted-foreground mt-2">Find teammates, manage your team, and communicate effectively all in one place.</p>
                        </Card>
                    </ElectricBorder>
                     <ElectricBorder
                        color="orange"
                        speed={0.3}
                        chaos={0.2}
                        thickness={2}
                        style={{ borderRadius: '0.75rem' }}
                     >
                        <Card className="text-center p-6 h-full">
                            <BarChart className="w-12 h-12 mx-auto mb-4 text-primary"/>
                            <h3 className="text-xl font-bold font-headline">Real-time Tracking</h3>
                            <p className="text-muted-foreground mt-2">Stay updated with a live leaderboard, announcements, and clear submission tracking.</p>
                        </Card>
                    </ElectricBorder>
                </div>
            </section>

            <section className="py-24 scroll-m-20" data-animate-on-scroll>
                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">How It Works</h2>
                 <HowItWorksAnimation />
            </section>

            <section className="py-24 scroll-m-20" data-animate-on-scroll>
                <div className="w-full max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                        <div className="p-4 bg-card/50 rounded-lg">
                            <Building2 className="w-8 h-8 mx-auto mb-2 text-primary"/>
                            <p className="text-3xl font-bold">
                                 <CountUp end={institutionsCount} duration={2.5} enableScrollSpy scrollSpyDelay={200}/>+
                            </p>
                            <p className="text-muted-foreground text-sm">Institutions</p>
                        </div>
                        <div className="p-4 bg-card/50 rounded-lg">
                            <UsersRound className="w-8 h-8 mx-auto mb-2 text-primary"/>
                            <p className="text-3xl font-bold">
                                <CountUp end={15700} duration={2.5} separator="," enableScrollSpy scrollSpyDelay={200}/>+
                            </p>
                            <p className="text-muted-foreground text-sm">Users Engaged</p>
                        </div>
                        <div className="p-4 bg-card/50 rounded-lg">
                            <Code className="w-8 h-8 mx-auto mb-2 text-primary"/>
                            <p className="text-3xl font-bold">
                               <CountUp end={3200} duration={2.5} separator="," enableScrollSpy scrollSpyDelay={200}/>+
                            </p>
                            <p className="text-muted-foreground text-sm">Projects Submitted</p>
                        </div>
                        <div className="p-4 bg-card/50 rounded-lg">
                            <Trophy className="w-8 h-8 mx-auto mb-2 text-primary"/>
                            <p className="text-3xl font-bold">
                               <CountUp end={450} duration={2.5} enableScrollSpy scrollSpyDelay={200}/>+
                            </p>
                            <p className="text-muted-foreground text-sm">Hackathons Hosted</p>
                        </div>
                         <div className="p-4 bg-card/50 rounded-lg">
                            <Award className="w-8 h-8 mx-auto mb-2 text-primary"/>
                            <p className="text-3xl font-bold">
                               <CountUp end={900} duration={2.5} enableScrollSpy scrollSpyDelay={200}/>+
                            </p>
                            <p className="text-muted-foreground text-sm">Winning Projects</p>
                        </div>
                         <div className="p-4 bg-card/50 rounded-lg">
                            <BrainCircuit className="w-8 h-8 mx-auto mb-2 text-primary"/>
                            <p className="text-3xl font-bold">
                               <CountUp end={25000} duration={2.5} separator="," enableScrollSpy scrollSpyDelay={200}/>+
                            </p>
                            <p className="text-muted-foreground text-sm">AI Reviews</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 scroll-m-20" id="roles" data-animate-on-scroll>
                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">Tailored for Everyone</h2>
                 <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">A unique set of tools designed for every role in the hackathon ecosystem.</p>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <ElectricBorder
                        color="orange"
                        speed={0.3}
                        chaos={0.2}
                        thickness={2}
                        style={{ borderRadius: '0.75rem' }}
                     >
                         <Card className="flex flex-col h-full">
                             <CardHeader>
                                 <CardTitle className="flex items-center gap-3 font-headline text-2xl"><User className="text-primary"/> For Students</CardTitle>
                             </CardHeader>
                             <CardContent className="flex-grow space-y-3">
                                 <p className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/><span>Join teams or use the AI Matchmaker to find collaborators.</span></p>
                                 <p className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/><span>Brainstorm ideas with the AI Idea Generator.</span></p>
                                 <p className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/><span>Submit projects easily via GitHub.</span></p>
                                 <p className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/><span>Get instant AI-powered code reviews.</span></p>
                                 <p className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/><span>Track your rank on a live leaderboard.</span></p>
                             </CardContent>
                         </Card>
                     </ElectricBorder>
                     <ElectricBorder
                        color="orange"
                        speed={0.3}
                        chaos={0.2}
                        thickness={2}
                        style={{ borderRadius: '0.75rem' }}
                     >
                         <Card className="flex flex-col h-full">
                             <CardHeader>
                                 <CardTitle className="flex items-center gap-3 font-headline text-2xl"><Scale className="text-primary"/> For Judges</CardTitle>
                             </CardHeader>
                             <CardContent className="flex-grow space-y-3">
                                 <p className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/><span>Access all submissions in one place.</span></p>
                                 <p className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/><span>Read AI-generated project summaries for quick evaluation.</span></p>
                                 <p className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/><span>Use a standardized rubric for fair and consistent scoring.</span></p>
                                 <p className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/><span>View project analytics and score distributions.</span></p>
                                 <p className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/><span>Score both teams and individual contributions.</span></p>
                             </CardContent>
                         </Card>
                     </ElectricBorder>
                     <ElectricBorder
                        color="orange"
                        speed={0.3}
                        chaos={0.2}
                        thickness={2}
                        style={{ borderRadius: '0.75rem' }}
                     >
                         <Card className="flex flex-col h-full">
                             <CardHeader>
                                 <CardTitle className="flex items-center gap-3 font-headline text-2xl"><Shield className="text-primary"/> For Admins</CardTitle>
                             </CardHeader>
                             <CardContent className="flex-grow space-y-3">
                                 <p className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/><span>Manage multiple hackathon events seamlessly.</span></p>
                                 <p className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/><span>Approve student registrations and add judges.</span></p>
                                 <p className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/><span>Broadcast announcements to all participants.</span></p>
                                 <p className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/><span>Monitor real-time analytics and generate reports.</span></p>
                                 <p className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/><span>Manage support tickets with AI triage.</span></p>
                             </CardContent>
                         </Card>
                     </ElectricBorder>
                 </div>
             </section>

            <section className="py-24 scroll-m-20" data-animate-on-scroll>
                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">Meet Your AI Co-pilot</h2>
                 <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">HackSprint integrates powerful AI tools at every stage of your hackathon journey, acting as your personal assistant to help you succeed.</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                     <div className="relative flex justify-center items-center">
                        <svg width="250" height="250" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_15px_hsl(var(--primary))]">
                            <defs>
                                <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                    <stop offset="0%" style={{stopColor: 'hsl(var(--secondary))', stopOpacity: 1}} />
                                    <stop offset="70%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.9}} />
                                    <stop offset="100%" style={{stopColor: 'hsl(var(--background))', stopOpacity: 0}} />
                                </radialGradient>
                                <filter id="sunGlow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            <g filter="url(#sunGlow)" transform="translate(50 50)">
                                {[...Array(12)].map((_, i) => (
                                    <g key={i} transform={`rotate(${i * 30})`}>
                                        <path d="M 0 -40 C 10 -30, 10 -10, 0 -2" stroke="hsl(var(--primary) / 0.8)" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDelay: `${i * 100}ms`}}/>
                                        <path d="M 0 -40 C -10 -30, -10 -10, 0 -2" stroke="hsl(var(--primary) / 0.8)" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDelay: `${i * 100}ms`}}/>
                                    </g>
                                ))}
                                <circle cx="0" cy="0" r="22" fill="url(#sunGradient)" />
                                <circle cx="0" cy="0" r="18" fill="hsl(var(--background))" />
                                <text
                                    x="0"
                                    y="4"
                                    fontFamily="monospace"
                                    fontSize="12"
                                    fill="hsl(var(--secondary))"
                                    textAnchor="middle"
                                    fontWeight="bold"
                                >
                                    PDR
                                </text>
                            </g>
                        </svg>
                     </div>
                     <div className="space-y-8">
                         <div className="flex gap-4 items-start">
                             <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                 <Lightbulb className="w-5 h-5 text-primary" />
                             </div>
                             <div>
                                <h4 className="font-bold text-lg font-headline">Ideate & Plan</h4>
                                <p className="text-muted-foreground mt-1">Stuck for an idea? Use the AI Idea Generator. Need a presentation structure? The AI Pitch Coach has you covered.</p>
                             </div>
                         </div>
                          <div className="flex gap-4 items-start">
                             <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                 <UsersRound className="w-5 h-5 text-primary" />
                             </div>
                             <div>
                                <h4 className="font-bold text-lg font-headline">Find Your Team</h4>
                                <p className="text-muted-foreground mt-1">Our AI Matchmaker analyzes skills and work styles to suggest the most compatible teammates for you.</p>
                             </div>
                         </div>
                          <div className="flex gap-4 items-start">
                             <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                 <CodeXml className="w-5 h-5 text-primary" />
                             </div>
                             <div>
                                <h4 className="font-bold text-lg font-headline">Review & Refine</h4>
                                <p className="text-muted-foreground mt-1">Get instant, automated feedback on your code quality with our AI Code Reviewer, helping you fix issues before submission.</p>
                             </div>
                         </div>
                     </div>
                 </div>
            </section>

            <section className="py-24 scroll-m-20" data-animate-on-scroll>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">A Feature for Every Step</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {features.map((feature, index) => (
                        <FeatureCard 
                            key={feature.title}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            index={index}
                        />
                     ))}
                </div>
            </section>

            <section className="py-24 scroll-m-20 w-full overflow-hidden" data-animate-on-scroll>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">What People Are Saying</h2>
                <div className="relative w-full">
                    <div className="flex w-max scrolling-wrapper group-hover:pause">
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <ElectricBorder
                              key={index}
                              style={{ borderRadius: '0.75rem', margin: '0 1rem' }}
                              color="orange"
                              speed={0.3}
                              chaos={0.2}
                              thickness={2}
                            >
                                <Card className="w-[350px] flex-shrink-0 h-full">
                                    <CardContent className="p-6">
                                        <p className="italic text-foreground">"{testimonial.quote}"</p>
                                        <div className="mt-4 text-right">
                                            <p className="font-bold font-headline">{testimonial.name}</p>
                                            <p className="text-sm text-primary">{testimonial.role}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ElectricBorder>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-24 scroll-m-20" data-animate-on-scroll>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Our Esteemed Partners</h2>
                <div className="bg-muted/50 rounded-lg p-8">
                     <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                        {partners.map((partner) => (
                            <div key={partner.name} className="relative h-12 w-32 filter grayscale hover:filter-none transition-all duration-300">
                                 <Image
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    unoptimized
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
             <section className="py-24 scroll-m-20" data-animate-on-scroll>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="text-left">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent>
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>


             <section className="py-24 text-center scroll-m-20" data-animate-on-scroll>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">Ready to Start Hacking?</h2>
                <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
                    Join your college's next big event. Register as a student or sign in as a judge to begin.
                </p>
                 <div className="flex justify-center gap-4">
                    <Button size="lg" asChild>
                        <Link href="/student">I'm a Student</Link>
                    </Button>
                    <Button size="lg" variant="secondary" asChild>
                       <Link href="/judge">I'm a Judge / Admin</Link>
                    </Button>
                </div>
            </section>
        </div>
    </div>
  );
}
