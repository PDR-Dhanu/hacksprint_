
# 30-Day LinkedIn Plan: Building HackSprint in Public

This document outlines a 30-day content plan for showcasing the development of the HackSprint application on LinkedIn.

---

### 🚀 Day 1/30: Announcing the HackSprint 30-Day Challenge!

Starting today, I'm building **HackSprint**—an all-in-one, AI-powered platform to manage college hackathons—and I'm doing it completely in public.

Hackathons are magical, but organizing them is often chaotic. HackSprint aims to fix that by providing a seamless experience for everyone involved: Students, Judges, and Organizers.

🔥 **What makes HackSprint different?** It's not just a management tool; it's an AI-powered co-pilot for the entire hackathon journey.

**🛠️ Tech Stack Highlights:**
*   **Framework:** Next.js 15 (App Router) & TypeScript
*   **Styling:** Tailwind CSS & Shadcn/UI
*   **Generative AI:** Google's Gemini models via Genkit
*   **Backend (Simulated):** React Context & `localStorage` to mirror a Firebase backend.

**💡 What I’ll Share Daily:**
*   Real code implementation and feature breakdowns.
*   Deep dives into AI integration with Genkit.
*   UI/UX decisions using Shadcn and Tailwind.
*   The challenges and wins of building a full-stack SaaS platfor.

**🎯 The Goal:** To create a production-ready application that streamlines hackathon management and empowers participants with powerful AI tools.

Follow along for the next 30 days! Ask questions, suggest features, and watch HackSprint come to life.

#BuildInPublic #AI #SaaS #NextJS #Genkit #TypeScript #Hackathon

---

### 🚀 Day 2/30: Laying the Foundation - UI & State Management

Today was all about setting up a solid foundation. A great app needs a robust structure and a delightful UI.

**🔧 Core UI & Framework Decisions:**
*   **Next.js 15 App Router:** For server-first components, performance, and clean routing.
*   **Shadcn/UI & Tailwind CSS:** Why? Speed and consistency. Shadcn gives me beautifully designed, accessible components that I can own and customize. Tailwind CSS keeps styling fast and maintainable.
*   **Global State with React Context:** To simulate a backend, I've set up a global `HackathonProvider`. This context acts as our single source of truth for all app data—users, teams, projects, etc. It uses a reducer for predictable state transitions, making it a powerful pattern for managing complex client-side data.

**✅ Today's Wins:**
*   Initialized the Next.js project and configured the theme in `globals.css`.
*   Built the main `RootLayout` with `ThemeProvider` for light/dark mode.
*   Created the `HackathonProvider` to manage all application state.
*   Set up a multi-tenant system with a "College Selector" component, allowing the entire app context to switch based on the selected institution.

This setup ensures that from day one, we have a scalable and maintainable frontend architecture. The app feels fast, looks clean, and is ready for the complex features ahead.

**🔮 Tomorrow’s Plan:** Building the core user authentication flow (simulated) and designing the separate portals for Students, Judges, and Admins.

#NextJS #Shadcn #TailwindCSS #React #Frontend #BuildInPublic

---

### 🚀 Day 3/30: User Authentication & Role-Based Portals

Authentication is the gateway to any application. Today, I built out the complete (simulated) auth system for HackSprint's three distinct user roles.

**🔑 Feature Breakdown:**
*   **Multi-Role Login:** Created separate login flows for Students and Judges/Admins. A single entry point for Judges and Admins simplifies the experience for faculty who might wear both hats.
*   **Client-Side Auth Logic:** All auth logic is handled through the `HackathonProvider` and the `hackathon-api.ts` file, which mimics calls to a real backend like Firebase Auth. It handles registration, login, and error states.
*   **Role-Based Access Control (RBAC):** Once a user logs in, the global context updates with their role (`currentUser`, `currentJudge`, `currentAdmin`). The UI then conditionally renders the correct portal and navigation, ensuring users only see what they're supposed to.
*   **Pending/Approved States:** New student registrations are set to a 'pending' status, requiring admin approval—a critical feature for private college hackathons.

This role-based architecture is key to providing a tailored experience for each user type, which is central to HackSprint's vision.

**🔮 Tomorrow’s Plan:** Deep dive into the Admin Dashboard, focusing on the user approval system and judge management.

#React #Authentication #NextJS #BuildInPublic #Day3

---

### 🚀 Day 4/30: The Admin Dashboard - Command Center

The Admin Dashboard is the central nervous system of HackSprint. Today, I built the user management and approval features.

**✅ Key Admin Features Implemented:**
*   **Pending Approvals:** A dedicated section where admins can see a list of all students awaiting registration approval. With one click, they can approve a student, which updates their status globally and unlocks their access.
*   **User & Judge Lists:** Clear, scrollable lists of all approved students and registered judges, with the ability to remove users if needed.
*   **Direct Registration:** Admins can bypass the approval queue by directly adding a student or judge with a temporary password, perfect for on-the-spot registrations.
*   **Responsive Layout:** The dashboard is built on a responsive grid, ensuring admins can manage the event from their desktop or a tablet on the go.

