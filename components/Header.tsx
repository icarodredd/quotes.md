import { Button } from "./ui/button";

function Header() {
  return (
    <header className="flex justify-between p-4 mb-4">
      <h1 className="text-4xl text-purple">quotes.md</h1>
      <div className="gap-4 flex">
        <Button className="bg-purple text-gray">Register</Button>
        <Button className="bg-purple text-gray">Login</Button>
      </div>
    </header>
  );
}

export default Header;
