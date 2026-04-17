import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veriti",
  description: "Premium banking infrastructure for modern teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
