import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl text-center">

        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Single-Pass UAV 3D Reconstruction
        </h1>

        <p className="text-xl text-slate-300 mb-10">
          Generate accurate georeferenced 3D models from a single drone flight
          using Monocular Depth Estimation and 3D Gaussian Splatting.
        </p>

        <div className="flex justify-center gap-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition text-lg font-semibold"
          >
            Start Reconstruction
          </button>

          <button
            onClick={() => navigate("/results")}
            className="px-8 py-4 rounded-xl border border-cyan-500 hover:bg-cyan-500/10 transition text-lg font-semibold"
          >
            View Results
          </button>
        </div>

      </div>
    </div>
  );
}