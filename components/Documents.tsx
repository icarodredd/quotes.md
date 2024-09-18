import { auth, signOut } from "@/auth";
import CardHub from "./CardHub";

export type NoteType = {
  kind: string;
  mimeType: string;
  id: string;
  name: string;
};

export type SessionAndToken = {
  user: {
    name: string;
    email: string;
    image: string;
  };
  expires: string;
  token: {
    name: string;
    email: string;
    picture: string;
    sub: string;
    access_token: string;
    iat: number;
    exp: number;
    jti: string;
  };
};

async function Documents() {
  const session = (await auth()) as SessionAndToken;

  const files = await fetch("https://www.googleapis.com/drive/v3/files", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session.token.access_token}`,
    },
  }).then((res) => res.json());

  const result = files.files.filter((file: NoteType) =>
    file.name.includes("Notes from")
  );

  return <CardHub result={result} token={session.token.access_token} />;
}

export default Documents;