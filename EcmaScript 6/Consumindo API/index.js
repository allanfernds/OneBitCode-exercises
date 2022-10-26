function consultarEndereço(){
    let cep = document.querySelector("#cep").value; 

    if(cep.length !== 8){
        alert("CEP Invalido");
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
    .then(function(response){
        response.json().then(function(data){
       
                console.log(data)
        
            
        })
    })

};

