type TPetType = "dog" | "cat" | "fish";

type TPet = {
  type: TPetType;
  image: string;
  name: string;
  color: string;
  sex: "Masculino" | "Feminino";
};

const data: Array<TPet> = [
  {
    type: "dog",
    image: "viraLata.jpg",
    name: "vira Lata",
    color: "Caramelo",
    sex: "Masculino",
  },
  {
    type: "dog",
    image: "foxPaulistinha.jpg",
    name: "Fox Paulistinha",
    color: "Branco e Cinza",
    sex: "Masculino",
  },
  {
    type: "dog",
    image: "pastorAlemao.jpg",
    name: "Pastor Alemão",
    color: "Amarelo e Preto",
    sex: "Masculino",
  },
  {
    type: "dog",
    image: "pastorBelga.jpg",
    name: "Pator Belga",
    color: "Preto",
    sex: "Masculino",
  },
  {
    type: "dog",
    image: "pitBull.jpg",
    name: "Pit Bull",
    color: "Marron",
    sex: "Masculino",
  },
  {
    type: "dog",
    image: "rottweiler.jpg",
    name: "Rottweiller",
    color: "Preto e Marron",
    sex: "Masculino",
  },
  {
    type: "dog",
    image: "schnauzer.jpg",
    name: "Schnauzer",
    color: "Branco e Cinza",
    sex: "Masculino",
  },
  {
    type: "dog",
    image: "fila.jpg",
    name: "Fila",
    color: "Branco e Amarelo",
    sex: "Masculino",
  },

  {
    type: "dog",
    image: "labrador.jpg",
    name: "Labrador Retriever",
    color: "Branco",
    sex: "Masculino",
  },
  {
    type: "dog",
    image: "bichonFrise.jpg",
    name: "Bichon Frise",
    color: "Branco",
    sex: "Masculino",
  },
  {
    type: "dog",
    image: "zwergspitz.jpg",
    name: "Zwergspitz",
    color: "Amarelo",
    sex: "Feminino",
  },
  {
    type: "dog",
    image: "husky.jpg",
    name: "Husky Siberiano",
    color: "Branco e Preto",
    sex: "Masculino",
  },
  {
    type: "dog",
    image: "golden.jpg",
    name: "Golden Retriever",
    color: "Amarelo",
    sex: "Masculino",
  },
  {
    type: "dog",
    image: "poodle.jpg",
    name: "Poodle",
    color: "Branco",
    sex: "Feminino",
  },
  {
    type: "dog",
    image: "bulldog.jpg",
    name: "Bulldog",
    color: "Branco e Amarelo",
    sex: "Masculino",
  },
  {
    type: "cat",
    image: "persa.jpg",
    name: "Persa",
    color: "Amarelo",
    sex: "Masculino",
  },
  {
    type: "cat",
    image: "mainecoon.jpg",
    name: "Maine Coon",
    color: "Preto e Branco",
    sex: "Masculino",
  },
  {
    type: "cat",
    image: "bengal.jpg",
    name: "Bengal",
    color: "Branco, Preto e Amarelo",
    sex: "Feminino",
  },
  {
    type: "cat",
    image: "siames.jpg",
    name: "Siamês",
    color: "Amarelo e Preto",
    sex: "Masculino",
  },
  {
    type: "cat",
    image: "sphynx.jpg",
    name: "Sphynx",
    color: "Branco",
    sex: "Masculino",
  },
  {
    type: "fish",
    image: "neon.jpg",
    name: "Tetra Neon",
    color: "Vermelho e Azul",
    sex: "Masculino",
  },
  {
    type: "fish",
    image: "matoGrosso.jpg",
    name: "Mato Grosso",
    color: "Laranja",
    sex: "Masculino",
  },
  {
    type: "fish",
    image: "limpaVidro.jpg",
    name: "Limpa Vidro",
    color: "Verde e Branco",
    sex: "Masculino",
  },
  {
    type: "fish",
    image: "tanictis.jpg",
    name: "Tanictis",
    color: "Vermelho",
    sex: "Masculino",
  },
  {
    type: "fish",
    image: "acara.jpg",
    name: "Acará Bandeira",
    color: "Preto",
    sex: "Masculino",
  },
];

class Pet {
  getAll = (): Array<TPet> => {
    return data;
  };

  getFromType = (type: TPetType): Array<TPet> => {
    return data.filter((item) => item.type === type);
  };

  getFromName = (name: string): Array<TPet> => {
    return data.filter(
      (item) => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    );
  };
}

export default new Pet();