**🔮 Tomorrow’s Plan:** Implementing the Announcement system, allowing admins to broadcast real-time updates to all participants.

#AdminPanel #Dashboard #UIUX #NextJS #BuildInPublic

---

### 🚀 Day 5/30: Real-Time Announcements

Communication is key during a fast-paced hackathon. Today, I built the Announcements feature.

**📢 Feature Highlights:**
*   **Admin Broadcast:** Admins can post announcements that appear in a real-time feed for all users.
*   **Scheduled & Expiring Posts:** I added the ability to set a "publish at" and "expires at" date and time. This allows admins to queue up announcements in advance (e.g., "Hacking ends in 1 hour!") and have them automatically disappear after the event.
*   **Notification System:** A subtle bell icon in the header now indicates unread announcements, ensuring no one misses a critical update.

**🔮 Tomorrow’s Plan:** Shifting focus to the Student Portal to build the team creation and joining flow.

#Realtime #Feature #NextJS #BuildInPublic

---

### 🚀 Day 6/30: Student Portal - Team Management

Hackathons are all about teamwork. Today, I built the core of team collaboration in HackSprint.

**🤝 Team Features:**
*   **Create a Team:** Students can create a new team for a selected hackathon. Upon creation, a unique 6-character join code is generated.
*   **Join with a Code:** Students can use this code to request to join an existing team.
*   **Request & Approval Flow:** Team creators see a list of incoming join requests and can either accept or reject them. This prevents unwanted members from joining.
*   **Team Hub:** Once on a team, students land in a dedicated "Team Hub" showing their members, join code, and a real-time chat.

**🔮 Tomorrow’s Plan:** Introducing the first major AI feature: the AI Teammate Finder.

#Collaboration #StudentExperience #NextJS #BuildInPublic

---

### **Day 7: AI Feature #1 - The Teammate Matchmaker**
*   **Post:** "Finding the right team is half the battle. Today, I integrated an AI Teammate Matchmaker! It analyzes user profiles (skills, work style) to suggest the most compatible partners. Dive into the Genkit flow and Zod schemas that make this possible."
*   **Tomorrow's Plan:** Building the user profile page where students add the data that powers the matchmaker.

### **Day 8: Enhancing Profiles for Better Matching**
*   **Post:** "The AI Matchmaker is only as good as the data it has. Today was about creating a rich user profile page where students can add their skills, social links, and—most importantly—select 'Work Style' tags. This structured data is key for the AI to make meaningful recommendations."
*   **Tomorrow's Plan:** Starting the project submission journey with another AI feature: the Idea Generator.

### **Day 9: AI Feature #2 - The Idea Generator**
*   **Post:** "Writer's block, but for hacking. Today, I built an AI Idea Generator. Students can input interests (e.g., 'AI in Healthcare'), and Genkit suggests relevant hackathon themes. From a theme, it can generate a concrete project idea with a title and description."
*   **Tomorrow's Plan:** Building the project submission form itself.

### **Day 10: The Project Submission Form**
*   **Post:** "With an idea in hand, it's time to submit. I built the project submission form where teams provide their project name, description, and GitHub URL. This marks the official entry into the competition."
*   **Tomorrow's Plan:** Developing the "Project View" where teams can see their submitted project and access more AI tools.

### **Day 11: AI Feature #3 - AI Code Review**
*   **Post:** "What if you could get feedback *before* judging? I've integrated an AI Code Reviewer. From their Project View, students can trigger a Genkit flow that analyzes their GitHub repo and provides instant feedback on code quality and potential issues."
*   **Tomorrow's Plan:** Building the AI Pitch Coach.

### **Day 12: AI Feature #4 - AI Pitch Coach (Outline)**
*   **Post:** "A great project needs a great pitch. The new AI Pitch Coach generates a 5-slide presentation outline (Intro, Problem, Solution, etc.) based on the project's details. This gives teams a ready-to-use structure for their final presentation."
*   **Tomorrow's Plan:** Adding the groundbreaking TTS voiceover feature.

### **Day 13: AI Feature #5 - Pitch Audio with TTS**
*   **Post:** "This is cool. After generating a pitch outline, users can now click 'Generate Audio.' I built a flow that uses Gemini's TTS model to create a full audio voiceover of the pitch. I had to use the `wav` package to convert the raw PCM audio into a playable format. A game-changer for practice!"
*   **Tomorrow's Plan:** Implementing the AI-generated project image.

### **Day 14: AI Feature #6 - AI Project Image Generation**
*   **Post:** "Every project deserves a unique identity. Today, I built a feature that uses Imagen 4, Google's image generation model, to create an abstract hero image for each project based on its name and description. These images will be displayed in the public project gallery."
*   **Tomorrow's Plan:** Building that public Project Showcase page.

### **Day 15: The Public Project Showcase**
*   **Post:** "Celebrating the work! Today, I created the Project Showcase, a public gallery of all submitted projects for a hackathon. Each card displays the project's name, team, and its unique AI-generated image. It's a tribute to the participants' hard work."
*   **Tomorrow's Plan:** Shifting gears to the Judging Portal.

