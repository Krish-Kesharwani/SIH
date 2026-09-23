import { useState } from "react";

export default function UploadCard() {
  const [video, setVideo] = useState(null);
  const [metadata, setMetadata] = useState(null);

  return (
    <div>
      <h2>Upload Files</h2>

      <div>
        <label>Drone Video</label>
        <input
          type="file"
          accept=".mp4,.mov,.avi"
          onChange={(e) => setVideo(e.target.files[0])}
        />
      </div>

      <div>
        <label>Metadata File</label>
        <input
          type="file"
          accept=".csv,.xlsx,.json"
          onChange={(e) => setMetadata(e.target.files[0])}
        />
      </div>

      <button>
        Generate 3D Model
      </button>
    </div>
  );
}