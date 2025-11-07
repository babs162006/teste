"use client";
import Image from "next/image";
import styles from "./encontros.module.css";
import { useRouter } from "next/navigation";

export default function ImagensPage() {
  const router = useRouter();

  const imagens = [
    { id: "img1", src: "/images/proj1.jpg", alt: "WomanTech no WIT 2025" },
    { id: "img2", src: "/images/proj2.jpg", alt: "Oficinas na ONG CEPAC 2025/01" },
    { id: "img3", src: "/images/proj3.jpg", alt: "Palestra" },
    { id: "img4", src: "/images/proj4.jpg", alt: "Programa Meninas Digitais" },
  ];

  return (
    <section className={styles.container}>
      {imagens.map((img) => (
        <section
          key={img.id}
          className={styles.card}
          onClick={() => router.push(`/imagens/${img.id}`)}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={600}
            height={400}
            className={styles.image}
          />
          <section className={styles.overlay}>{img.alt}</section>
        </section>
      ))}
    </section>
  );
}