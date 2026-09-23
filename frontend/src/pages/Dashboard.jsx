import { useState } from "react";
import StepIndicator from "../components/Wizard/StepIndicator";

export default function Dashboard() {
    const [currentStep, setCurrentStep] = useState(0);
  return (
    <div className="max-w-7xl mx-auto p-8">

      <div className="mb-8">
        <h1 className="text-4xl font-bold">
            Reconstruction Dashboard
        </h1>

        <p className="text-gray-400 mt-3 max-w-3xl">
            Generate accurate 3D models from a single drone pass using
            Structure-from-Motion, AI depth estimation, and Gaussian Splatting.
        </p>
        </div>

      <StepIndicator
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        />

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <div
            className="
            bg-slate-900
            p-6
            rounded-2xl
            border
            border-cyan-500/10
            hover:border-cyan-500/40
            hover:shadow-lg
            hover:shadow-cyan-500/10
            transition-all
            duration-300
            "
            >
          <h2 className="text-xl font-semibold mb-4">
            Upload Data
          </h2>

          <div className="space-y-4">
            <label className="block">
                <span className="text-gray-300 text-sm">
                Drone Video
                </span>

                <input
                type="file"
                className="
                mt-2
                w-full
                text-sm
                text-gray-300

                file:mr-4
                file:py-2
                file:px-4
                file:rounded-lg
                file:border-0
                file:bg-cyan-500
                file:text-white
                file:hover:bg-cyan-600
                "
                />
            </label>

            <label className="block">
                <span className="text-gray-300 text-sm">
                Telemetry File
                </span>

                <input
                type="file"
                className="
                mt-2
                w-full
                text-sm
                text-gray-300

                file:mr-4
                file:py-2
                file:px-4
                file:rounded-lg
                file:border-0
                file:bg-cyan-500
                file:text-white
                file:hover:bg-cyan-600
                "
                />
            </label>

            <label className="block">
                <span className="text-gray-300 text-sm">
                Config File
                </span>

                <input
                type="file"
                className="
                mt-2
                w-full
                text-sm
                text-gray-300

                file:mr-4
                file:py-2
                file:px-4
                file:rounded-lg
                file:border-0
                file:bg-cyan-500
                file:text-white
                file:hover:bg-cyan-600
                "
                />
            </label>
            </div>
        </div>

        <div
        className="
        bg-slate-900
        p-6
        rounded-2xl
        border
        border-cyan-500/10
        hover:border-cyan-500/40
        hover:shadow-lg
        hover:shadow-cyan-500/10
        transition-all
        duration-300
        "
        >
          <h2 className="text-xl font-semibold mb-4">
            Reconstruction Settings
          </h2>

          <div className="space-y-4">

            <select className="w-full p-3 rounded-lg bg-slate-800">
              <option>Depth Anything V2</option>
              <option>MiDaS</option>
              <option>ZoeDepth</option>
            </select>

            <select className="w-full p-3 rounded-lg bg-slate-800">
              <option>Low</option>
              <option>Balanced</option>
              <option>High</option>
            </select>

          </div>
        </div>

      </div>

      <div className="mt-8">
        <button
          className="
            px-8
            py-4
            rounded-2xl
            bg-cyan-500
            hover:bg-cyan-600
            font-semibold
            shadow-lg
            shadow-cyan-500/20
            transition-all
            duration-300
            "
        >
        Generate 3D Model
        </button>
        <div
  className="
  mt-10
  bg-slate-900
  rounded-2xl
  border
  border-cyan-500/10
  p-6
  "
>
  <h2 className="text-xl font-semibold mb-4">
    Project Status
  </h2>

  <div className="grid md:grid-cols-3 gap-4">

    <div className="bg-slate-800 p-4 rounded-xl">
      <p className="text-gray-400 text-sm">
        Frames Extracted
      </p>

      <p className="text-2xl font-bold mt-2">
        0
      </p>
    </div>

    <div className="bg-slate-800 p-4 rounded-xl">
      <p className="text-gray-400 text-sm">
        Feature Matches
      </p>

      <p className="text-2xl font-bold mt-2">
        0
      </p>
    </div>

    <div className="bg-slate-800 p-4 rounded-xl">
      <p className="text-gray-400 text-sm">
        Point Cloud
      </p>

      <p className="text-xl font-bold text-red-400 mt-2">
        Not Generated
      </p>
    </div>

  </div>
</div>
      </div>

    </div>
  );
}