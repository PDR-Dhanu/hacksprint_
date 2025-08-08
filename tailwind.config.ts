import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['"Space Grotesk"', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-down': {
            '0%': { transform: 'translateY(-20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'card-in': {
            '0%': { transform: 'translateY(30px) scale(0.95)', opacity: '0' },
            '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        'slow-float': {
            '0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
            '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        'electric-bg': {
            '0%, 100%': { 'background-position': '0 0' },
            '50%': { 'background-position': '10px 10px' },
        },
        'electric-glitch': {
            '0%': { 'text-shadow': '1px 1px hsl(var(--secondary)), -1px -1px hsl(var(--accent))', transform: 'translate(0, 0)', opacity: 1 },
            '25%': { 'text-shadow': '2px 2px hsl(var(--secondary)), -2px -2px hsl(var(--accent))', transform: 'translate(-1px, 1px)', opacity: 0.8 },
            '50%': { 'text-shadow': '1px -1px hsl(var(--secondary)), -1px 1px hsl(var(--accent))', transform: 'translate(1px, -1px)', opacity: 1 },
            '75%': { 'text-shadow': '-2px 1px hsl(var(--secondary)), 2px -1px hsl(var(--accent))', transform: 'translate(1px, 1px)', opacity: 0.7 },
            '100%': { 'text-shadow': '1px 1px hsl(var(--secondary)), -1px -1px hsl(var(--accent))', transform: 'translate(0, 0)', opacity: 1 },
        },
        'text-reveal': {
            '0%': { opacity: '0', transform: 'scale(0.8)' },
            '40%': { opacity: '0', transform: 'scale(0.9)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'icon-glow': {
            '0%, 100%': { filter: 'drop-shadow(0 0 5px hsl(var(--primary)))' },
            '50%': { filter: 'drop-shadow(0 0 20px hsl(var(--accent)))' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-in-out forwards',
        'slide-in-up': 'slide-in-up 0.5s ease-in-out forwards',
        'slide-in-down': 'slide-in-down 0.5s ease-in-out forwards',
        'card-in': 'card-in 0.6s ease-out forwards',
        'slow-float': 'slow-float 8s ease-in-out infinite',
        'electric-bg': 'electric-bg 0.1s linear infinite',
        'electric-glitch': 'electric-glitch 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite',
        'text-reveal': 'text-reveal 4s ease-out forwards',
        'icon-glow': 'icon-glow 2s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