### **Day 16: The Judging Portal - A Centralized Hub**
*   **Post:** "Fairness and efficiency are crucial for judging. I built the foundation for the Judging Portal today. It displays a list of all submitted projects for a given hackathon, indicating which ones the judge has already scored."
*   **Tomorrow's Plan:** Building the scoring form itself.

### **Day 17: The Scoring Form & Rubric**
*   **Post:** "I've built the detailed scoring form. Judges can now score projects against a predefined rubric, covering everything from innovation to technical execution. The form also allows for scoring individual team members on their contributions."
*   **Tomorrow's Plan:** Integrating AI assistance directly into the scoring form.

### **Day 18: AI Feature #7 - AI Project Summaries for Judges**
*   **Post:** "To save judges time, I added an 'AI Summary' button to the scoring form. It calls a Genkit flow that reads the project's details and generates a concise, 3-4 sentence summary, helping judges quickly grasp the core concept."
*   **Tomorrow's Plan:** Integrating the Pitch Coach for judges.

### **Day 19: Judge Access to AI Pitch Coach**
*   **Post:** "Judges now have access to the same AI Pitch Coach tools as students. From the scoring form, they can generate the project's pitch outline and listen to the TTS audio. This provides incredible context on the team's presentation readiness."
*   **Tomorrow's Plan:** Developing the real-time Leaderboard.

### **Day 20: The Live Leaderboard**
*   **Post:** "Competition meets transparency. Today, I built the live Leaderboard. It fetches all project scores in real-time, calculates the average, and displays a ranked list. The top 3 are featured in special 'Podium' cards. All powered by client-side calculations in a `useMemo` hook."
*   **Tomorrow's Plan:** Building the Final Results page.

### **Day 21: Announcing the Winners - The Results Page**
*   **Post:** "The grand finale! I created the Results page, which officially announces the top 3 winners with celebratory UI, including a confetti animation. This is where the winners can download their certificates."
*   **Tomorrow's Plan:** Certificate generation.

### **Day 22: PDF Certificate Generation**
*   **Post:** "Making achievements official. I implemented PDF certificate generation using `jsPDF` and `qrcode`. Each certificate (for winners or participants) includes a unique QR code that links to a public verification page, ensuring its authenticity."
*   **Tomorrow's Plan:** Building the public certificate verification page.

### **Day 23: The Public Certificate Verification Page**
*   **Post:** "Trust and verification are key. I built a dynamic verification page at `/verify/[projectId]`. When the QR code is scanned, this page fetches the project data from the database and confirms the certificate's details, preventing fraud."
*   **Tomorrow's Plan:** Building the Support Ticket system.

### **Day 24: The Student Support Ticket System**
*   **Post:** "Every user needs help sometimes. I created the Support page where students can submit a ticket with their questions. This is the first step in our advanced support workflow."
*   **Tomorrow's Plan:** Integrating AI for automated support triage.

### **Day 25: AI Feature #8 - AI Support Ticket Triage**
*   **Post:** "To help admins, I built an AI triage system. When a student submits a ticket, a Genkit flow automatically analyzes it to determine its category (e.g., 'Technical Issue') and priority ('Low', 'Medium', 'High'). It even drafts a polite initial response!"
*   **Tomorrow's Plan:** Building the support dashboard for admins.

### **Day 26: The Admin Support Dashboard**
*   **Post:** "I built the admin-facing Support Dashboard today. It displays all incoming tickets in a Kanban-style board, organized by status ('New', 'In Progress', 'Resolved'). Admins can see the AI-triaged category and priority at a glance."
*   **Tomorrow's Plan:** Adding AI response generation for admins.

### **Day 27: AI Feature #9 - AI-Drafted Support Responses**
*   **Post:** "Closing the loop on support. Admins can now click 'Use AI to Draft Response' on a ticket. This calls a Genkit flow that generates a comprehensive, helpful resolution in Markdown format, which the admin can then edit and send."
*   **Tomorrow's Plan:** Building the data export and analytics features.

### **Day 28: Admin Analytics & Data Export**
*   **Post:** "Data is power. I built the Analytics tab in the Admin Dashboard, featuring charts (using Recharts) that show score distributions and criteria averages. I also added functionality to export participants and submissions as CSV files."
*   **Tomorrow's Plan:** Implementing the final AI feature: automated hackathon reports.

### **Day 29: AI Feature #10 - Automated Hackathon Summary Report**
*   **Post:** "The final AI feature is here! Admins can now generate a complete, automated summary report for any hackathon. The Genkit flow analyzes all projects, teams, and scores to produce a professional Markdown report, ready for stakeholders."
*   **Tomorrow's Plan:** Final review, QA, and preparing for "launch."

### **Day 30: Final Review & Project Showcase**
*   **Post:** "Day 30! I've completed the full build of HackSprint. Today was spent doing a final QA pass, fixing responsiveness issues, and polishing the UI. The result is a feature-complete, AI-powered platform ready to manage hackathons. Thank you for following along on this journey!"
*   **Final Action:** Post a live demo link and a link to the GitHub repository.

---
