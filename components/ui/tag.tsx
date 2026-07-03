const tagShapeClasses = {
  rectangle: "",
  pill: "rounded-full",
  trapezoid: "",
};

const tagPaddingClasses = {
  rectangle:
    "px-[clamp(5px,calc(4.2857px_+_0.2232vw),6px)] xl:px-[clamp(0.375rem,calc(-0.625rem_+_1.25vw),0.5rem)] 2xl:px-[clamp(0.5rem,0.5208vw,0.625rem)] 3xl:px-[clamp(0.625rem,0.5208vw,0.8333rem)]",
  pill: "px-[clamp(8px,calc(7.2857px_+_0.2232vw),9px)] 2xl:px-[clamp(9px,calc(-11px_+_1.3021vw),14px)] 3xl:px-[clamp(14px,0.7292vw,18.67px)]",
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

  if (shape === "trapezoid") {
    const trapezoidFillClass =
      variant === "outline" ? "fill-background" : "fill-[#E3E3E3]";
    const trapezoidStrokeClass =
      variant === "outline" ? "stroke-current" : "stroke-transparent";
    const pyClasses =
      variant === "outline"
        ? "py-[clamp(0.25rem,calc(0.1607rem_+_0.4464vw),0.375rem)]"
        : "py-[clamp(5px,calc(4.2857px_+_0.2232vw),6px)] 2xl:py-[clamp(6px,calc(-10px_+_1.0417vw),10px)] 3xl:py-[clamp(0.625rem,0.5208vw,0.8333rem)]";

    return (
      <div
        className={`${baseClasses} ${paddingClasses} ${pyClasses} relative bg-transparent ${variant === "outline" ? "text-current" : ""}`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full overflow-visible pointer-events-none"
        >
          <path
            d="M 12 0 H 88 L 100 50 L 88 100 H 12 L 0 50 Z"
            vectorEffect="non-scaling-stroke"
            strokeWidth="0.5"
            className={`${trapezoidFillClass} ${trapezoidStrokeClass}`}
          />
        </svg>
        <span className="relative z-1">{text}</span>
      </div>
    );
  }

  if (variant === "outline") {
    return (
      <div
        className={`${shapeClasses} inline-flex shrink-0 w-fit border-[0.5px] border-current p-px`}
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
