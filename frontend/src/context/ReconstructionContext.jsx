import { createContext, useContext, useState } from "react";

const ReconstructionContext = createContext();

export function ReconstructionProvider({ children }) {

  const [videoFile, setVideoFile] = useState(null);
  const [telemetryFile, setTelemetryFile] = useState(null);

  const [config, setConfig] = useState({
    depthModel: "Depth Anything V2",
    quality: "Balanced",
    gaussianSplatting: true,
  });

  return (
    <ReconstructionContext.Provider
      value={{
        videoFile,
        setVideoFile,
        telemetryFile,
        setTelemetryFile,
        config,
        setConfig,
      }}
    >
      {children}
    </ReconstructionContext.Provider>
  );
}

export const useReconstruction = () =>
  useContext(ReconstructionContext);