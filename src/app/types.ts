export type TyradexPokemon = {
  pokedexId: number;
  name : {
    fr: string;
    en: string;
    jp: string;
  },
  types: [
    {
      name: string;
      image: string;
    }
  ];
  category: string;
  height?: number;
  weight?: number;
  stats: {
    hp: number;
    atk: number;
    def: number;
    spe_atk: number;
    spe_def: number;
    vit: number;
  },
  resistances: [
    {
      name: string;
      multiplier: number;
    }
  ],
  egg_groups: string[];
  sexe: {
    male: number;
    female: number;
  },
  talents: [
    {
      name: string;
      tc: boolean;
    }
  ]
};

export type PokeBuildPokemon = {
  id: number;
  pokedexId: number;
  name: string;
  image: string;
  stats: {
    HP: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
  apiTypes: type[];
  apiGeneration: number;
}

type type = {
  name: string;
  image: string;
}
