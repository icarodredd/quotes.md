import Image from "next/image";
import { auth, handlers } from "@/auth";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

async function Header() {
  const session = await auth();

  return (
    <header className="flex justify-between p-4 mb-4">
      <h1 className="text-4xl max-lg:text-3xl">quotes.md</h1>
      <div className="gap-4 flex">
        {session === null ? (
          <SignIn />
        ) : (
          <>
            <SignOut />
            <Image
              className="rounded-full max-lg:size-9"
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
