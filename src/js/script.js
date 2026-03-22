let listItems = [
    {
        nome: "Exemplo",
        data: "21/03/2026"
    }
];

const listBox = document.querySelector(".list-box");

function addItem(_nome, _data){
    const newItem = document.createElement("div");
    newItem.className = "list-item";
    newItem.innerHTML = `<span class="list-name">${_nome}</span>
                    <span class="list-date">${_data}</span>
                    <button class="list-button">Remover</button>`;
    listBox.append(newItem);
}

addItem(listItems[0].nome, listItems[0].data)