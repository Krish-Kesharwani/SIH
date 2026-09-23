const steps = [
  "Video",
  "Telemetry",
  "Config",
  "Processing",
  "Results",
];

export default function StepIndicator({
  currentStep,
  setCurrentStep,
}) {
  return (
    <div className="flex gap-4 flex-wrap">

      {steps.map((step, index) => (

        <button
          key={index}
          onClick={() => setCurrentStep(index)}
          className={`
            px-5
            py-2
            rounded-full
            border
            transition-all
            duration-300

            ${
              currentStep === index
                ? "bg-cyan-500 text-white border-cyan-400 shadow-lg shadow-cyan-500/30"
                : "bg-slate-800 text-gray-300 border-slate-700 hover:bg-slate-700"
            }
          `}
        >
          {step}
        </button>

      ))}

    </div>
  );
}