import type { Metadata } from "next";
import "./globals.css";
import "./index.css";


export const metadata: Metadata = {
  title: "FOSS GECT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
