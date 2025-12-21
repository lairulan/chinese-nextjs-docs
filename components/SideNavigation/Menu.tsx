import type { DocsLink } from "@/types/siteConfig";
import MenuItem from "./MenuItem";
export default function Menu({
  menuList,
  firstLevel,
}: {
  menuList?: DocsLink[];
  firstLevel?: boolean;
}) {
  return (
    <div className="relative">
      <ul
        className={
          firstLevel
            ? "px-0.5 last-of-type:mb-0 mb-8"
            : "px-0.5 last-of-type:mb-0 mr-6 border-l border-gray-200 pl-3 dark:border-gray-300 ml-4"
        }
      >
        {menuList &&
          menuList.map((item, index: number) => {
            return (
              <MenuItem key={index} link={item}>
                {item.children && <Menu menuList={item.children} />}
              </MenuItem>
            );
          })}
      </ul>
    </div>
  );
}
