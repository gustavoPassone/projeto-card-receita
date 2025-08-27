//adicionar as receitas na index

var divReceitas = document.querySelector(".receitas");

for (let i = 0; i < receitas.length; i++) {
    divReceitas.innerHTML += `
        <div class="card">
            <div class="card-img">
                <img src="${receitas[i].foto}" alt="${receitas[i].alt}">
            </div>
            <div class="card-content">
                <h1>${receitas[i].nome}</h1>
                <p>${receitas[i].descricao}</p>
                <div class="btn">
                    <a href="./detalhes-receita.html?id=${receitas[i].id}" class="btn-a">Ver Receita</a>
                </div>
            </div>
        </div>
    `;
}