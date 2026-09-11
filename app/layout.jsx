import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata = {
  title: "Moez Zakir | Portfolio",
  description:
    "Full Stack Developer & AI/ML Engineer — Building intelligent, scalable, and dynamic systems.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sora.variable} suppressHydrationWarning>
      <body className={sora.className}>{children}</body>
    </html>
  );
}
