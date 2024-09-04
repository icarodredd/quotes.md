import Image from "next/image";
import { auth } from "@/auth";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

async function Header() {
  const session = await auth();

  return (
    <header className="flex justify-between p-4 mb-4">
      <h1 className="text-4xl text-purple">quotes.md</h1>
      <div className="gap-4 flex">
        {session === null ? (
          <SignIn />
        ) : (
          <>
            <SignOut />
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
