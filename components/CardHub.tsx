"use client";

import { NoteType } from "./Documents";
import { Button } from "./ui/button";
import docicon from "../public/Vectordoc.png";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

function Note({
  note,
  setSelected,
}: {
  note: NoteType;
  setSelected: Dispatch<SetStateAction<string>>;
}) {
  return (
    <button
      onClick={() => setSelected(note.id)}
      className="rounded-lg p-4 hover:bg-purple/10"
    >
      <div className="flex justify-center">
        <Image src={docicon} alt="doc icon" width={60} height={60} />
      </div>
      <p className="text-purple text-center text-sm mt-2">{note.name}</p>
    </button>
  );
}

function CardHub({ result, token }: { result: NoteType[]; token: string }) {
  const [selected, setSelected] = useState("");

  const handleClick = async (id: string) => {
    if (id === "") return;
    console.log(token);
    await fetch(
      `https://www.googleapis.com/drive/v3/files/${id}/export?mimeType=text/markdown`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.text())
      .then((data) => console.log(data))
      .catch((e) => console.log(e.message));
  };

  return (
    <Card className="max-w-4xl">
      <CardHeader>
        <CardTitle className="justify-between flex text-lg">
          What document do you want to send to obsidian?
          <Button>⟳</Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-6 gap-4 auto-rows-max">
        {result &&
          result.map((item: NoteType) => {
            return <Note key={item.id} note={item} setSelected={setSelected} />;
          })}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button onClick={() => handleClick(selected)}>Submit</Button>
      </CardFooter>
    </Card>
  );
}

export default CardHub;
