class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        if (this.tipo === "mago") {
            ataque = "usou magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "usou espada";
        } else if (this.tipo === "monge") {
            ataque = "usou artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "usou shuriken";
        } else {
            ataque = "realizou um ataque";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Hero("Guiu", 31, "Guerreiro");
heroi1.atacar();

const heroi2 = new Hero("GranElf", 350, "Mago");
heroi2.atacar();

const heroi3 = new Hero("Ang", 125, "Monge");
heroi3.atacar();

const heroi4 = new Hero("Snoop", 32, "ninja");
heroi4.atacar();