import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import docicon from "@/public/Vectordoc.png";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";

async function DocumentsCard() {
  const session = await auth();

  const files = await fetch("https://www.googleapis.com/drive/v3/files", {
    method: "GET",
  }).then((res) => res.json());

  console.log(files);

  return (
    <Card className="max-w-4xl">
      <CardHeader>
        <CardTitle className="justify-between flex text-lg">
          What document do you want to send to obsidian?
          <Button>⟳</Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-6 gap-4 auto-rows-max">
        <div className="rounded-lg p-4">
          <div className="flex justify-center">
            <Image src={docicon} alt="doc icon" width={60} height={60} />
          </div>
          <p className="text-purple text-center text-sm mt-2">
            Notes from Nada pode me ferir
          </p>
        </div>
        <div className="rounded-lg p-4">
          <div className="flex justify-center">
            <Image src={docicon} alt="doc icon" width={60} height={60} />
          </div>
          <p className="text-purple text-center text-sm mt-2">
            Notes from Nada pode me ferir
          </p>
        </div>
        <div className="rounded-lg p-4">
          <div className="flex justify-center">
            <Image src={docicon} alt="doc icon" width={60} height={60} />
          </div>
          <p className="text-purple text-center text-sm mt-2">
            Notes from Nada pode me ferir
          </p>
        </div>
        <div className="rounded-lg p-4">
          <div className="flex justify-center">
            <Image src={docicon} alt="doc icon" width={60} height={60} />
          </div>
          <p className="text-purple text-center text-sm mt-2">
            Notes from Nada pode me ferir
          </p>
        </div>
        <div className="rounded-lg p-4">
          <div className="flex justify-center">
            <Image src={docicon} alt="doc icon" width={60} height={60} />
          </div>
          <p className="text-purple text-center text-sm mt-2">
            Notes from Nada pode me ferir
          </p>
        </div>
        <div className="rounded-lg p-4">
          <div className="flex justify-center">
            <Image src={docicon} alt="doc icon" width={60} height={60} />
          </div>
          <p className="text-purple text-center text-sm mt-2">
            Notes from Nada pode me ferir
          </p>
        </div>
        <div className="rounded-lg p-4">
          <div className="flex justify-center">
            <Image src={docicon} alt="doc icon" width={60} height={60} />
          </div>
          <p className="text-purple text-center text-sm mt-2">
            Notes from Nada pode me ferir
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
}

export default DocumentsCard;
