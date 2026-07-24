import Image from "next/image";

import type { ContentImage } from "@/types/home";

type ContentImageViewProps = {
  image?: ContentImage | null;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
};

export function ContentImageView({
  image,
  className,
  fill,
  priority,
  sizes = "100vw",
}: ContentImageViewProps) {
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
