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

const sizeClass: Record<number, string> = {
  6: "size-[6px]",
  9: "size-[9px]",
  11: "size-[11px]",
  21: "size-[21px]",
};

function buildSizeClasses(sizes: ResponsiveSizes): string {
  const parts: string[] = [];
  if (sizes.base !== undefined) parts.push(sizeClass[sizes.base] ?? `size-[${sizes.base}px]`);
  if (sizes.md !== undefined) parts.push(`md:${sizeClass[sizes.md] ?? `size-[${sizes.md}px]`}`);
  if (sizes.xl !== undefined) parts.push(`xl:${sizeClass[sizes.xl] ?? `size-[${sizes.xl}px]`}`);
  return parts.join(" ");
}

export const Tag = ({ icon, label, size, sizes }: TagProps) => {
  const Icon = iconMap[icon];

  if (sizes) {
    const sizeClasses = buildSizeClasses(sizes);
    return (
      <div className="flex flex-row items-center gap-1.5">
        <span className={`relative ${sizeClasses}`}>
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
