'use client';

import { NoteType } from './Documents';
import { Button } from './ui/button';
import docicon from '../public/Vectordoc.png';
import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from './ui/card';
import { Dispatch, SetStateAction, useState } from 'react';
import JSZip from 'jszip';
import FileSaver from 'file-saver';

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
      className="flex items-start justify-center rounded-lg p-4 hover:bg-purple/10"
    >
      <div>
        <div className="flex justify-center">
          <Image
            src={docicon}
            alt="doc icon"
            width={60}
            height={60}
          />
        </div>
        <p className="text-purple text-center text-sm mt-2">{note.name}</p>
      </div>
    </button>
  );
}

function CardHub({ result, token }: { result: NoteType[]; token: string }) {
  const [selected, setSelected] = useState('');

  const handleClick = async (id: string) => {
    if (id === '') return;
    await fetch(
      `https://www.googleapis.com/drive/v3/files/${id}/export?mimeType=text/markdown`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.text())

      //filtering header and footer of the documement
      .then((data) =>
        data.substring(
          data.indexOf('*![][image2] ') + 13,
          data.lastIndexOf('http://play.google.com/books/reader')
        )
      )
      //spliting the document into an array of notes
      .then((data) => data.split('\n\n'))

      //creating a new file for each note
      .then((data) =>
        data.map((note) => {
          //only for the first note
          if (data.indexOf(note) === 0) {
            const newNote = note.substring(
              note.indexOf(''),
              note.lastIndexOf('*')
            );
            return new File([newNote], `Note`, { type: 'text/markdown' });
          } else {
            const newNote = note.substring(
              note.indexOf('|  ![][image2] *') + 16,
              note.lastIndexOf('*')
            );
            return new File([newNote], `Note`, { type: 'text/markdown' });
          }
        })
      )

      //zipping the files in one and downloading
      .then(async (files) => {
        const zip = new JSZip();
        for (let i = 0; i < files.length; i++) {
          zip.file(`note_${i}.md`, files[i]);
        }
        const zipBlob = await zip.generateAsync({ type: 'blob' });
        FileSaver.saveAs(zipBlob, 'Notes.zip');
      })

      .catch((e) => console.log(e));
  };

  return (
    <Card className="max-w-4xl max-lg:max-w-72">
      <CardHeader>
        <CardTitle className="justify-center flex text-lg text-center">
          What document do you want to send to obsidian?
        </CardTitle>
      </CardHeader>

      {result.length > 0 ? (
        <CardContent className="grid grid-cols-6 gap-4 auto-rows-max max-lg:grid-cols-1">
          {result.map((item: NoteType) => {
            return (
              <Note
                key={item.id}
                note={item}
                setSelected={setSelected}
              />
            );
          })}
        </CardContent>
      ) : (
        <CardContent className="text-center">
          <p>You don&apos;t have a file of notes.</p>
          <p className="text-xs mt-10">
            Warning: For a document to appear here, it needs the prefix
            &quot;Notes from&quot; in its name.
          </p>
        </CardContent>
      )}
      <CardFooter className="flex justify-center gap-4">
        <Button onClick={() => handleClick(selected)}>Submit</Button>
      </CardFooter>
    </Card>
  );
}

export default CardHub;
