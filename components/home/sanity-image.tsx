import Image from "next/image";

import type { SanityImage } from "@/types/home";

type SanityImageViewProps = {
  image?: SanityImage | null;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
};

export function SanityImageView({
  image,
  className,
  fill,
  priority,
  sizes = "100vw",
}: SanityImageViewProps) {
  if (!image?.url) {
    return null;
  }

  const alt = image.alt ?? "";

  if (fill) {
    return (
      <Image
        src={image.url}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={className}
        draggable={false}
      />
    );
  }

  return (
    <Image
      src={image.url}
      alt={alt}
      width={image.width ?? 1200}
      height={image.height ?? 1200}
      sizes={sizes}
      priority={priority}
      className={className}
      draggable={false}
    />
  );
}
