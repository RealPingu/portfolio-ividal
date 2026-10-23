import type { Metadata } from "next";
import { Slabo_13px } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/navbar";
import { Providers } from "./providers";

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
            className={`${slabo.className} antialiased scroll-smooth scroll-pt-20`}
            suppressHydrationWarning
        >
            <body
                className="min-h-screen flex flex-col bg-base-100 text-base-content transition-colors duration-200"
                suppressHydrationWarning
            >
                <Providers>
                    {/* Full-width edge-to-edge sticky header */}
                    <div className="sticky top-0 z-50 w-full backdrop-blur-md bg-base-100/90 border-b border-base-200/80 shadow-xs">
                        <Navbar />
                    </div>

                    {/* Content area with fluid scaling and static side margins */}
                    <main className="flex-1 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-16">
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    );
}
