export function SummaryItem({
  icon,
  label,
  value,
  type,
}: {
  icon: React.ReactNode;
  label: string;
  value:
    | string
    | {
        from: string;
        to: string;
      };
  type?: string;
}) {
  return (
    <div className="w-full h-16 px-4 flex items-center gap-3 py-3">
      <div className="w-10 h-10 bg-[#F1F1F1] rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-normal text-[#6E7375]">{label}</span>

        <h4 className="text-base font-normal text-[#131214]">
          {typeof value === "string" ? value : value.from + "-" + value.to}{" "}
        </h4>
      </div>
    </div>
  );
}

export const calculateProgress = (currentStep: string, stepIndex: number) => {
  const stepOrder = [
    "select",
    "direction",
    "details",
    "summary",
    "confirmation",
  ];
  const currentIndex = stepOrder.indexOf(currentStep);

  if (currentIndex >= stepIndex || currentIndex === 4) {
    // Fully filled (100%)
    return "100%";
  } else if (currentIndex === stepIndex - 1 || currentIndex === 3) {
    // Current step, show partial progress (e.g., 10%)
    return "10%";
  }

  // Not yet reached, 0% progress
  return "0%";
};
