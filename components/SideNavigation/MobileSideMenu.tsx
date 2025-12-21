import ModeSelect from "@/components/SideNavigation/ModeSelect";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { DocsLink } from "@/types/siteConfig";
import MenuGroup from "@/components/SideNavigation/MenuGroup";
import Menu from "@/components/SideNavigation/Menu";

// 移动端menu
export default function MobileSideMenu({ menuList }: { menuList: DocsLink[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "md:hidden sticky z-10 border-b border-gray-200 bg-white/80 px-4 py-3 backdrop-blur-sm backdrop-saturate-200 dark:bg-black/50",
        isOpen ? "bg-white dark:bg-black/80" : ""
      )}
    >
      <div
        className="w-full flex items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}{" "}
        Menu
      </div>
      {isOpen ? (
        <div className="h-screen w-full block">
          <div className="pb-[1px]">
            <ModeSelect></ModeSelect>
          </div>
          <div className="relative overflow-hidden">
            <nav className="styled-scrollbar flex h-[calc(100vh-200px)] flex-col overflow-y-scroll pb-4 pr-2 dark:text-white">
              {menuList.map((item, index) => {
                return (
                  <MenuGroup key={index} group={item}>
                    <Menu
                      {...(item.children && { menuList: item.children })}
                      firstLevel
                    ></Menu>
                  </MenuGroup>
                );
              })}
            </nav>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
