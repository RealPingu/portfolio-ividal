import type { Metadata } from "next";
import { Slabo_13px } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/navbar";
  
    // General font
    const slabo = Slabo_13px({
        weight: "400",
        subsets: ["latin"],
    });
  
    export const metadata: Metadata = {
        title: "Inti Vidal",
        description: "My portfolio website",
    };
  
    export default function RootLayout({ children }: LayoutProps<"/">) {
        return (
            <html
                lang="en" 
                data-theme="retro" 
                className={`${slabo.className} antialiased`}
            >
                <body className="min-h-screen flex flex-col bg-base-100 text-base-content">
                    {/* 1. Full-width top navbar */}
                    <Navbar />
  
                    {/* 2. Global centered content container */}
                    <main className="flex-1 w-full max-w-6xl xl:max-w-7xl mx-auto px-6     
  sm:px-8 lg:px-12 py-8">
                        {children}
                    </main>
  
                    {/* 3. Global footer */}
                    <footer className="p-6 text-center opacity-60">
                        this is a footer
                    </footer>
                </body>
            </html>
        );
    }

