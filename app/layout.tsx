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


