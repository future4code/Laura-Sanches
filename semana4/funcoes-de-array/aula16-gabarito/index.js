let arrDespesas = [];
imprimirDespesas(arrDespesas);
imprimirExtrato();

// PRIMEIRO
function imprimirDespesas(despesas) {
  let divDespesas = document.getElementById("despesas");
  divDespesas.innerHTML = "<p><u>Despesas Detalhadas</u></p>";

  despesas.forEach((despesas) => {
    divDespesas.innerHTML += `<p>valor: R$ ${despesas.valor}| tipo: ${despesas.tipo} | descrição: ${despesas.descricao}<p/>`;
  });
}

// SEGUNDO
function imprimirExtrato() {
  let divExtrato = document.getElementById("extrato");
  let gastoTotal = 0;
  let gastoAlimentacao = 0;
  let gastoUtilidades = 0;
  let gastoViagem = 0;

  arrDespesas.forEach((despesa) => {
    if (despesa.tipo === "alimentação") {
      gastoAlimentacao += despesa.valor;
    } else if (despesa.tipo === "utilidades") {
      gastoUtilidades += despesa.valor;
    } else {
      gastoViagem += despesa.valor;
    }

    gastoTotal = gastoUtilidades + gastoAlimentacao + gastoViagem;
  });

  divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`;
}

function limparFiltros() {
  document.getElementById("tipoFiltro").value = "";
  document.getElementById("valorFiltroMin").value = "";
  document.getElementById("valorFiltroMax").value = "";
}

function adicionarDespesa() {
  let valorCdt = document.getElementById("valorCadastro");
  let tipoCtd = document.getElementById("tipoCadastro");
  let descricaoCtd = document.getElementById("descricaoCadastro");

  if (
    validarValor(valorCdt) &&
    validarTipo(tipoCtd) &&
    validarDescricao(descricaoCtd)
  ) {
    let novaDespesa = {
      valor: Number(valorCdt.value),
      tipo: tipoCtd.value,
      descricao: descricaoCtd.value,
    };

    arrDespesas.push(novaDespesa);

    valorCdt.value = "";
    tipoCtd.value = "";
    descricaoCtd.value = "";

    limparFiltros();
    imprimirDespesas(arrDespesas);
    imprimirExtrato();
  } else {
    alert("`Faltou algum valor ou algum valor é um número negativo`");
  }
}

// TERCEIRO
function filtrarDespesas() {
  let tipoFiltro = document.getElementById("tipoFiltro").value;
  let valorMin = Number(document.getElementById("valorFiltroMin").value);
  let valorMax = Number(document.getElementById("valorFiltroMax").value);

  let despesasFiltradas = arrDespesas.filter((despesa) => {
    if (
      (tipoFiltro === despesa.tipo || tipoFiltro === "todos") &&
      despesa.valor >= valorMin &&
      despesa.valor <= valorMax
    ) {
      return true;
    }
  });

  imprimirDespesas(despesasFiltradas);
}

function validarValor(valor) {
  if (valor.value.length > 0 && parseInt(valor.value) > 0) {
    return true;
  }
  return false;
}

function validarTipo(tipo) {
  if (tipo.value !== "") {
    return true;
  }
  return false;
}

function validarDescricao(texto) {
  if (texto.value.replace(/ /g, "").length !== 0) {
    return true;
  }
  return false;
}