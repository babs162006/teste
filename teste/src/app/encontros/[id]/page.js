"use client";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./encontrosDetalhe.module.css";

export default function ImagemDetalhe() {
  const params = useParams();
  const { id } = params;
  const router = useRouter();

  const imagens = {
    img1: { titulo: "WomanTech no WIT 2025", descricao: "Nos dias 21 a 24 de julho de 2025, o WomanTech esteve presente no" + " " +
      "WIT (Woman in Information Tecnology), evento integrado ao CSBC, realizado em Maceió(AL). O projeto foi convidado a" + " " +
      "apresentar suas ações como parte do Programa Meninas Digitais, iniciativa da Sociedade Brasileira de Computação." + " " +
      "Marcilyanne Gois e Marina Martins compartilharam as ações realizadas e o impacto gerado, destacando as experiências" + " " +
      "e desafios enfrentados",src: "/images/proj1.jpg" },
    img2: { titulo: "Oficinas na ONG CEPAC 2025/01", descricao: "As alunas do projeto WomanTech ministraram oficinas para meninas" + " " +
       "de 13 a 17 anos da ONG CEPAC, em Barueri. Durante os encontros, foram trabalhados temas como Inteligência Artificial, Segurança" + " " + 
       "da Informação, criptografia, pensamento computacional e introdução à programação. As oficinas tiveram como foco despertar o" + " " +
       "interesse pela tecnologia e promover o uso seguro e consciente do ambiente digital.", src: "/images/proj2.jpg" },
    img3: { titulo: "Palestra sobre Criptografia", descricao: "No dia 07 de junho, foi realizada a palestra 'Segredos que Elas Guardam:" + " " + 
      "Introdução à Criptografia, Segurança Digital e Protagonismo Feminino', ministrada pela Alanis Urquisa, na Fábrica de Cultura de São" + " " +
      "Bernardo do Campo. A palestra teve uma presença majoritária de mulheres, que tiveram o primeiro contato com os temas de Cibersegurança" + " " + 
      "e criptografia.", src: "/images/proj3.jpg" },
    img4: { titulo: "Programa Meninas Digitais", descricao: "No início de 2025, o projeto WomanTech se tornou oficialmente parceiro do Programa" + " " + 
      "Meninas Digitais, da Sociedade Brasileira de Computação (SBC). Essa parceria fortalece nosso compromisso com a equidade de gênero na tecnologia," + " " +
      "ampliando o alcance das nossas ações e conectando ainda mais meninas e mulheres ao universo da ciência, tecnologia, engenharia e matemática.", src: "/images/proj4.jpg" },
  };

  const imagem = imagens[id];

  if (!imagem) {
    router.push("/encontros");
    return null;
  }

  return (
    <main className={styles.container}>
      <button className={styles.voltarBtn} onClick={() => router.back()}>
        ← Voltar
      </button>
      <h1 className={styles.titulo}>{imagem.titulo}</h1>
      <div className={styles.imageWrapper}>
        <Image src={imagem.src} alt={imagem.titulo} width={1000} height={400} className={styles.imagem} />
      </div>
      <p className={styles.descricao}>{imagem.descricao}</p>
    </main>
  );
}



