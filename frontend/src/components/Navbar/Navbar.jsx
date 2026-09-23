import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-2xl font-bold text-cyan-400">
          UAV 3D Recon
        </h1>

        <div className="flex gap-8">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/results">Results</Link>
        </div>

      </div>
    </nav>
  );
}