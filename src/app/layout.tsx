import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
// const intl = localFont({
//   src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
//   variable: "--font-intl",
//   weight: "100 900",
// })
const firaCode = localFont({
  src: "./fonts/FiraCode-VariableFont_wght.ttf",
  variable: "--font-fira-code",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "1000 Hours",
  description: "1000 Hours Design Exercise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
