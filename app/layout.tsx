import type { Metadata } from "next";
import "./globals.css";
import FloatingButtons from "./components/FloatingButtons";

export const metadata: Metadata = {
  title: "A3B Digital Business Card",
  description: "A3B Digital Business Card",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-gray-100`}
      >
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
