import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
