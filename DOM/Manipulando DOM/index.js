
function adicionar(){
  let numero = document.querySelector("input[name='numero']").value;
  let bairro = document.querySelector("input[name='bairro']").value;
  let cidade = document.querySelector("input[name='cidade']").value;
  let area = document.querySelector("input[name='area']").value;

  //Criando uma <li> com os inputs
  let home = document.createElement("li")
  home.innerText = ("Numero: " + numero + "\nBairro: " + bairro + "\nCidade: " + cidade + "\nArea: " + area)


  let remove = document.createElement("button")
  remove.innerText = "Remover"
  remove.type = "button"
  remove.setAttribute("onclick", "removeHouse(this)")
  home.appendChild(remove)

  //Buscando a <ul> que vai receber a <li>
  let homeList = document.querySelector("#lista")
  homeList.appendChild(home)
  
 

}
 function removeHouse(button){
   let li = button.parentNode
   document.getElementById("lista").removeChild(li)
 }
