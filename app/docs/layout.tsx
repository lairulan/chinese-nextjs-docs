import SideNavigation from "@/components/SideNavigation";
import TOC from "@/components/TOC";
import { GlobalStateProvider } from "@/components/GlobalStateProvider";
import { LanguageProvider } from "@/components/mdx/LanguageSelector/LanguageContext";

export default function DocsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative mx-auto max-w-screen-xl px-4 py-0 md:flex md:flex-row md:py-10">
      <GlobalStateProvider>
        <SideNavigation></SideNavigation>
        <LanguageProvider>
          <article
            id="article"
            className="w-full min-w-0 max-w-6xl px-1 md:px-6"
            style={{ minHeight: "calc(-103px + 100vh)" }}
            data-docs-container
          >
            {children}
          </article>
        </LanguageProvider>
        <TOC />
      </GlobalStateProvider>
    </div>
  );
}
