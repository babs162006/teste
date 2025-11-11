# Projeto Borboleta
Nome: Bárbara Diogo Passos e Janaína Diogo Passos
RA: 10737885 e 10737888

# Processo de Ideação
O WomanTech é um projeto de extensão da FCI, em parceria com o programa Meninas Digitais da Sociedade Brasileira de Computação. Seu objetivo é promover a participação feminina na tecnologia, incentivando meninas do ensino médio, mulheres em transição de carreira e estudantes a ingressarem na área, por meio de oficinas, palestras, criação de conteúdos e atividades práticas.

Para ampliar sua visibilidade e alcance, propomos a criação de um site oficial do WomanTech, reunindo informações sobre a ideação do projeto, colaboradores e palestrantes, além de disponibilizar gravações das palestras e um formulário para interessadas em participar ou apoiar a iniciativa. Esse espaço digital funcionaria como um canal de divulgação, engajamento e inclusão, fortalecendo ainda mais a presença feminina na tecnologia.

# Caráter Extensionista
A disciplina Web Mobile possui um caráter extensionista, o que implica que o trabalho que desenvolvermos precisará estar aberto à participação da comunidade, promovendo um diálogo e uma troca de saberes entre a universidade e o público externo. No nosso caso, o foco é ampliar o alcance do projeto Womantech, fazendo, assim, com que o projeto gere um impacto social positivo, ampliando oportunidades e visibilidade para mulheres na tecnologia, um campo historicamente marcado pela baixa representatividade feminina.

Ao atuar de forma extensionista, nosso projeto ajuda a construir pontes entre conhecimento técnico e necessidades sociais, fortalecendo a inclusão e a diversidade no setor tecnológico.

# Protótipo (Wireframe)
<img width="500" height="1600" alt="image" src="https://github.com/user-attachments/assets/db46cd39-e6de-42e8-ade6-782de62d8927" />

# Vantagem da migração para componentes ReactJS

A migração para componentes ReactJS traz diversas vantagens tanto no desenvolvimento quanto na manutenção de aplicações web. Com ReactJS, há maior modularidade do código, dado que cada parte da interface é dividida em componentes independentes e reutilizáveis, o que facilita a organização do projeto, reduz a duplicação de código e aumenta a produtividade. Outra vantagem significativa é a atualização eficiente da interface por meio do Virtual DOM, que torna as renderizações mais rápidas e melhora a experiência do usuário. Além disso, o ecossistema do React oferece uma ampla comunidade, bibliotecas complementares e integração facilitada com frameworks modernos, o que torna o desenvolvimento mais ágil e escalável.

# Trechos de código

# Arquivo: layout.js

<img width="459" height="465" alt="image" src="https://github.com/user-attachments/assets/10cdd1fa-8cbf-4a4a-9c12-a8cea5a44ffc" />

O arquivo layout.js define a estrutura principal da aplicação, ou seja, o que será exibido em todas as páginas, como o cabeçalho (Header), o rodapé (Footer) e o conteúdo central. Logo no início, a instrução "use client" indica que o componente será executado no lado do cliente, permitindo o uso de hooks do React. Em seguida, o código importa o arquivo de estilos globais (globals.css), os componentes Header e Footer, e o hook usePathname do Next.js, que serve para identificar o caminho atual da URL.

Dentro da função RootLayout, o usePathname() obtém o endereço da página que o usuário está acessando. Com base nisso, é criada uma condição chamada hideHeaderFooter, que verifica se o caminho é igual a /formulario. Se for, significa que o cabeçalho e o rodapé não devem aparecer nessa página, permitindo que o formulário ocupe toda a tela.

# Arquivo: page.js

<img width="915" height="371" alt="image" src="https://github.com/user-attachments/assets/2276d150-30ec-4ef6-ba8d-8d36246d2706" />
<img width="896" height="210" alt="image" src="https://github.com/user-attachments/assets/5b9c784e-2618-4dc0-85f7-0b060a6d3c28" />

Esse código define a página inicial do site em Next.js, estruturando o conteúdo com seções estilizadas pelo arquivo home.module.css. Ele utiliza o componente Image do Next.js para otimizar as imagens e inclui o componente Organizadoras ao final da página.

Explicando melhor, a função Home organiza a página em três partes principais:

