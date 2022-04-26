class Pessoa {
	constructor(nome, cargo, descricao) {
		this.nome = nome;
		this.cargo = cargo;
		this.decricao = descricao;
	}
}

const listaPessoas = new Array(Pessoa);

let pessoaUm = new Pessoa();
let pessoaDois = new Pessoa();
let pessoaTres = new Pessoa();
let pessoaQuatro = new Pessoa();

const adicionarPessoas = (pessoa, nome, cargo, descricao) => {
	pessoa.nome = nome;
	pessoa.cargo = cargo;
	pessoa.descricao = descricao;
	listaPessoas.push(pessoa);
};

adicionarPessoas(
	pessoaUm,
	"Susan Smith",
	"WEB DEVELOPER",
	"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
);

adicionarPessoas(
	pessoaDois,
	"Anna Jhonson",
	"WEB DESIGNER",
	"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
);

adicionarPessoas(
	pessoaTres,
	"Peter Jones",
	"INTERN",
	"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
);

adicionarPessoas(
	pessoaQuatro,
	"Bill Anderson",
	"THE BOSS",
	"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
);

const sendInfo = () => {
	let nameTag = document.querySelector(".main__review-person__name"),
			cargoTag = document.querySelector(".main__review-person__job"),
			descTag = document.querySelector(".main__review-person__text");
	
	nameTag.innerHTML = listaPessoas[0].nome;
	cargoTag.innerHTML = listaPessoas[0].cargo;
	descTag.innerHTML = listaPessoas[0].descricao;
}

sendInfo();