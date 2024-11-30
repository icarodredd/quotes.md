import Link from 'next/link';

function Footer() {
  return (
    <footer className="p-4 text-center ">
      <h1 className="text-lg">
        Developed by{' '}
        <Link
          className="hover:underline"
          href={'https://www.linkedin.com/in/icarodredd/'}
        >
          icarodredd
        </Link>
      </h1>
      <div className="space-x-2 text-xs">
        <Link
          className="hover:underline"
          href={'/privacy-policy'}
        >
          Privacy Policy
        </Link>
        <Link
          className="hover:underline"
          href={'/terms-of-service'}
        >
          Terms of Service
        </Link>
        <a
          className="hover:underline"
          href="https://linkedin.com/in/icarodredd"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}

export default Footer;
