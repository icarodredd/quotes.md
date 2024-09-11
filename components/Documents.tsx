import { auth } from "@/auth";
import CardHub from "./CardHub";

export type NoteType = {
  kind: string;
  mimeType: string;
  id: string;
  name: string;
};

async function Documents() {
  const session = (await auth()) as unknown as { token: any };

  const files = await fetch("https://www.googleapis.com/drive/v3/files", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.token?.access_token}`,
    },
  }).then((res) => res.json());

  const result = files.files.filter((file: NoteType) =>
    file.name.includes("Notes from")
  );

  return <CardHub result={result} />;
}

export default Documents;
