import "./globals.css";
import Header from "@/components/Header"; // or "../components/Header" if alias "@" isn't set
import Footer from "@/components/Footer";
import { Nunito } from "next/font/google";

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Homeward Senior Placement",
  description: "Helping families find the right senior living option",
  icons: {
    icon: "/google-pic.png",
    shortcut: "/google-pic.png",
    apple: "/google-pic.png",
  },
  openGraph: {
    title: "Homeward Senior Placement",
    description: "Helping families find the right senior living option",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Homeward Senior Placement Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homeward Senior Placement",
    description: "Helping families find the right senior living option",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}


