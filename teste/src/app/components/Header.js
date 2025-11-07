"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Image src="/images/lw.jpeg" alt="Logo WomanTech" width={80} height={80} />
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/palestrantes">Palestrantes</Link></li>
          <li><Link href="/encontros">Encontros</Link></li>
          <li><Link href="/formulario">Quer participar?</Link></li>
        </ul>
      </nav>
    </header>
  );
}
