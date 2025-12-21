import {
  ArrowUpRight,
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  Menu,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RIGHT_BUTTONS } from "@/components/header/Header";
import { cn } from "@/lib/utils";

export function MobileRightMenu() {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-8 px-2">
          <Menu className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 z-[9999] bg-primary-foreground">
        <DropdownMenuLabel>{siteConfig.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {siteConfig.headerLinks.map((link) => (
            <DropdownMenuItem key={link.href}>
              <Link
                key={link.label}
                href={link.href}
                title={link.label}
                {...(link.target && { target: link.target })}
                {...(link.rel && { rel: link.rel })}
                prefetch={link.prefetch}
                className={`${
                  pathname?.startsWith(link.href) ? "navbar-link-active" : ""
                } flex items-center no-underline transition-colors duration-150 text-sm rounded-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary relative`}
              >
                {link.label}
                {link.target && link.target === "_blank" ? (
                  <ArrowUpRight className="ml-0 w-4 h-4" />
                ) : (
                  <></>
                )}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {RIGHT_BUTTONS.map((button) => (
            <DropdownMenuItem key={button.label}>
              <Link
                key={button.label}
                href={button.href}
                title={button.label}
                target="_blank"
                rel="noopener noreferrer nofollow"
                prefetch={false}
                className={cn(
                  buttonVariants({ variant: button.variant as any }),
                  button.variant === "outline"
                    ? "border-gray-300 dark:border-gray-700 text-primary hover:text-primary/90"
                    : "text-primary-foreground bg-primary hover:text-primary-foreground/90",
                  "w-full"
                )}
              >
                {button.icon && <button.icon className="mr-1 h-4 w-4" />}
                {button.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
