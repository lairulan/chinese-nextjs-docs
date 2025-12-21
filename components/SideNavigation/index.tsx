"use client";

import {
  appStartedLinks,
  appGuidesLinks,
  appApiLinks,
  pagesStartedLinks,
  pagesApiLinks,
  pagesBuildLinks,
  architectureLinks,
  communityLinks,
  pagesGuidesLinks,
} from "@/config/menuLink";
import type { DocsLink } from "@/types/siteConfig";
import { useMemo } from "react";
import Menu from "./Menu";
import MenuGroup from "./MenuGroup";
import ModeSelect from "./ModeSelect";
import { useGlobalState } from "@/components/GlobalStateProvider";
import MobileSideMenu from "@/components/SideNavigation/MobileSideMenu";

export default function SideNavigation() {
  const { routerMode } = useGlobalState();
  const menuList: DocsLink[] = useMemo(() => {
    let list: DocsLink[] = [];
    if (routerMode === "pages") {
      list = [
        pagesStartedLinks,
        pagesGuidesLinks,
        pagesBuildLinks,
        pagesApiLinks,
        architectureLinks,
        communityLinks,
      ];
    } else {
      list = [
        appStartedLinks,
        appGuidesLinks,
        appApiLinks,
        architectureLinks,
        communityLinks,
      ];
    }
    return list;
  }, [routerMode]);

  return (
    <>
      {/* pc menu */}
      <div className="hidden md:flex md:shrink-0 md:flex-col md:justify-between sticky top-[121px] h-[calc(100vh-121px)] w-[284px]">
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
      {/* mobile menu */}
      <MobileSideMenu menuList={menuList} />
    </>
  );
}
