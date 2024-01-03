let menu;
let vagas = [];

function listarVagas(){
    let resultado = "Lista de vagas";
    vagas.forEach((vaga, index)=> {
        resultado += `
        indice: ${index} 
        nome da vaga: ${vaga.nomeVaga} 
        Candidatos inscritos: ${vaga.candidatos.length}\n`
    });
    return resultado;
}

function criarVaga() {
    let nomeVaga = prompt("Digite o nome da vaga:");
    let descricaoVaga = prompt("Digite a descrição da vaga");
    let dataLimite = prompt("Digite uma data limite:");

    if(confirm(`Deseja cadastrar essa vaga:
    nome da vaga: ${nomeVaga}
    descrição da vaga: ${descricaoVaga}
    data limite: ${dataLimite}`)){
        vagas.push({
            nomeVaga,
            descricaoVaga,
            dataLimite,
            candidatos: []
            
        });
        alert("Vaga cadastrada com sucesso")
        }else{
        alert("Vaga cancelada!")
        }
    }


function visualizarVaga() {
    let indiceVaga = prompt("Digite o indice da vaga que deseja ver:");
    indiceVaga = parseInt(indiceVaga) 

    if(confirm(`Deseja excluir essa vaga:
    nome da vaga: ${nomeVaga}
    descrição da vaga: ${descricaoVaga}
    data limite: ${dataLimite}`)){
        vagas.push({
            nomeVaga,
            descricaoVaga,
            dataLimite,
            candidatos: []
            
        });
        alert("Vaga cagastrada com sucesso")
        }else{
        alert("Vaga cancelada!")
        }
}


function inscreverCandidato() {
    let nomeCandidato = prompt("Qual o nome do candidato?");
    let indiceVaga = prompt("Qual o indice da vaga?");
    if (confirm(`Deseja inscrever ${nomeCandidato} na vaga ${vagas[indiceVaga].nomeVaga}`)) {
        vagas[indiceVaga].candidatos.push(nomeCandidato);
    }else{
        alert("Inscrição cancelada!")
    }
}
function excluirVaga() {
    let indiceVaga = prompt("Digite o índice da vaga que deseja excluir:");

    if (!isNaN(indiceVaga) && indiceVaga >= 0 && indiceVaga < vagas.length) {
        let nomeVagaExcluida = vagas[indiceVaga].nomeVaga;
        if (confirm(`Deseja excluir a vaga "${nomeVagaExcluida}"?`)) {
            vagas.splice(indiceVaga, 1);
            alert(`Vaga "${nomeVagaExcluida}" excluída com sucesso!`);
        } else {
            alert("Exclusão cancelada!");
        }
    } else {
        alert("Índice inválido ou não numérico.\n");
    }
}





do {
    menu = prompt(`Bem vindo ao cadastro de vagas:
    1- Listar vagas disponíveis
    2- Criar um nova vaga
    3- Visualizar uma vaga
    4- Inscrever um candidato em uma vaga
    5- Excluir uma vaga
    6- Sair`);
    switch (menu) {
        case '1':
            alert(listarVagas());
        break;
        case '2':
            criarVaga();
        break;
        case '3':
            visualizarVaga();
        break;
        case '4':
            inscreverCandidato();
        break;
        case '5':
            excluirVaga();
        break;
        case '6':
            alert('Encerrando a aplicação')
        break;
    
        default:
            alert("Opção invalida, reveja as opções disponiveis!")
            break;
    }
} while (menu != '6');