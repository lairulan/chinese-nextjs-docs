import CanaryIcon from "@/components/icons/canary";
import ExperimentalIcon from "@/components/icons/experimental";
import LegacyIcon from "@/components/icons/legacy";
import { cn } from "@/lib/utils";

// Function to get the appropriate icon based on version
export function getVersionIcon({
  version,
  className,
}: {
  version: string;
  className?: string;
}) {
  const lowerVersion = version.toLowerCase();

  if (
    lowerVersion.includes("experimental") ||
    lowerVersion.includes("unstable")
  ) {
    return <ExperimentalIcon className={cn("h-4 w-4", className)} />;
  } else if (lowerVersion.includes("canary")) {
    return <CanaryIcon className={cn("h-4 w-4", className)} />;
  } else if (lowerVersion.includes("legacy")) {
    return <LegacyIcon className={cn("h-4 w-4", className)} />;
  }

  return null;
}
