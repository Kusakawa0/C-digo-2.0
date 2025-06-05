// Dicas Sustentáveis
const botoes = document.querySelectorAll(".tabs button");
const conteudoDica = document.getElementById("conteudo-dica");

const dicas = {
  1: `Cultivar uma horta em casa é possível mesmo em pequenos espaços. Utilize vasos, garrafas PET ou jardineiras com ervas como manjericão, alecrim e hortelã. Escolha locais com luz solar direta por pelo menos 4 horas. Regue regularmente e use adubo natural. <br><br><em>Fonte: <a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/meio_ambiente/hortas/" target="_blank">Prefeitura de SP</a></em>`,
  2: `A compostagem transforma resíduos orgânicos (restos de alimentos e folhas secas) em adubo natural. Isso reduz o lixo, evita a emissão de gases do efeito estufa e enriquece o solo com nutrientes essenciais, melhorando a retenção de água e a saúde das plantas. <br><br><em>Fonte: <a href="https://www.agricultura.gov.br/assuntos/sustentabilidade/compostagem" target="_blank">Ministério da Agricultura</a></em>`,
  3: `Prefira plantar espécies nativas, que são mais resistentes e ajudam o equilíbrio ambiental local. Essas plantas atraem polinizadores, conservam a biodiversidade e requerem menos água e cuidados, tornando sua horta mais sustentável. <br><br><em>Fonte: <a href="https://www.institutobutantan.org.br" target="_blank">Instituto Butantan</a></em>`
};

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    botoes.forEach(b => b.classList.remove("ativo"));
    botao.classList.add("ativo");
    const dica = botao.getAttribute("data-dica");
    conteudoDica.innerHTML = dicas[dica];
  });
});

// Popup Modal de Imagem
const imagens = document.querySelectorAll('.img-container');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const popupDesc = document.getElementById('popup-desc');
const closeBtn = document.querySelector('.close-btn');

const descricoes = [
  "🌿 Esta horta urbana foi instalada no topo de um prédio comercial, aproveitando o espaço ocioso para cultivar alimentos orgânicos. Ela contribui para o isolamento térmico do edifício, melhora a qualidade do ar e proporciona alimentos frescos aos colaboradores. Um ótimo exemplo de sustentabilidade integrada ao meio urbano.",
  "🌍 Um exemplo de comunidade engajada na produção coletiva de alimentos. Esta horta comunitária incentiva o convívio social, a troca de conhecimentos e a segurança alimentar local, principalmente em regiões periféricas ou de menor acesso a alimentos saudáveis.",
  "🏙️ O cultivo vertical é uma solução moderna para ambientes com pouco espaço horizontal. Ele utiliza estruturas verticais para plantar vegetais em apartamentos e centros urbanos, promovendo o verde nos centros das cidades e reduzindo a dependência de cadeias de abastecimento longas."
];

imagens.forEach((container, index) => {
  container.addEventListener('click', () => {
    const img = container.querySelector('img');
    popupImg.src = img.src;
    popupImg.alt = img.alt;
    popupDesc.innerText = descricoes[index];
    popup.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
