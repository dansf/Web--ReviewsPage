class Pessoa {
	constructor(img, nome, cargo, descricao) {
		this.img = img;
		this.nome = nome;
		this.cargo = cargo;
		this.decricao = descricao;
	}
}

const listaPessoas = [];

const pessoaUm = new Pessoa(),
	pessoaDois = new Pessoa(),
	pessoaTres = new Pessoa(),
	pessoaQuatro = new Pessoa();

const imgTag = document.querySelector(".main__img"),
	nameTag = document.querySelector(".main__review-person__name"),
	cargoTag = document.querySelector(".main__review-person__job"),
	descTag = document.querySelector(".main__review-person__text");

	window.onload = () => {
		imgTag.classList.add("fade");
		nameTag.classList.add("fade");
		cargoTag.classList.add("fade");
		descTag.classList.add("fade");
	};

const adicionarPessoas = (pessoa, img, nome, cargo, descricao) => {
	pessoa.img = img;
	pessoa.nome = nome;
	pessoa.cargo = cargo;
	pessoa.descricao = descricao;
	listaPessoas.push(pessoa);
};

adicionarPessoas(
	pessoaUm,
	"../assets/1.jpg",
	"Susan Smith",
	"WEB DEVELOPER",
	"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
);

adicionarPessoas(
	pessoaDois,
	"../assets/2.jpg",
	"Anna Jhonson",
	"WEB DESIGNER",
	"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
);

adicionarPessoas(
	pessoaTres,
	"../assets/3.jpg",
	"Peter Jones",
	"INTERN",
	"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
);

adicionarPessoas(
	pessoaQuatro,
	"../assets/4.jpg",
	"Bill Anderson",
	"THE BOSS",
	"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
);

let index = 0,
	flag = false;

let flagLeft = () => (flag = true);
let flagRight = () => (flag = false);

const sendInfo = () => {
	if (flag) {
		imgTag.scr = listaPessoas[index].img;
		nameTag.innerHTML = listaPessoas[index].nome;
		cargoTag.innerHTML = listaPessoas[index].cargo;
		descTag.innerHTML = listaPessoas[index].descricao;

		index = index - 1;
	} else {
		imgTag.src = listaPessoas[index].img;
		nameTag.innerHTML = listaPessoas[index].nome;
		cargoTag.innerHTML = listaPessoas[index].cargo;
		descTag.innerHTML = listaPessoas[index].descricao;

		descTag.classList.add("fade");

		index++;
	}

	if (index == 4) index = 0;
	else if (index < 0) index = 3;
};

buttonLeft = document
	.querySelector(".ri-arrow-left-s-line")
	.addEventListener("click", () => {
		flagLeft();
		sendInfo();
	});

buttonRight = document
	.querySelector(".ri-arrow-right-s-line")
	.addEventListener("click", () => {
		flagRight();
		sendInfo();
	});
