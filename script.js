  const topicos = [
  "Produto em uma sala de estar moderna e aconchegante.",
  "Produto em uma sala de cinema doméstica, com televisão/tela grande e poltronas.",
  "Produto em um quarto com temática de viagem, com malas, mapas, lembranças e decoração inspirada em diferentes países.",
  "Produto em um quarto gamer, com computador, iluminação decorativa e equipamentos.",
  "Produto em um quarto infantil, com brinquedos e decoração divertida.",
  "Produto em um quarto adolescente, com decoração jovem e personalidade.",
  "Produto em um escritório doméstico moderno, com mesa e computador.",
  "Produto em uma biblioteca residencial, cercado por livros e estantes.",
  "Produto em uma sala de leitura confortável, com poltrona e iluminação suave.",
  "Produto em um banheiro residencial sofisticado, com decoração moderna.",
  "Produto em uma lavanderia bonita e organizada, mostrando uma utilização criativa do espaço.",
  "Produto em um corredor decorado de uma casa moderna.",
  "Produto em um hall de entrada, próximo à porta principal.",
  "Produto em uma escada residencial, integrado à decoração da parede.",
  "Produto em uma garagem organizada de uma casa moderna.",
  "Produto em uma oficina doméstica organizada, com ferramentas ao fundo.",
  "Produto em uma varanda fechada transformada em espaço de convivência.", 
//acima visto e conferido
  "Produto em uma cozinha moderna de alto padrão.",
  "Produto em uma cozinha rústica de casa de campo.",
  "Produto em uma cozinha pequena e aconchegante.",
  "Produto em uma cozinha com ilha central e decoração contemporânea.",
  "Produto em uma cozinha de apartamento moderno.",
  "Produto em uma área gourmet completa.",
  "Produto próximo a uma churrasqueira residencial.",
  "Produto em uma varanda gourmet com mesa de jantar.",
  "Produto em uma sala de jantar elegante preparada para uma refeição.",
  "Produto em uma cafeteria moderna com estilo urbano.",
  "Produto em uma padaria artesanal com decoração rústica.",
  "Produto em um restaurante sofisticado.",
  "Produto em um restaurante rústico com forte presença de madeira.",
  "Produto em uma cozinha de restaurante profissional.",

  "Produto em um jardim tropical com vegetação abundante.",
  "Produto em um jardim japonês, com pedras e plantas cuidadosamente organizadas.",
  "Produto em um quintal familiar com gramado.",
  "Produto em uma varanda aberta cercada por plantas.",
  "Produto em uma área externa próxima a uma piscina.",
  "Produto em uma varanda de casa na praia.",
  "Produto em um jardim de inverno dentro de uma residência.",
  "Produto em um pequeno pátio interno de uma casa.",
  "Produto em uma área de descanso externa com rede e plantas.",
  "Produto em um espaço externo com fogueira e decoração rústica.",

  "Produto em um estúdio de música doméstico com instrumentos.",
  "Produto em uma sala dedicada a jogos de tabuleiro.",
  "Produto em uma sala de videogames retrô.",
  "Produto em uma coleção de livros e objetos nerd/geek.",
  "Produto em um estúdio de fotografia.",
  "Produto em um ateliê de pintura.",
  "Produto em uma oficina de artesanato.",
  "Produto em um espaço dedicado a plantas e jardinagem.",
  "Produto em uma sala de instrumentos musicais.",
  "Produto em um espaço de criação de conteúdo, com câmera, microfone e iluminação.",
  "Produto em um pequeno estúdio de gravação.",
  "Produto em uma sala dedicada a filmes e séries.",
  "Produto em uma coleção de miniaturas e objetos colecionáveis.",
  "Produto em um ambiente dedicado a bicicletas e equipamentos esportivos.",

  "Produto em uma loja de decoração.",
  "Produto em uma loja especializada em móveis.",
  "Produto em uma floricultura.",
  "Produto em uma loja de plantas.",
  "Produto em uma loja de produtos artesanais.",
  "Produto em uma marcenaria organizada.",
  "Produto em um showroom de móveis.",
  "Produto em uma loja de materiais para construção.",
  "Produto em uma boutique sofisticada.",
  "Produto em uma livraria.",
  "Produto em uma papelaria criativa.",
  "Produto em um escritório moderno.",
  "Produto em uma recepção de empresa.",
  "Produto em um hotel sofisticado.",

  "Produto em uma casa de praia com decoração clara e tropical.",
  "Produto em uma casa de montanha cercada por natureza.",
  "Produto em uma casa de campo com arquitetura rústica.",
  "Produto em uma casa histórica restaurada.",
  "Produto em um loft urbano com arquitetura industrial.",
  "Produto em um apartamento de luxo com grandes janelas.",
  "Produto em uma casa moderna completamente cercada por vidro e vegetação.",
  "Produto em uma cabana aconchegante no meio da floresta.",
  "Produto em uma casa com decoração inspirada em viagens.",
  "Produto em um ambiente inspirado em uma antiga oficina artesanal.",

  "Produto em um ambiente totalmente construído ao redor de madeira e elementos naturais.",
  "Produto em uma casa futurista, mantendo o produto com aparência real.",
  "Produto em uma casa subterrânea moderna e aconchegante.",
  "Produto em um ambiente inspirado em uma estufa, cercado por plantas.",
  "Produto em uma biblioteca enorme com arquitetura clássica.",
  "Produto em um ambiente inspirado em um chalé europeu.",
  "Produto em uma cobertura urbana com vista panorâmica da cidade.",
  "Produto em um ambiente de luxo inspirado em um hotel cinco estrelas.",
  "Produto em uma composição completamente inesperada escolhida pela IA, mas ainda plausível e comercial.",
  "Produto em um cenário livre escolhido pela IA, buscando a composição mais criativa, bonita e realista possível."
];

const inicio = "Crie uma imagem usando o meu produto integrado ao tema escolhido abaixo:\nTema:";

const importante = "IMPORTANTE:\n- NÃO altere o produto em sua FORMA, COR, MATERIAL ou características originais.\n- NÃO redesenhe, estilize ou transforme o produto.\n- O produto deve continuar sendo claramente o mesmo produto fornecido como referência.\n- É permitido alterar o ÂNGULO, a posição, a perspectiva e a iluminação do produto.\n- Todo o restante da cena pode ser criado livremente para representar o tema.\n- Use elementos do ambiente que combinem com o tema e tornem a cena interessante e única.\nConfio em você ;)";

const numeroEl = document.getElementById("numero");
const topicoEl = document.getElementById("topico");
const promptEl = document.getElementById("prompt");
const statusEl = document.getElementById("status");

let indiceAtual = -1;

function gerarPrompt(indice) {
  const topico = topicos[indice];
  return `${inicio} ${topico}\n\n${importante}`;
}

function sortearTopico() {
  indiceAtual = Math.floor(Math.random() * topicos.length);

  numeroEl.textContent = indiceAtual + 1;
  topicoEl.textContent = topicos[indiceAtual];
  promptEl.value = gerarPrompt(indiceAtual);
  statusEl.textContent = "";
}

async function copiarPrompt() {
  if (indiceAtual === -1) {
    statusEl.textContent = "Primeiro sorteie um tópico.";
    return;
  }

  try {
    await navigator.clipboard.writeText(promptEl.value);
    statusEl.textContent = "✓ Frase copiada!";
  } catch (erro) {
    promptEl.select();
    document.execCommand("copy");
    statusEl.textContent = "✓ Frase copiada!";
  }
}

document.getElementById("sortear").addEventListener("click", sortearTopico);
document.getElementById("copiar").addEventListener("click", copiarPrompt);