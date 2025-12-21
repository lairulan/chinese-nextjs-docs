import fs from "fs";
import path from "path";

import {
  appStartedLinks,
  appApiLinks,
  pagesStartedLinks,
  pagesApiLinks,
  pagesBuildLinks,
  architectureLinks,
  communityLinks,
  appGuidesLinks,
  pagesGuidesLinks,
} from "../config/menuLink";

import { DocsLink } from "../types/siteConfig";

function generateIndex(mode: "app" | "pages") {
  let list: DocsLink[] = [];
  let index: string[] = [];
  if (mode === "app") {
    list = [
      appStartedLinks,
      appGuidesLinks,
      appApiLinks,
      architectureLinks,
      communityLinks,
    ];
  } else {
    list = [
      pagesStartedLinks,
      pagesGuidesLinks,
      pagesBuildLinks,
      pagesApiLinks,
      architectureLinks,
      communityLinks,
    ];
  }
  function flattenMenu(menus) {
    menus.forEach((item) => {
      index.push(item.href);
      if (item.children?.length) {
        flattenMenu(item.children);
      }
    });
  }
  flattenMenu(list);
  return index;
}

function generateHasChildrenIndex() {
  let linkMap = {};
  const menuLinks = [
    appStartedLinks,
    appGuidesLinks,
    appApiLinks,
    pagesStartedLinks,
    pagesGuidesLinks,
    pagesBuildLinks,
    pagesApiLinks,
    architectureLinks,
    communityLinks,
  ];
  function travelMenu(data) {
    data.forEach((item) => {
      if (item.children) {
        if (item.href === "/docs") {
          linkMap[item.href] = menuLinks.map((i) => i.href);
        } else {
          linkMap[item.href] = item.children.map((i) => i.href);
        }
        travelMenu(item.children);
      }
    });
  }
  travelMenu(menuLinks);
  return linkMap;
}

const appIndex = generateIndex("app");
const pagesIndex = generateIndex("pages");
const hasChildren = generateHasChildrenIndex();

fs.writeFileSync(
  path.join(process.cwd(), "json", "appIndex.json"),
  JSON.stringify(appIndex, null, 2)
);

fs.writeFileSync(
  path.join(process.cwd(), "json", "pagesIndex.json"),
  JSON.stringify(pagesIndex, null, 2)
);

fs.writeFileSync(
  path.join(process.cwd(), "json", "hasChildren.json"),
  JSON.stringify(hasChildren, null, 2)
);
