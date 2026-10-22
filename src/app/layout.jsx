import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DEFAULT_PALETTE } from "@/lib/theme-config";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Team Most Wanted | Premier Two-Wheeler Service Center",
  description:
    "Expert two-wheeler maintenance, performance tuning, and repairs by Team Most Wanted.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme={DEFAULT_PALETTE}
      className={`${outfit.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider defaultPalette={DEFAULT_PALETTE}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
