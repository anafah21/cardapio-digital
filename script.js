const menuItems = [
    {
        id: 1,
        name: "Pizza Margherita",
        description: "Clássica pizza italiana com molho de tomate, mussarela e manjericão fresco, assada em forno a lenha.",
        price: 38.00,
        category: "Pizzas",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"
    },
    {
        id: 2,
        name: "Lasanha à Bolonhesa",
        description: "Camadas de massa fresca, rico molho bolonhesa, presunto e queijo, gratinada no forno à perfeição.",
        price: 45.00,
        category: "Massas",
        image: "https://static.itdg.com.br/images/640-440/ec2a5e38702c60bf1ace0b5f1c8e9415/shutterstock-739787011.jpg"
    },
    {
        id: 3,
        name: "Salmão Grelhado",
        description: "Filé de salmão fresco grelhado, servido com legumes orgânicos da estação e um toque de molho de maracujá.",
        price: 62.00,
        category: "Pratos Principais",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQkMVj5u-nJhelHUJTLPhawSSBx-ot_xWlIA&s"
    },
    {
        id: 4,
        name: "Tiramisu Clássico",
        description: "Sobremesa italiana clássica com camadas de biscoitos de champanhe embebidos em café, creme mascarpone e cacau em pó.",
        price: 25.00,
        category: "Sobremesas",
        image: "https://receitadaboa.com.br/wp-content/uploads/2024/08/tiramisu.jpg"
    },
    {
        id: 5,
        name: "Risoto de Cogumelos",
        description: "Arroz arbóreo cremoso com mix de cogumelos frescos, finalizado com queijo parmesão e azeite trufado.",
        price: 48.00,
        category: "Massas",
        image: "https://www.pingodoce.pt/wp-content/uploads/2021/07/risotto-de-cogumelos-com-caldo-de-espargos.jpeg"
    },
    {
        id: 6,
        name: "Picanha na Chapa",
        description: "Deliciosa picanha grelhada no ponto perfeito, acompanhada de arroz biro-biro e batatas rústicas.",
        price: 75.00,
        category: "Pratos Principais",
        image: "https://www.minhareceita.com.br/app/uploads/2025/02/R0225-MT-picanha-grelhada-com-farofa-de-mandioca-1200x675-1.webp"
    },
    {
        id: 7,
        name: "Cheesecake de Frutas Vermelhas",
        description: "Cremoso cheesecake com base de biscoito, coberto por uma calda artesanal de frutas vermelhas frescas.",
        price: 28.00,
        category: "Sobremesas",
        image: "https://conteudo.imguol.com.br/c/entretenimento/04/2020/08/10/cheesecake-com-calda-de-frutas-vermelhas-1597080856359_v2_1x1.jpg"
    },
    {
        id: 8,
        name: "Pizza Calabresa",
        description: "Massa fina, molho de tomate, mussarela, calabresa fatiada, cebola e orégano.",
        price: 40.00,
        category: "Pizzas",
        image: "https://cdn0.tudoreceitas.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600.jpg"
    },

    {
        id: 9,
        name: "Suco de Laranja",
        description: "Nosso delicioso suco de laranja feito na hora.",
        price: 10.00,
        category: "Sucos",
        image: "https://veja.abril.com.br/wp-content/uploads/2024/02/suco-laranja.jpg?crop=1&resize=1212,909"
    },

    {
        id: 10,
        name: "Suco de Uva",
        description: "Nosso delicioso suco de uva feito na hora.",
        price: 10.00,
        category: "Sucos",
        image: "https://wx.mlcdn.com.br/ponzi/production/portaldalu/58836.jpg"
    },
    {
        id: 11,
        name: "petit gateau",
        description: "O petit gâteau é uma sobremesa de origem francesa, um pequeno bolo de chocolate com um interior cremoso e quente, servido com sorvete.",
        price: 15.00,
        category: "Sobremesas",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6wwODWwV8cfCQGAjkmdAfHw46-hdy38C24w&s"
    },

];

const menuContainer = document.getElementById('menu-container');
const filterButtonsContainer = document.getElementById('filter-buttons-container');

/**
 * Exibe dinamicamente os itens do cardápio no #menu-container.
 * @param {Array} items - Um array de objetos de item do cardápio.
 */
function displayMenuItems(items) {
    // Gera o HTML para cada item do cardápio
    let displayHtml = items.map(function(item) {
        return `
            <article class="menu-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                    <span class="item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
                </div>
            </article>
        `;
    }).join(""); // Junta todas as strings HTML geradas em uma só

    menuContainer.innerHTML = displayHtml; // Insere o HTML no container
}

/**
 * Cria e exibe os botões de filtro de categoria.
 */
function displayFilterButtons() {
    // Pega todas as categorias únicas, incluindo 'Todos'
    const categories = ['Todos', ...new Set(menuItems.map(item => item.category))];

    // Gera o HTML para cada botão
    const categoryBtnsHtml = categories.map(function(category) {
        return `<button class="filter-btn" type="button" data-category="${category}">${category}</button>`;
    }).join("");

    filterButtonsContainer.innerHTML = categoryBtnsHtml; // Insere os botões no container

    const filterBtns = filterButtonsContainer.querySelectorAll('.filter-btn');

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const selectedCategory = e.currentTarget.dataset.category;
            let filteredItems = [];

            if (selectedCategory === 'Todos') {
                filteredItems = menuItems; // Mostrar todos os itens se 'Todos' for selecionado
            } else {
                // Filtrar itens com base na categoria selecionada
                filteredItems = menuItems.filter(function(menuItem) {
                    return menuItem.category === selectedCategory;
                });
            }
            displayMenuItems(filteredItems); // Atualiza os itens do cardápio exibidos

            // Gerenciar a classe 'active' para estilização
            filterBtns.forEach(b => b.classList.remove('active')); // Remover de todos
            e.currentTarget.classList.add('active'); // Adicionar ao clicado
        });
    });

    // Ativar automaticamente o botão "Todos" na carga inicial
    const allButton = document.querySelector('.filter-btn[data-category="Todos"]');
    if (allButton) {
        allButton.classList.add('active');
    }
}

// Listener de evento para executar as funções assim que o DOM estiver totalmente carregado
window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menuItems); // Exibir todos os itens inicialmente
    displayFilterButtons(); // Criar e exibir os botões de filtro
});