import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
       <head>
          {/* Add meta theme-color tag with default light theme color */}
          <meta
            name="theme-color"
            content="#0027" // Default to light theme color
            
          />
        
        </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider
        theme={{
          enabled: true,
          attribute: "class",
          defaultTheme: "dark",
          enableSystem: false
        }}
         
          search={{
            enabled: false,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
