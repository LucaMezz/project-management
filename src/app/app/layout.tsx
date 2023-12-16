import "@/styles/globals.css";
import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/app/footer";
import Sidebar from "@/components/layout/app/sidebar";
import SiteHeader from "@/components/layout/app/site-header";
import { TailwindIndicator } from "@/components/layout/tailwind-indicator";
import { ThemeProvider } from "@/components/layout/theme-provider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex min-h-screen flex-row">
              <Sidebar />
              <div className="flex w-[calc(100%-13.5rem)] flex-col">
                <SiteHeader />
                <div className="flex-1 bg-muted">{children}</div>
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
