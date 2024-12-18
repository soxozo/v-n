"use client";

import { useState } from "react";

type File = {
  id: number;
  name: string;
  url: string;
};

async function fetchFiles(): Promise<File[]> {
  const res = await fetch("/api/files", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch files");
  }
  return res.json();
}

export default function PreviewComponent() {
  const [files, setFiles] = useState<File[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const loadFiles = async () => {
    setLoading(true);
    try {
      const fetchedFiles = await fetchFiles();
      setFiles(fetchedFiles);
    } finally {
      setLoading(false);
    }
  };

  useState(() => {
    loadFiles();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>File Preview and Download</h1>
      <button onClick={loadFiles} disabled={loading}>
        🔄 Reload
      </button>
      {loading ? (
        <p>Loading files...</p>
      ) : files && files.length > 0 ? (
        <ul>
          {files.map((file) => (
            <li key={file.id} style={{ margin: "10px 0" }}>
              <h3>{file.name}</h3>
              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "10px" }}
              >
                📄 Preview
              </a>
              <a
                href={file.url}
                download={file.name}
              >
                ⬇️ Download
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No files found.</p>
      )}
    </div>
  );
}
