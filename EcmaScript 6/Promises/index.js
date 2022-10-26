class carroEletrico {
  constructor(modelo, capacidade, carga) {
    this.modelo = modelo;
    this.capacidade = capacidade;
    this.carga = carga;
    this.porcentagemDaCarga = (this.carga * 100) / this.capacidade
  }


}

class ligarCarro {
    constructor(carroEletrico){
        this.modelo = carroEletrico.modelo
        this.capacidade = carroEletrico.capacidade
        this.carga = carroEletrico.carga
        this.porcentagemDaCarga = carroEletrico.porcentagemDaCarga
    }

    verificarPorcentagem(modelo, porcentagemDaCarga){
        return new Promise(function(resolve, reject){
            if(porcentagemDaCarga < 30){
                console.log(`${modelo} Partida não autorizada. Carga em ${porcentagemDaCarga}%`)
                reject('Partida não autorizada.')
            }else{
                console.log(`${modelo} Partida autorizada: carga atual em  ${porcentagemDaCarga}%`)
                resolve()
            }
        })
        
    }
}

let model3 = new carroEletrico("model3", 10, 9)
let phaser = new carroEletrico("Phaser", 50, 10)
let seaRocket = new carroEletrico("Sea Rocket", 20, 3)

let ligar1 = new ligarCarro(model3)
let ligar2 = new ligarCarro(phaser)
let ligar3 = new ligarCarro(seaRocket)

ligar1.verificarPorcentagem(ligar1.modelo, ligar1.porcentagemDaCarga)
ligar2.verificarPorcentagem(ligar2.modelo, ligar2.porcentagemDaCarga)
ligar3.verificarPorcentagem(ligar3.modelo, ligar3.porcentagemDaCarga)


