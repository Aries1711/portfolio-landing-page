import { Montserrat } from "next/font/google";
import "./globals.css";

// components section
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

// theme providers
import { ThemeProvider } from "@/components/themes/ThemeProvider";

// utils function to detect daytime on client server
import { detectIsDayTime } from "@/utils/detectDayOrNight";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Arisqi Setyawan",
  description: "Crafted with passion and creativity",
};

export default function RootLayout({ children }) {
  const isDay = detectIsDayTime();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme={isDay ? "light" : "dark"}
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
