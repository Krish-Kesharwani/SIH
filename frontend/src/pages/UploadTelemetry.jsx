import { useNavigate } from "react-router-dom";

import StepIndicator from "../components/Wizard/StepIndicator";
import FileDropZone from "../components/Upload/FileDropZone";

import {
  useReconstruction,
} from "../context/ReconstructionContext";

export default function UploadTelemetry() {

  const navigate = useNavigate();

  const {
    telemetryFile,
    setTelemetryFile,
  } = useReconstruction();

  return (
    <div className="p-10">

      <StepIndicator currentStep={2} />

      <h1 className="text-4xl mb-8">
        Upload Telemetry
      </h1>

      <FileDropZone
        title="Upload GPS / IMU Metadata"
        accept=".csv,.xlsx,.json"
        onFileSelect={setTelemetryFile}
      />

      {telemetryFile && (
        <p className="mt-4">
          Selected: {telemetryFile.name}
        </p>
      )}

      <div className="flex gap-4 mt-8">

        <button
          onClick={() =>
            navigate("/upload-video")
          }
        >
          Previous
        </button>

        <button
          onClick={() =>
            navigate("/configuration")
          }
        >
          Next
        </button>

      </div>

    </div>
  );
}