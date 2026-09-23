import { useNavigate } from "react-router-dom";

import StepIndicator from "../components/Wizard/StepIndicator";

import {
  useReconstruction,
} from "../context/ReconstructionContext";

export default function Configuration() {

  const navigate = useNavigate();

  const {
    config,
    setConfig,
  } = useReconstruction();

  return (
    <div className="p-10">

      <StepIndicator currentStep={3} />

      <h1 className="text-4xl mb-8">
        Reconstruction Settings
      </h1>

      <div className="mb-6">

        <label>Depth Model</label>

        <select
          value={config.depthModel}
          onChange={(e) =>
            setConfig({
              ...config,
              depthModel: e.target.value,
            })
          }
        >
          <option>Depth Anything V2</option>
          <option>MiDaS</option>
          <option>ZoeDepth</option>
        </select>

      </div>

      <div className="mb-6">

        <label>Quality</label>

        <select
          value={config.quality}
          onChange={(e) =>
            setConfig({
              ...config,
              quality: e.target.value,
            })
          }
        >
          <option>Fast</option>
          <option>Balanced</option>
          <option>High Accuracy</option>
        </select>

      </div>

      <div>

        <label>
          <input
            type="checkbox"
            checked={config.gaussianSplatting}
            onChange={(e) =>
              setConfig({
                ...config,
                gaussianSplatting:
                  e.target.checked,
              })
            }
          />

          Generate Gaussian Splats
        </label>

      </div>

      <div className="flex gap-4 mt-10">

        <button
          onClick={() =>
            navigate("/upload-telemetry")
          }
        >
          Previous
        </button>

        <button
          onClick={() =>
            navigate("/dashboard")
          }
        >
          Start Reconstruction
        </button>

      </div>

    </div>
  );
}