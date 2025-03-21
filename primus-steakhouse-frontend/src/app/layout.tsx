import "./globals.css";
import { SanityLive } from "@/sanity/live";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import ScrollHandler from "@/components/ScrollHandler";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex items-center flex-col h-full justify-center`}>
        <ScrollHandler />
        <Navbar />
        {children}
        <SanityLive />
        <Footer />
      </body>
    </html>
  );
}
