//Altera o título da tabela
var titulo = document.querySelector(".titulo");
titulo.textContent = "Lista de Encomendas";

//Captura os dados de todos os clientes
var clientes = document.querySelectorAll(".cliente");

for (var i=0; i < clientes.length; i++){
    
    /*================================================================
        ROTINA DE CÁLCULO DO VALOR TOTAL POR ENCOMENDA
    ==================================================================*/
    
    //Captura a QUANTIDADE encomendada por cada cliente
    var qtde = clientes[i].querySelector(".info-qtde").textContent;

    //Captura o VALOR UNITÁRIO de cada encomenda
    var unitario = clientes[i].querySelector(".info-valor").textContent;

    //Verifica se a QUANTIDADE recebida é válida
    if (isNaN(qtde)){
        clientes[i].querySelector(".info-total").textContent="Quantidade inválida!";
        //Colore a fonte dessa linha na cor vermelha
        clientes[i].style.color = "red";
    }
    else{
        //Verifica se o VALOR UNITÁRIO é válido
        if (isNaN(unitario)){
            clientes[i].querySelector(".info-total").textContent="Valor unitário é inválido!";
            //Colore o fundo dessa linha na cor light coral
            clientes[i].style.backgroundColor = "lightcoral";
        }
        else{
                //Formata o VALOR UNITÁRIO
                var unitFormat = parseFloat(unitario);
                clientes[i].querySelector(".info-valor").textContent = unitFormat.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

            //Calcula o VALOR TOTAL e exibe na tabela
            var total = qtde * unitario;
            clientes[i].querySelector(".info-total").textContent= total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

        }
    }
}