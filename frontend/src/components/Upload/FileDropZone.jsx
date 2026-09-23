export default function FileDropZone({
  title,
  accept,
  onFileSelect,
}) {

  return (
    <div className="border-2 border-dashed rounded-xl p-8">

      <h3 className="mb-4">
        {title}
      </h3>

      <input
        type="file"
        accept={accept}
        onChange={(e) =>
          onFileSelect(e.target.files[0])
        }
      />

    </div>
  );
}