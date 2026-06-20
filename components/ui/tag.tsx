const tagShapeClasses = {
  rectangle: "",
  pill: "rounded-full",
  trapezoid:
    "[clip-path:polygon(10px_0,calc(100%_-_20px)_0,100%_50%,calc(100%_-_10px)_100%,10px_100%,0_50%)]",
};

const tagPaddingClasses = {
  rectangle:
    "px-[clamp(5px,calc(4.2857px_+_0.2232vw),6px)] xl:px-[clamp(0.375rem,calc(-0.625rem_+_1.25vw),0.5rem)] 2xl:px-[clamp(0.5rem,0.5208vw,0.625rem)] 3xl:px-[clamp(0.625rem,0.5208vw,0.8333rem)]",
  pill:
    "px-[clamp(8px,calc(7.2857px_+_0.2232vw),9px)] 2xl:px-[clamp(9px,calc(-11px_+_1.3021vw),14px)] 3xl:px-[clamp(14px,0.7292vw,18.67px)]",
  trapezoid:
    "px-[clamp(15px,calc(16.7143px_-_0.3571vw),16px)] 2xl:px-[clamp(15px,calc(-29px_+_2.8646vw),26px)] 3xl:px-[clamp(26px,1.3542vw,34.67px)]",
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
          className={`${baseClasses} ${shapeClasses} ${paddingClasses} ${tagVariantClasses[variant]} py-[clamp(0.25rem,calc(0.1607rem_+_0.4464vw),0.375rem)] bg-transparent text-current`}
        >
          {text}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${shapeClasses} ${paddingClasses} ${tagVariantClasses[variant]} py-[clamp(5px,calc(4.2857px_+_0.2232vw),6px)] 2xl:py-[clamp(6px,calc(-10px_+_1.0417vw),10px)] 3xl:py-[clamp(0.625rem,0.5208vw,0.8333rem)]`}
    >
      {text}
    </div>
  );
}
