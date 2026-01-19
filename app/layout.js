import { Overpass, Ubuntu } from "next/font/google";
import "./globals.css";

const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
  weight: ["300", "600"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Blogr",
  description: "Blogr Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${overpass.variable} ${ubuntu.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
