import Link from "next/link";

export default function Header({ name, link, headingText }) {
  return (
    <header className="bg-cover bg-center bg-no-repeat px-4 py-20" style={{ background: `linear-gradient(to right, #1B1A1AE0, #1B1A1AE0), url(/bg-hero.webp)` }}>
      <div className="text-center text-white">
        <p className="text-xs font-medium">
          <Link href="/">Home</Link> / <Link href={link} className="underline underline-offset-2">{name}</Link>
        </p>

        <h1 className="font-serif text-4xl mt-6">
          {headingText}
        </h1>
      </div>
    </header>
  );
}
