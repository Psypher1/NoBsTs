function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let value: T = initial;
  return [
    () => value,
    (v: T) => {
      value = v;
    },
  ];
}

const [st1getter, st1setter] = simpleState(10);

console.log(st1getter());
st1setter(20);
console.log(st1getter());

// Overriding inferred generic
const [st2getter, st2setter] = simpleState<string | null>(null);
console.log(st2getter());
st2setter("str");
console.log(st2getter());

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Digimon {
  name: string;
  hp: number;
}

const digimon: Digimon[] = [
  {
    name: "greymon",
    hp: 23,
  },
  {
    name: "lobomon",
    hp: 33,
  },
  {
    name: "agunimon",
    hp: 45,
  },
  {
    name: "duskmon",
    hp: 25,
  },
];

const ranks = ranker(digimon, ({ hp }) => hp);
console.log(ranks);
