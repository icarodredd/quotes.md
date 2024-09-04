import { signIn } from "@/auth";
import { Button } from "./ui/button";

function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/documents" });
      }}
    >
      <Button className="bg-purple text-gray">Sign In</Button>
    </form>
  );
}

export default SignIn;
