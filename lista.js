const produto = {
  nome: "",
  descrição: "",
  valor: 0,
  disponivel: "Disponível",
};

function addName(event) {
  event.preventDefault();
  produto.nome = event.target.value;
}

function addDescription(event) {
  event.preventDefault();
  produto.descrição = event.target.value;
}

function addValue(event) {
  event.preventDefault();
  produto.valor = event.target.value;
}

function addYes(event) {
  event.preventDefault();
  if (event.target.value === "sim") {
    produto.disponivel = "Disponível";
  } else {
    return;
  }
}

function addNo(event) {
  event.preventDefault();
  if (event.target.value === "não" || event.target.value === "nao") {
    produto.disponivel = "Indisponível";
  } else {
    return;
  }
}

const produtos = [];

function addProduct() {
  produtos.push(produto);
  console.log(produtos);
  const listaProdutos = document.getElementById("lista-produtos");
  const novoProduto = document.createElement("li");
  const nomeProduto = document.createTextNode(produto.nome);
  const descricaoProduto = document.createTextNode(produto.descrição);
  const valorProduto = document.createTextNode(produto.valor);
  const dispProduto = document.createTextNode(produto.disponivel);
  const linebreak = document.createElement("br");
  const linebreak2 = document.createElement("br");
  const linebreak3 = document.createElement("br");
  const linebreak4 = document.createElement("br");

  novoProduto.appendChild(nomeProduto);
  novoProduto.appendChild(linebreak);
  novoProduto.appendChild(descricaoProduto);
  novoProduto.appendChild(linebreak2);
  novoProduto.appendChild(valorProduto);
  novoProduto.appendChild(linebreak3);
  novoProduto.appendChild(dispProduto);
  novoProduto.appendChild(linebreak4);
  listaProdutos.appendChild(novoProduto);
}

function refresh(event) {
  const listaProdutos = document.getElementById("lista-produtos");
  listaProdutos.innerHTML = "";

  const form = document.forms[0];
  const inputNome = form.querySelector('input[name="nome"');
  const inputDesc = form.querySelector('input[name="produto-descrição"');
  const inputValor = form.querySelector('input[name="valor"');
  inputNome.value = "";
  inputDesc.value = "";
  inputValor.value = null;
}
