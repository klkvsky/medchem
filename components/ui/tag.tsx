const tagShapeClasses = {
  rectangle: "",
  pill: "rounded-full",
  trapezoid:
    "[clip-path:polygon(10px_0,calc(100%_-_20px)_0,100%_50%,calc(100%_-_10px)_100%,10px_100%,0_50%)]",
};

const tagPaddingClasses = {
  rectangle: "px-[5px] md:px-1.5 2xl:px-2 3xl:px-2.5",
  pill: "px-[8px] md:px-[9px] 3xl:px-[14px]",
  trapezoid: "px-[16px] md:px-[15px] 3xl:px-[26px]",
};

const tagVariantClasses = {
  default: "bg-[#E3E3E3]",
  outline: "bg-background",
};

type TagProps = {
  text: string;
  shape: "rectangle" | "pill" | "trapezoid";
  variant?: "default" | "outline";
};

export function Tag({ text, shape, variant = "default" }: TagProps) {
  const baseClasses =
    "inline-flex items-center justify-center text-tag-button uppercase shrink-0 w-fit whitespace-nowrap text-[#471922]";
  const shapeClasses = tagShapeClasses[shape];
  const paddingClasses = tagPaddingClasses[shape];

  if (variant === "outline") {
    return (
      <div
        className={`${shapeClasses} inline-flex shrink-0 w-fit border border-current p-px`}
      >
        <span
          className={`${baseClasses} ${shapeClasses} ${paddingClasses} ${tagVariantClasses[variant]} py-1 md:py-1.5 bg-transparent text-current`}
        >
          {text}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${shapeClasses} ${paddingClasses} ${tagVariantClasses[variant]} py-[5px] md:py-1.5 3xl:py-2.5`}
    >
      {text}
    </div>
  );
}
