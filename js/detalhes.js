window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');

    // encontra a receita no array 'receitas' (que veio do dados.js)
    const receita = receitas.find(r => r.id == parseInt(recipeId));

    if (receita) {
        document.getElementById('recipe-image').src = receita.foto;
        document.getElementById('recipe-image').alt = receita.alt;
        document.getElementById('recipe-title').textContent = receita.nome;
        document.getElementById('recipe-preparation').textContent = receita.modoPreparo;

        const ingredientsList = document.getElementById('recipe-ingredients');
        // limpar
        ingredientsList.innerHTML = ''; 
        
        receita.ingredientes.forEach(ingrediente => {
            const li = document.createElement('li');
            li.textContent = ingrediente;
            ingredientsList.appendChild(li);
        });

    } else {
        document.querySelector('.detalhe-container').innerHTML = '<h1>Receita não encontrada!</h1>';
    }
});