import { useNavigate } from "react-router-dom";

import StepIndicator from "../components/Wizard/StepIndicator";
import FileDropZone from "../components/Upload/FileDropZone";

import {
  useReconstruction,
} from "../context/ReconstructionContext";

export default function UploadVideo() {

  const navigate = useNavigate();

  const {
    videoFile,
    setVideoFile,
  } = useReconstruction();

  return (
    <div>

      <StepIndicator currentStep={1} />

      <FileDropZone
        title="Upload Drone Video"
        accept=".mp4,.mov,.avi"
        onFileSelect={setVideoFile}
      />

      {videoFile && (
        <p>{videoFile.name}</p>
      )}

      <button
        onClick={() =>
          navigate("/upload-telemetry")
        }
      >
        Next
      </button>

    </div>
  );
}