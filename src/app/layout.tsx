

"use client";

import './globals.css';
import { PT_Sans, Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import { HackathonProvider, useHackathon } from '@/context/HackathonProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import IntroAnimation from '@/components/IntroAnimation';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import CollegeLogin from '@/components/CollegeLogin';
import { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';
import { useCustomCursor } from '@/hooks/use-custom-cursor';
import FallingStars from '@/components/ui/FallingStars';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

function AppContent({ children }: { children: React.ReactNode }) {
    const { state } = useHackathon();
    const { selectedCollege, isInitialized, isLoading } = state;
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
      if (isInitialized) {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 2000);

        return () => clearTimeout(timer);
      }
    }, [isInitialized]);
    
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-animate-on-scroll', 'true');
          }
        });
      }, { threshold: 0.1 });

      const elements = document.querySelectorAll('[data-animate-on-scroll]');
      elements.forEach(el => observer.observe(el));

      return () => elements.forEach(el => observer.unobserve(el));
    }, [children]);

    if (!isInitialized || (showIntro && !selectedCollege)) {
        return <IntroAnimation />;
    }

    if (isLoading && selectedCollege) {
         return (
            <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background">
                <Loader className="w-12 h-12 animate-spin text-primary" />
                <p className="mt-4 text-muted-foreground">Loading {selectedCollege} data...</p>
            </div>
        )
    }
    
    if (!selectedCollege) {
        return <CollegeLogin />;
    }

    return (
         <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pb-24">
                {children}
            </main>
            <Footer />
        </div>
    );
}

function AppWrapper({ children }: { children: React.ReactNode }) {
    useCustomCursor();

    return (
        <>
            <FallingStars />
            <div className="custom-cursor" />
            <AppContent>{children}</AppContent>
        </>
    );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <title>HackSprint - Hackathon Management</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏆</text></svg>" />
      </head>
      <body className={cn("font-body antialiased", ptSans.variable, playfairDisplay.variable)}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <HackathonProvider>
              <AppWrapper>{children}</AppWrapper>
              <Toaster />
          </HackathonProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
