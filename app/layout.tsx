import type { Metadata } from "next";
import "./globals.css";
import "./index.css";

export const metadata: Metadata = {
  title: "FOSS GECT",
  icons: {
    icon: "images/fossgect_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
