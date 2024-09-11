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

function Note({ note }: { note: NoteType }) {
  return (
    <button className="rounded-lg p-4 hover:bg-purple/10">
      <div className="flex justify-center">
        <Image src={docicon} alt="doc icon" width={60} height={60} />
      </div>
      <p className="text-purple text-center text-sm mt-2">{note.name}</p>
    </button>
  );
}

function CardHub({ result }: { result: NoteType[] }) {
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
            return <Note key={item.id} note={item} />;
          })}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
}

export default CardHub;
