"use client";

import { useState } from "react";
import Link from "next/link";

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
    <div className="grid grid-cols-1 shadow-xl divide-x-2 rounded-md sm:rounded-lg w-full">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 flex justify-end">

      <button onClick={loadFiles} disabled={loading}>
        🔄 Refresh
      </button>
      {loading ? (
        <p>Loading files...</p>
      ) : files && files.length > 0 ? (
        <ul>
          {files.map((file) => (
            <li key={file.id}>
            <tr>
                <th scope="col" className="pr-60 py-4">
                     Name
                </th>
                <th scope="col" className="p-4">
                    Preview
                </th>
                <th scope="col" className="p-4">
                    Download
                </th>
            </tr>
            <tr>
              <td>{file.name}</td>
              <td>
              <Link
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "10px" }}
              >
                📄 Preview
              </Link>

              </td>
              <td>
              <Link
                href={file.url}
                download={file.name}
              >
                ⬇️ Download
              </Link>

              </td>
            </tr>
            </li>
          ))}
        </ul>
      ) : (
        <p>No files found.</p>
      )}
</thead>
</table>
</div>
  );
}
