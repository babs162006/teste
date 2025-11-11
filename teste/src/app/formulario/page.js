"use client";

import { useState } from "react";
import styles from "./formswoman.module.css";

export default function FormularioWomanTech() {
  const [dogUrl, setDogUrl] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    const randomId = Math.floor(Math.random() * 1000);

    const url = `https://place.dog/300/200?${randomId}`;
    setDogUrl(url);


    alert("Formulário enviado!");
  }

  return (
    <main className={styles.pagina}>
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <fieldset>
          <legend>Formulário WomanTech</legend>

          <p className={styles.instrucoes}>Preencha as informações abaixo:</p>

          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" />

          <label htmlFor="ra">RA:</label>
          <input type="text" id="ra" name="ra" />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
          />

          <label>Disponibilidade:</label>
          <label>
            <input type="radio" name="disponibilidade" value="manha" /> Manhã
          </label>
          <label>
            <input type="radio" name="disponibilidade" value="tarde" /> Tarde
          </label>
          <label>
            <input type="radio" name="disponibilidade" value="noite" /> Noite
          </label>

          <label>Que curso de Tecnologia você faz?</label>
          <label>
            <input type="checkbox" name="curso" value="si" /> Sistemas de
            Informação
          </label>
          <label>
            <input type="checkbox" name="curso" value="ads" /> Análise e
            Desenvolvimento de Sistemas
          </label>
          <label>
            <input type="checkbox" name="curso" value="cc" /> Ciência da
            Computação
          </label>

          <label>Qual etapa (semestre) você está?</label>
          <select name="semestre">
            <option>1º semestre</option>
            <option>2º semestre</option>
            <option>3º semestre</option>
            <option>4º semestre</option>
            <option>5º semestre</option>
            <option>6º semestre</option>
            <option>7º semestre</option>
            <option>8º semestre</option>
          </select>

          <label>
            Qual a unidade da Universidade Presbiteriana Mackenzie você estuda?
          </label>
          <select name="unidade">
            <option>Higienópolis</option>
            <option>Alphaville</option>
            <option>EAD</option>
          </select>

          <label>Como você descobriu o projeto?</label>
          <label>
            <input type="checkbox" name="descobriu" value="site" /> Site do
            Mackenzie
          </label>
          <label>
            <input type="checkbox" name="descobriu" value="professores" />{" "}
            Professores
          </label>
          <label>
            <input type="checkbox" name="descobriu" value="amigos" /> Amigos
          </label>
          <label>
            <input type="checkbox" name="descobriu" value="canal" /> Canal FCI
          </label>
          <label>
            <input type="checkbox" name="descobriu" value="redes" /> Redes
            sociais
          </label>
          <label>
            <input type="checkbox" name="descobriu" value="outro" /> Outro
          </label>

          <label>Já participou antes do WomanTech:</label>
          <label>
            <input type="radio" name="participou" value="sim" /> Sim
          </label>
          <label>
            <input type="radio" name="participou" value="nao" /> Não
          </label>

          <label>Qual parte do projeto você gostaria de atuar?</label>
          <label>
            <input type="checkbox" name="atuacao" value="buscar" /> Buscar
            possíveis participantes
          </label>
          <label>
            <input type="checkbox" name="atuacao" value="divulgacao" />{" "}
            Divulgação
          </label>
          <label>
            <input type="checkbox" name="atuacao" value="material" /> Material,
            arte e design
          </label>
          <label>
            <input type="checkbox" name="atuacao" value="elaboracao" />{" "}
            Elaboração de perguntas e esboço da apresentação
          </label>
          <label>
            <input type="checkbox" name="atuacao" value="mediadora" /> Mediadora
          </label>

          <label>
            Escreva um pouco sobre o por quê de você querer participar do
            WomanTech:
          </label>
          <textarea name="motivacao"></textarea>

          <button type="submit">Enviar</button>

          <p className={styles.voltar}>
            Clique{" "}
            <a href="/" className={styles.link}>
              aqui
            </a>{" "}
            para voltar para a Homepage.
          </p>

          <br />

          {dogUrl && (
            <section className={styles.dogContainer}>
              <img
                src={dogUrl}
                alt="Cachorro fofo"
                className={styles.dogImage}
              />
              <br />
              <p className={styles.dogText}>Obrigada por ter se inscrito!</p>
            </section>
          )}
        </fieldset>
      </form>
    </main>
  );
}

