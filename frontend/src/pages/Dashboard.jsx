import { useState } from "react";
import StepIndicator from "../components/Wizard/StepIndicator";

export default function Dashboard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [clearing, setClearing] = useState(false);
  const [frameCount, setFrameCount] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [videoFile, setVideoFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedVideo, setUploadedVideo] = useState("");
  const clearProject = async () => {
    try {
      setClearing(true);

      const response = await fetch(
        "http://127.0.0.1:8000/clear-project",
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      alert(data.message || "Project Cleared");

    } catch (error) {
      console.error(error);
      alert("Failed to clear project");
    } finally {
      setClearing(false);
    }
  };
  const uploadVideo = async () => {
  if (!videoFile) {
    alert("Select a video first");
    return;
  }

  try {
    setUploading(true);

    const formData = new FormData();

    formData.append(
      "video",
      videoFile
    );

    const response = await fetch(
      "http://127.0.0.1:8000/upload-video",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    setUploadedVideo(data.filename);

    alert("Video Uploaded Successfully");

  } catch (error) {
    console.error(error);
    alert("Upload Failed");
  } finally {
    setUploading(false);
  }
};
  const startReconstruction = async () => {
    try {
      setProcessing(true);

      const response = await fetch(
        "http://127.0.0.1:8000/extract-frames",
        {
          method: "POST",
        }
      );

      const data = await response.json();

      setFrameCount(data.frames_saved);

      alert(
        `${data.frames_saved} frames extracted`
      );

    } catch (error) {
      console.error(error);
      alert("Reconstruction Failed");
    } finally {
      setProcessing(false);
    }
  };
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
                accept="video/*"
                onChange={(e) =>
                  setVideoFile(e.target.files[0])
                }
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
              {videoFile && (
                <p className="text-cyan-400 text-sm mt-2 truncate">
                  Selected: {videoFile.name}
                </p>
              )}
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
            <button
                onClick={uploadVideo}
                disabled={uploading}
                className="
                w-full
                mt-4
                py-3
                rounded-xl
                bg-green-500
                hover:bg-green-600
                font-semibold
                "
              >
                {uploading ? "Uploading..." : "Upload Video"}
              </button>

              {uploadedVideo && (
                <p className="text-green-400 mt-3 truncated">
                  Uploaded: {uploadedVideo}
                </p>
              )}
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

      <div className="mt-8 flex gap-4">

    <button
      onClick={startReconstruction}
      disabled={processing}
      className="
      px-8
      py-4
      rounded-xl
      bg-cyan-500
      hover:bg-cyan-600
      font-semibold
      disabled:opacity-50
      "
    >
      {processing
        ? "Processing..."
        : "Start Reconstruction"}
    </button>

    <button
      onClick={clearProject}
      disabled={clearing}
      className="
      px-8
      py-4
      rounded-xl
      bg-red-500
      hover:bg-red-600
      font-semibold
      disabled:opacity-50
      "
    >
      {clearing ? "Clearing..." : "Clear Project"}
    </button>

  </div>
  <h2 className="text-xl font-semibold mb-4">
    Project Status
  </h2>

  <div className="grid md:grid-cols-3 gap-4">

    <div className="bg-slate-800 p-4 rounded-xl">
      <p className="text-gray-400 text-sm">
        Frames Extracted
      </p>

      <p className="text-2xl font-bold mt-2">
        {frameCount}
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
    
  );
}