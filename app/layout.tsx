import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer/Footer";
import ScrollToTop from "./_components/Helper/ScrollToTop";
import dynamic from "next/dynamic";

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: 'swap', // لتحسين أداء تحميل الخط
});

// Dynamically import ResponsiveNav to avoid SSR issues with theme context
const ResponsiveNav = dynamic(() => import('./_components/Navbar/ResponsiveNav'), {
  ssr: false,
  loading: () => <div className="h-[12vh]" /> // Placeholder while loading
});

export const metadata: Metadata = {
  title: "Mustafa Khaled | Web Developer",
  description: "Professional portfolio showcasing my web development projects and skills",
  metadataBase: new URL("https://yourwebsite.com"),
  openGraph: {
    images: '/og-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
          <ResponsiveNav />
          {children}
          <Footer />
          <ScrollToTop />
      </body>
    </html>
  );
}