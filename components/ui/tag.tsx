const tagShapeClasses = {
  rectangle: "",
  pill: "rounded-full",
  trapezoid: "",
};

const tagPaddingClasses = {
  rectangle:
    "px-[clamp(5px,calc(4.2857px_+_0.2232vw),6px)] xl:px-[clamp(0.375rem,calc(-0.625rem_+_1.25vw),0.5rem)] 2xl:px-[clamp(0.5rem,0.5208vw,0.625rem)] 3xl:px-[clamp(0.625rem,0.5208vw,0.8333rem)]",
  pill: "px-[clamp(8px,calc(7.2857px_+_0.2232vw),9px)] 2xl:px-[clamp(9px,calc(-11px_+_1.3021vw),14px)] 3xl:px-[clamp(14px,0.7292vw,18.67px)]",
};

const tagVariantClasses = {
  default: "bg-[#E3E3E3]",
  outline: "bg-background",
};

const trapezoidClipPathClass =
  "[clip-path:polygon(var(--tag-trapezoid-slant)_0,calc(100%_-_var(--tag-trapezoid-slant))_0,100%_50%,calc(100%_-_var(--tag-trapezoid-slant))_100%,var(--tag-trapezoid-slant)_100%,0_50%)]";

const trapezoidCenterPaddingClass =
  "[--tag-trapezoid-center-padding:0px] 2xl:[--tag-trapezoid-center-padding:clamp(0px,calc(-16px_+_1.0417vw),4px)] 3xl:[--tag-trapezoid-center-padding:clamp(4px,0.2083vw,5.33px)]";

const trapezoidInlinePaddingClass =
  "px-[calc(var(--tag-trapezoid-slant)_+_var(--tag-trapezoid-center-padding))]";

const trapezoidDefaultSlantClass =
  "[--tag-trapezoid-slant:calc(0.5lh_+_clamp(5px,calc(4.2857px_+_0.2232vw),6px))] 2xl:[--tag-trapezoid-slant:calc(0.5lh_+_clamp(6px,calc(-10px_+_1.0417vw),10px))] 3xl:[--tag-trapezoid-slant:calc(0.5lh_+_clamp(0.625rem,0.5208vw,0.8333rem))]";

const trapezoidOutlineSlantClass =
  "[--tag-trapezoid-slant:calc(0.5lh_+_clamp(0.25rem,calc(0.1607rem_+_0.4464vw),0.375rem))]";

type TagProps = {
  text: string;
  shape: "rectangle" | "pill" | "trapezoid";
  variant?: "default" | "outline";
};

export function Tag({ text, shape, variant = "default" }: TagProps) {
  const baseClasses =
    "inline-flex items-center justify-center text-tag-button uppercase shrink-0 w-fit whitespace-nowrap text-[#471922]";
  const shapeClasses = tagShapeClasses[shape];
  const paddingClasses = shape === "trapezoid" ? "" : tagPaddingClasses[shape];

  if (shape === "trapezoid") {
    const pyClasses =
      variant === "outline"
        ? "py-[clamp(0.25rem,calc(0.1607rem_+_0.4464vw),0.375rem)]"
        : "py-[clamp(5px,calc(4.2857px_+_0.2232vw),6px)] 2xl:py-[clamp(6px,calc(-10px_+_1.0417vw),10px)] 3xl:py-[clamp(0.625rem,0.5208vw,0.8333rem)]";
    const slantClasses =
      variant === "outline"
        ? trapezoidOutlineSlantClass
        : trapezoidDefaultSlantClass;
    const trapezoidClasses = `${trapezoidCenterPaddingClass} ${slantClasses} ${trapezoidClipPathClass}`;

    if (variant === "outline") {
      return (
        <div
          className={`${trapezoidClasses} inline-flex shrink-0 w-fit bg-current p-[0.5px] h-fit text-tag-button`}
        >
          <span
            className={`${trapezoidClipPathClass} inline-flex items-center justify-center text-tag-button uppercase whitespace-nowrap text-current bg-background ${trapezoidInlinePaddingClass} ${pyClasses}`}
          >
            {text}
          </span>
        </div>
      );
    }

    return (
      <div
        className={`${baseClasses} ${trapezoidClasses} ${trapezoidInlinePaddingClass} ${pyClasses} bg-[#E3E3E3]`}
      >
        {text}
      </div>
    );
  }

  if (variant === "outline") {
    return (
      <div
        className={`${shapeClasses} inline-flex shrink-0 w-fit border-[0.5px] border-current p-px h-fit`}
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
