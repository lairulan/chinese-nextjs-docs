import GoogleAdsense from "@/app/GoogleAdsense";
import GoogleAnalytics from "@/app/GoogleAnalytics";
import PlausibleAnalytics from "@/app/PlausibleAnalytics";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { TailwindIndicator } from "@/components/theme/TailwindIndicator";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import "@/styles/loading.css";
import { Viewport } from "next";

export const metadata = {
  ...siteConfig,
  title: siteConfig.name,
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColors,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider
          attribute="class"
          storageKey="theme"
          defaultTheme={siteConfig.defaultNextTheme}
        >
          {/* <AdBanner /> */}
          <Header />
          <main>{children}</main>
          <Footer />
          {/* <Analytics /> */}
          <TailwindIndicator />
        </ThemeProvider>
        <Toaster />
        {process.env.NODE_ENV === "development" ? (
          <></>
        ) : (
          <>
            <GoogleAnalytics />
            <PlausibleAnalytics />
            <GoogleAdsense />
            {/* <BaiDuAnalytics /> */}
          </>
        )}
      </body>
    </html>
  );
}
