import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { OpencontextProvider } from "./components/contexts/Opencontext";
import { DarkcontextProvider } from "./components/contexts/Darkcontext";
const poppins = Poppins({ subsets: ["latin"] ,weight:"400"});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  themeColor:'red'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
       <DarkcontextProvider>
    <OpencontextProvider>
        {children}
        </OpencontextProvider>

       </DarkcontextProvider>
        
   
        
        </body>
    </html>
  );
}
