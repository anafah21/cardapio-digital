document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById('menu-container');

    const menuItems = [
        {
            name: 'Pizza Calabresa',
            description: 'Molho de tomate, mussarela, calabresa fatiada, cebola e orégano.',
            price: 45.00,
            image: 'https://www.estadao.com.br/resizer/v2/SGSA2RXZQRASROXQVI2STOP4UU.jpg?quality=80&auth=dbf67e9a85a08e95d0a0df51c22bc71c6cbf5bbd6f6b939183d2b1cfec0ca598&width=1200&height=900&smart=true' // Imagem de placeholder
        },
        {
            name: 'Hambúrguer Clássico',
            description: 'Pão de brioche, blend de carne, queijo cheddar, alface, tomate e molho especial.',
            price: 32.50,
            image: 'https://viagem.cnnbrasil.com.br/wp-content/uploads/sites/5/2022/05/mafe-estudio-LV2p9Utbkbw-unsplash.jpg'
        },
        {
            name: 'Salada Caesar',
            description: 'Alface americana, frango grelhado, croutons, parmesão e molho Caesar.',
            price: 28.00,
            image: 'https://receitadaboa.com.br/wp-content/uploads/2024/04/bottom_view_caesar_salad_oval_plate_dark_red_table-23000869-1.jpg'
        },
        {
            name: 'Suco Natural de Laranja',
            description: 'Laranjas frescas espremidas na hora, sem adição de açúcar.',
            price: 12.00,
            image: 'https://www.samsclub.com.br/blog/wp-content/uploads/2024/01/Vidro-do-suco-de-laranja-colocado-num-copo-sobre-madeira.jpg'
        },
        {
            name: 'Brownie com Sorvete',
            description: 'Delicioso brownie de chocolate com uma bola de sorvete de creme e calda.',
            price: 18.00,
            image: 'https://www.specialita.com/wp-content/uploads/2022/07/brownie-de-chocoavela-com-sorvete.jpg'
        },
        {
            name: 'Lasanha à Bolonhesa',
            description: 'Camadas de massa, molho bolonhesa, presunto e queijo.',
            price: 38.00,
            image: 'https://guiadacozinha.com.br/wp-content/uploads/2019/10/lasanha-bolonhesa.jpg'
        }
    ];

    function createMenuItem(item) {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');

        menuItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <span class="item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
            </div>
        `;

        return menuItemDiv;
    }

    menuItems.forEach(item => {
        const menuItemElement = createMenuItem(item);
        menuContainer.appendChild(menuItemElement);
    });
});