- Banner principal: exibe a imagem “anuncio4.png”, servindo como destaque visual.
- Apresentação do projeto: mostra a logo, o título “Quem somos e o que fazemos?” e um texto explicando que o WomanTech é um projeto da FCI em parceria com o programa Meninas Digitais, voltado à inclusão feminina na tecnologia.
- Objetivo: destaca a missão de promover a participação feminina na área de TI, desde estudantes até profissionais em transição de carreira.
- Por fim, o componente <Organizadoras /> apresenta quem faz parte do projeto, completando a estrutura informativa e visual da página inicial.

# Arquivo: globals.css

Esse código define o estilo global do site, controlando a aparência geral de todos os elementos HTML. Ele garante uma identidade visual coesa e um layout limpo e harmonioso.

# Seletor universal, body e links

<img width="335" height="475" alt="image" src="https://github.com/user-attachments/assets/db08ea19-fb15-4422-ab88-093b203606b3" />

Primeiro, o seletor universal (*) zera margens e espaçamentos padrão, define o uso de box-sizing: border-box (para facilitar o controle de tamanhos) e aplica uma fonte padrão simples e legível. O body recebe fundo rosa claro (#ffe8f0), texto na cor rosa mais escura (#cf8a8d) e espaçamento entre linhas confortável.

Os links (a) têm aparência limpa, com cor principal rosa e um efeito suave ao passar o mouse, mudando para branco.

# Imagens

<img width="280" height="432" alt="image" src="https://github.com/user-attachments/assets/f0ff0b6a-9f0e-4df1-888b-21ed0c90ed38" />

As imagens são responsivas, sempre ajustando seu tamanho à largura disponível e os botões seguem o mesmo padrão de cores do site, com cantos arredondados, tipografia simples e um leve efeito de escurecimento ao passar o mouse, reforçando a interação visual.

# Header

<img width="299" height="452" alt="image" src="https://github.com/user-attachments/assets/f3d9243d-ddd3-4137-8546-75f5ef41a446" />
<img width="272" height="378" alt="image" src="https://github.com/user-attachments/assets/d504e64b-a472-444a-a26c-03cd193af7d8" />

O cabeçalho (header) é estruturado com um fundo rosa, alinhamento horizontal entre logo e navegação, e espaçamento equilibrado entre os itens. Os links do menu têm bordas arredondadas, transição de cor e destaque quando o usuário passa o mouse, criando uma navegação agradável.

# Footer

<img width="308" height="404" alt="image" src="https://github.com/user-attachments/assets/8f17768a-6259-43d1-97c6-ffb9e610eeb5" />

O rodapé (footer) mantém a paleta de cores principal, centraliza o texto e adiciona uma linha sutil para separar o conteúdo

# Títulos e parágrafos

<img width="280" height="318" alt="image" src="https://github.com/user-attachments/assets/a1c9ecab-fb3f-4ca4-9a7b-001cf17bca13" />

 Os títulos e parágrafos têm cores e espaçamentos consistentes, reforçando a identidade visual e garantindo legibilidade em toda a interface.

# Arquivo: home.module.css

# Estrutura da seção de anúncio

<img width="290" height="230" alt="image" src="https://github.com/user-attachments/assets/45172b7f-428b-464b-bd4d-b81e404487d8" />

Essa parte define o layout da seção inicial da página, onde fica a imagem de destaque. A classe .anuncio centraliza o conteúdo usando flexbox, enquanto o seletor .anuncio img garante que a imagem ocupe toda a largura da tela, mantendo altura fixa e sem margens, criando um banner limpo e proporcional.

# Organização geral do conteúdo

<img width="289" height="153" alt="image" src="https://github.com/user-attachments/assets/0a661f24-15ac-46f1-acc0-f5d1dc7f2562" />

Aqui é definido o contêiner principal que abriga o texto e o círculo. O uso de flexbox com espaçamento (gap) e flex-wrap permite que os elementos se ajustem automaticamente em diferentes tamanhos de tela. Isso cria um layout equilibrado e fluido, mantendo harmonia visual entre as seções.

# Estilo da seção de texto

<img width="247" height="315" alt="image" src="https://github.com/user-attachments/assets/475a3f38-5454-42c3-acb5-7c94a4446e80" />

A classe .texto organiza o conteúdo textual em colunas verticais, com espaçamento entre os elementos e tipografia legível. O tom rosado reforça a identidade visual do projeto.
A imagem dentro do texto é posicionada manualmente com deslocamento para a esquerda e para baixo, servindo como um detalhe decorativo.

# Estilo do círculo e seu conteúdo

<img width="283" height="478" alt="image" src="https://github.com/user-attachments/assets/330e11bb-e962-4feb-bbd0-d434b50b6f71" />
<img width="257" height="108" alt="image" src="https://github.com/user-attachments/assets/1ac1eb2c-2e40-4609-92c5-828149fd56c1" />

Essa parte cria um elemento circular decorativo, usado para destacar o objetivo do projeto. O border-radius: 50% forma o círculo, enquanto o flexbox centraliza o texto dentro dele. O efeito :hover amplia levemente o círculo, criando uma interação suave. As cores — fundo rosa e texto branco — dão contraste e harmonia ao visual.

# Responsividade

<img width="375" height="284" alt="image" src="https://github.com/user-attachments/assets/ba3e6a40-fe87-48f2-84db-cec5defa651e" />

Esse trecho garante que o layout se adapte a telas menores. O conteúdo passa de duas colunas para uma única coluna, centralizando tudo na vertical. O círculo se transforma em um bloco mais retangular, mantendo legibilidade e boa proporção em dispositivos móveis.

# Componentes

# Header.js

<img width="602" height="382" alt="image" src="https://github.com/user-attachments/assets/111aa2e4-096f-40a8-9426-55720f8fa39e" />

O componente Header.js define o cabeçalho principal do site e é responsável pela navegação entre as páginas. O código começa com a diretiva "use client", que indica que o componente é executado no lado do cliente — necessária porque ele utiliza recursos interativos do React, como o componente Link do Next.js. Em seguida, são importados Link e Image para criar links e inserir imagens otimizadas.

Dentro da função Header, o retorno JSX monta a estrutura do cabeçalho (header), que contém uma imagem e um menu de navegação. A imagem, inserida com o componente Image, exibe o logotipo do projeto WomanTech, com dimensões de 80x80 pixels e texto alternativo para acessibilidade. Logo ao lado, há o elemento nav com uma lista não ordenada (ul) que agrupa os itens de menu (li).

Cada item usa o componente Link para direcionar o usuário a diferentes páginas do site — “Home”, “Palestrantes”, “Encontros” e “Quer participar?”. O uso do Link permite navegação rápida entre as rotas sem recarregar a página, garantindo uma experiência fluida. No geral, o componente cria um cabeçalho funcional, simples e responsivo, servindo como elemento fixo de identidade visual e navegação em todo o site.

# Footer.js

<img width="392" height="179" alt="image" src="https://github.com/user-attachments/assets/01a1187d-73c8-45c4-b48c-f4274f420a1e" />

O componente Footer.js define o rodapé do site, exibindo informações finais e de autoria. Ele utiliza a tag footer para marcar semanticamente a seção inferior da página. Dentro dela, há uma linha horizontal (hr) que separa visualmente o conteúdo principal do rodapé, seguida de dois parágrafos: o primeiro mostra os direitos autorais e o ano, e o segundo apresenta os nomes das autoras do projeto. Simples e direto, o Footer dá um encerramento elegante e informativo à página, mantendo a consistência visual e estrutural do site.

# Organizadoras.js

<img width="631" height="394" alt="image" src="https://github.com/user-attachments/assets/899d4a13-3990-43dd-9156-01d4699d9cc2" />
<img width="617" height="265" alt="image" src="https://github.com/user-attachments/assets/f8268604-6cbd-42d6-98c4-74a56f890360" />

O componente Organizadoras.js é responsável por exibir as organizadoras e colaboradoras do projeto WomanTech. Ele começa importando o módulo de estilos CSS e o componente Image do Next.js, garantindo otimização das imagens. Em seguida, é definido um array chamado pessoas, que contém objetos com os nomes e caminhos das fotos de cada organizadora.

A função principal retorna uma estrutura dividida em duas partes: a primeira é o cabeçalho da seção, com o logo do projeto e o título “Organizadoras e colaboradoras”; a segunda exibe, em formato de grade, cada pessoa do array. Para isso, o código utiliza o método .map(), que percorre a lista e cria um bloco visual (section) para cada organizadora, contendo sua foto e nome.

Visualmente, o componente organiza as imagens e textos de forma harmoniosa e padronizada, transmitindo profissionalismo e reconhecimento às participantes. Além disso, o uso de classes do CSS modular garante estilo independente e fácil manutenção do layout.

# Organizadoras.module.css

<img width="714" height="474" alt="image" src="https://github.com/user-attachments/assets/c49622f8-4121-4430-9331-b602d8b9577f" />
<img width="722" height="495" alt="image" src="https://github.com/user-attachments/assets/ec98efe5-727c-4666-91be-70ac627dd925" />
<img width="697" height="205" alt="image" src="https://github.com/user-attachments/assets/95e8b2d9-900c-44f1-a478-f62f9cc7759c" />

O arquivo Organizadoras.module.css define o estilo visual da seção de organizadoras do projeto WomanTech, garantindo um layout limpo, harmônico e responsivo.

A classe .organizadoras cria o contêiner principal da seção, com espaçamento interno amplo, borda superior e alinhamento centralizado, destacando a área no site. Em seguida, .titulo organiza o logo e o título lado a lado, centralizados e com espaçamento entre eles, transmitindo equilíbrio visual; seu texto recebe uma coloração suave em rosa #cf8a8d, que mantém a identidade visual do projeto.

A classe .pessoas estrutura as fotos e nomes das organizadoras em um grid responsivo, adaptando automaticamente o número de colunas de acordo com o tamanho da tela. Cada organizadora é estilizada pela classe .pessoa, que mantém o texto centralizado, e pela classe .foto, que define as imagens em formato circular, com bordas suaves e um efeito de zoom ao passar o mouse — adicionando dinamismo e elegância à página.

Por fim, o bloco @media screen and (max-width: 768px) garante a responsividade: o título passa a ser exibido em coluna e o tamanho da fonte é reduzido, assegurando boa leitura e organização também em dispositivos móveis.

# Formulário

# page.js

<img width="794" height="529" alt="image" src="https://github.com/user-attachments/assets/0329b130-41bf-46ce-8cd7-0cf0207cf0fb" />
<img width="763" height="478" alt="image" src="https://github.com/user-attachments/assets/053e4560-a0f1-4ffd-8f03-91ac9562559d" />
<img width="745" height="477" alt="image" src="https://github.com/user-attachments/assets/0be80c6e-a080-41ed-b401-0d3d485bfd31" />
<img width="774" height="167" alt="image" src="https://github.com/user-attachments/assets/c94b8e06-562e-40b4-976b-0ae402feb12a" />

O código page.js do formulário cria a página principal de inscrição do WomanTech. Ele define um componente React com "use client" para permitir interação direta no navegador e importa o CSS do arquivo formswoman.module.css.

A página contém um formulário completo dentro de main e fieldset, reunindo campos de dados pessoais (nome, RA, e-mail), disponibilidade, curso, semestre, unidade, como conheceu o projeto, participação anterior e áreas de interesse no WomanTech. Também há um campo de texto livre para a candidata explicar suas motivações.

Por fim, o formulário inclui um botão de envio e um link de retorno à homepage. O código é organizado, acessível e segue boas práticas visuais e estruturais, oferecendo uma interface clara e funcional para inscrição no projeto.

# formswoman.module.css

<img width="798" height="479" alt="image" src="https://github.com/user-attachments/assets/0acb4c4f-f04b-49c0-a511-25c709900215" />
<img width="798" height="424" alt="image" src="https://github.com/user-attachments/assets/b0a28212-286f-4a9d-97b1-bd9221b511eb" />
<img width="798" height="436" alt="image" src="https://github.com/user-attachments/assets/7f8f455d-0776-456d-846b-e9916312de13" />
<img width="791" height="494" alt="image" src="https://github.com/user-attachments/assets/ff763287-7f4c-4986-a668-c7dab8e6a02d" />
<img width="783" height="116" alt="image" src="https://github.com/user-attachments/assets/7b5f3d4b-1202-4aa5-b21d-101a3307e746" />

O arquivo formswoman.module.css define todo o estilo visual da página de formulário do WomanTech, garantindo uma aparência organizada e coerente. O seletor .pagina centraliza o conteúdo na tela e aplica um fundo rosa escuro (#b36b6f). A classe .formulario define a estrutura principal do formulário, com largura máxima de 600px e texto branco.

Os elementos dentro do formulário, como fieldset, legend, label, input, select e textarea, recebem espaçamentos e bordas arredondadas para melhorar a legibilidade e a estética. Os campos de texto e seleção são amplos e confortáveis para digitar, enquanto os botões têm destaque em branco com texto rosa, mudando de cor ao passar o mouse.

O link de retorno à homepage é estilizado com .voltar e .link, mantendo o texto branco e um sublinhado para indicar interatividade. No geral, o CSS oferece um design limpo, responsivo e harmonioso, priorizando a clareza, legibilidade e usabilidade do formulário.
