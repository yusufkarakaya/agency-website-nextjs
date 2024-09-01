import { Poppins, Saira } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const saira = Saira({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "StreamWave Innovations.",
  description:
    "StreamWave Innovations is a software development company that specializes in web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={saira.className}>{children}</body>
    </html>
  );
}
