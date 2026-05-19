import {
  CirclesIcon,
  CoinIcon,
  GridIcon,
  PillIcon,
  PlusIcon,
  RectangleIcon,
  SubtractIcon,
} from "@/components/icons/icons";
import { JSX, SVGProps } from "react";

type IconType =
  | "rectangle"
  | "coin"
  | "grid"
  | "circles"
  | "pill"
  | "subtract"
  | "plus";

const iconMap: Record<
  IconType,
  (props: SVGProps<SVGSVGElement>) => JSX.Element
> = {
  rectangle: RectangleIcon,
  coin: CoinIcon,
  grid: GridIcon,
  circles: CirclesIcon,
  pill: PillIcon,
  subtract: SubtractIcon,
  plus: PlusIcon,
};

type ResponsiveSizes = {
  base?: number;
  md?: number;
  xl?: number;
};

interface TagProps {
  icon: IconType;
  label?: string;
  size?: number;
  sizes?: ResponsiveSizes;
}

const breakpointPrefix: Record<keyof ResponsiveSizes, string> = {
  base: "",
  md: "md:",
  xl: "xl:",
};

function buildSizeClasses(sizes: ResponsiveSizes): string {
  return (
    Object.entries(sizes) as [keyof ResponsiveSizes, number | undefined][]
  )
    .filter(([, v]) => v !== undefined)
    .map(([bp, v]) => `${breakpointPrefix[bp]} size-[${v}px]`)
    .join(" ");
}

export const Tag = ({ icon, label, size, sizes }: TagProps) => {
  const Icon = iconMap[icon];

  if (sizes) {
    const sizeClasses = buildSizeClasses(sizes);
    return (
      <div className="flex flex-row items-center gap-1.5">
        <span className={sizeClasses}>
          <Icon width="100%" height="100%" />
        </span>
        {label && <p>{label}</p>}
      </div>
    );
  }

  return (
    <div className="flex flex-row items-center gap-1.5">
      <Icon width={size ?? undefined} height={size ?? undefined} />
      {label && <p>{label}</p>}
    </div>
  );
};
