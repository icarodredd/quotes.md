import Image from "next/image";
import { Button } from "./ui/button";
import { auth } from "@/auth";
import Link from "next/link";

async function Header() {
  const session = await auth();

  return (
    <header className="flex justify-between p-4 mb-4">
      <h1 className="text-4xl text-purple">quotes.md</h1>
      <div className="gap-4 flex">
        <></>
        {session === null ? (
          <Link href={"/api/auth/signin"}>
            <Button className="bg-purple text-gray">Login</Button>
          </Link>
        ) : (
          <>
            <Link href={"api/auth/signout"}>
              <Button className="bg-purple text-gray">Sign Out</Button>
            </Link>
            <Image
              className="rounded-full"
              width={40}
              height={40}
              src={session.user?.image as string}
              alt={session.user?.name as string}
            />
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
