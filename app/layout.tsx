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
    icons: {
        icon: "/icon.svg",
    },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            data-theme="retro"
            className={`${slabo.className} antialiased scroll-smooth scroll-pt-20`}
        >
            <body className="min-h-screen flex flex-col bg-base-100 text-base-content">
                <div className="sticky top-0 z-50 backdrop-blur-md bg-base-100/80">
                    <Navbar />
                </div>

                <main className="flex-1 w-full max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16">
                    {children}
                </main>
            </body>
        </html>
    );
}

