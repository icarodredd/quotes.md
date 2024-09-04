import { signOut } from "@/auth";
import { Button } from "./ui/button";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <Button className="bg-purple text-gray">Sign Out</Button>
    </form>
  );
}
