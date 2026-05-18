// src/components/ui/StepBar.tsx
// ─── 4-segment horizontal progress bar + "Step N dari 4" label ────────────

interface StepBarProps {
  currentStep: number;
  totalSteps?: number;
}

export default function StepBar({
  currentStep,
  totalSteps = 4,
}: StepBarProps) {
  return (
    <div className="mb-8">
      {/* Segment bars */}
      <div className="flex gap-1.5 mb-2.5">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-[3px] rounded-full step-bar-fill"
            style={{
              backgroundColor: i < currentStep ? "#00e5cc" : "#1e2d45",
            }}
          />
        ))}
      </div>

      {/* Label */}
      <p className="text-muted text-[14px] text-center">
        Step {currentStep} dari {totalSteps}
      </p>
    </div>
  );
}
