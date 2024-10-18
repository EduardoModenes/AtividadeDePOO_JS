class Pokemon{

    constructor(nome, tipo, nivel, hp, ataque, defesa, poder){

        this.nome = nome;
        this.tipo = tipo;
        this.nivel = nivel;
        this.hp = hp;
        this.ataque = ataque;
        this.defesa = defesa;
        this.poder = poder;
    }
    
    atacar(){
        document.write(`<h1 style="color:green;">Pokémon está atacando com seu poder.</h1>`);
    }

    programa(){
        document.write(`<h4>Nome: ${this.nome}</h4>  <h4>Tipo: ${this.tipo}</h4>  <h4>Nivel: ${this.nivel}</h4>  <h4>HP: ${this.hp} </h4>  <h4>Ataque: ${this.ataque} </h4>  <h4>Defesa: ${this.defesa}</h4>  <h4>Poder: ${this.poder}</h4>`);
    }
}  

const Pokemon1 = new Pokemon("Pikachu", "Electric", "Nº 0025", "35", "55", "40", "1060 PC");
const Pokemon2 = new Pokemon("Articuno", "ICE, VOADOR", "Nº 0144", "90", "85", "100", "3450 PC");

document.write(`<h2>Pokémon 1: ${Pokemon1.nome}</h2>`);
Pokemon1.programa();

Pokemon1.atacar();

document.write(`<br> <h2>Pokémon 2: ${Pokemon2.nome}</h2>`);
Pokemon2.programa();

Pokemon2.atacar();