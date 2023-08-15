//LISTA DE USUARIOS
let listaDados = [];

//CRIANDO A BASE (CONSTRUTOR)
function Campos(campo1,campo2){
    this.campo1 = campo1
    this.campo2 = campo2
}

//DISPARAR O BOTÃO COM O DOM
const btnEnviar = document.querySelector('#btnSubmit')

//EVENTO DO CLICK
btnEnviar.addEventListener('click',()=>{
    const inputcampo1 = document.querySelector('#campo1');
    const inputcampo2 = document.querySelector('#campo2');

  //instanciando o objeto para receber no campo 
    let info = new Campos(inputcampo1.value,inputcampo2.value)

  //pega o que estiver dentro do listaDados
    listaDados.push(info);

  //armazeno o que for adicionado na listaDados e converte com JSON
    localStorage.setItem("dados",JSON.stringify(listaDados))
})