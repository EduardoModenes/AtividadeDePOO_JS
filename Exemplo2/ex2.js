class Animal{
    constructor(nome, idade, animal){
        
        this.nome = nome
        this.idade = idade
        this.animal = animal
    }

    emitirSom(){
        document.write(`<h3>Nome: ${this.nome} <br> Idade: ${this.idade} <br> Tipo Animal: ${this.animal}</h3>`);
    }
}

class Cachorra extends Animal{
    constructor(nome, idade, animal ,tipoSom){
        super(nome, idade, animal);

        this.tipoSom = tipoSom;
    }

    emitirSom(){
        super.emitirSom()
            document.write(`Cachorro faz "${this.tipoSom}"`);
    
    }
}

const cachorro = new Cachorra("Lili", "7", "Cachorro" ,"Au Au");

cachorro.emitirSom();