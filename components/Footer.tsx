import Link from "next/link";

function Footer() {
  return (
    <footer className="p-4">
      <h1 className="text-lg text-purple text-center">
        Developed by{" "}
        <Link
          className="hover:underline"
          href={"https://www.linkedin.com/in/icarodredd/"}
        >
          icarodredd
        </Link>
      </h1>
    </footer>
  );
}

export default Footer;
