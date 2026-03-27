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

addItem(listItems[0].nome, listItems[0].data);

function Item(_nome, _data) {
    this.nome = _nome;
    this.data = _data;
}

function newItem(){
    const _nome = prompt("Digite o nome do item");
    const _data = prompt("Digite a data do item");
    const item = new Item(_nome, _data);
    listItems.push(item);
    addItem(_nome, _data);
}