export default function ImagemDetalhe({ params }) {
  const { id } = params;

  const imagens = {
    img1: { titulo: "WomanTech no WIT 2025", descricao: "Descrição da primeira imagem." },
    img2: { titulo: "Imagem 2", descricao: "Descrição da segunda imagem." },
    img3: { titulo: "Imagem 3", descricao: "Descrição da terceira imagem." },
    img4: { titulo: "Imagem 4", descricao: "Descrição da quarta imagem." },
  };

  const imagem = imagens[id];

  if (!imagem) {
    return <h1 className="text-center text-red-500 mt-20 text-2xl">Imagem não encontrada 😢</h1>;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-4">{imagem.titulo}</h1>
      <p className="text-lg text-gray-700 mb-6">{imagem.descricao}</p>
      <img
        src={`/images/${id}.jpg`}
        alt={imagem.titulo}
        className="rounded-2xl shadow-lg max-w-xl"
      />
    </main>
  );
}
