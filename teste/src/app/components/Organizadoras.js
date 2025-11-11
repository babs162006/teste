import Image from "next/image";
import styles from "./Organizadoras.module.css";

const pessoas = [
  { nome: "Profª. Drª. Andreia Cristina do Santos Gusmão", img: "/images/p1.jpeg" },
  { nome: "Profª. Drª. Carolina Toledo Ferraz", img: "/images/p2.jpeg" },
  { nome: "Profª. Drª. Cristiane Camilo Hernandez", img: "/images/p3.jpeg" },
  { nome: "Profª. Drª. Daniela Vieira Cunha", img: "/images/p4.jpeg" },
  { nome: "Profª. Drª. Marcilyanne Moreira Gois", img: "/images/p5.jpeg" },
  { nome: "Profª. Mª. Patricia Bonezi Nunes da Mota", img: "/images/p6.jpeg" },
];

export default function Organizadoras() {
  return (
    <section className={styles.organizadoras}>
      <section className={styles.titulo}>
        <Image src="/images/logozin.jpeg" alt="Logo WomanTech" width={50} height={50} />
        <h1>Organizadoras e colaboradoras</h1>
      </section>

      <section className={styles.pessoas}>
        {pessoas.map((pessoa, index) => (
          <section key={index} className={styles.pessoa}>
            <section className={styles.foto}>
              <Image src={pessoa.img} alt={pessoa.nome} width={150} height={150} />
            </section>
            <p>{pessoa.nome}</p>
          </section>
        ))}
      </section>
    </section>
  );
}

