import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  preload: false,
});

export const metadata = {
  title: "Aesthetic Wall Calendar",
  description: "A premium interactive wall calendar component",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-slate-800 font-sans">{children}</body>
    </html>
  );
}
