## Vnořené cykly a pole

V minulé lekce jsme se věnovali problémům, ve kterých děláme jeden prochůd polem pomocí jednoho cyklu. U náročnějších problémů však potřebujeme dvě i více cyklů v sobě. Uvažte následující zadání:

Máme pole čísel a chceme najít všechna unikátní čísla, tedy taková, která se v poli vyskytují pouze jednou. Například pro vstup `[1, 2, 3, 2, 1, 4]` by výsledkem mělo být pole `[3, 4]`.

Tuto úlohu můžeme vyřešit velmi přímočarým způsobem pomocí dvou cyklů. První cyklus bude procházet všechna čísla v poli a pro každé jedno číslo pole budeme hledat, zda se v poli vyskytuje vícekrát.

```js
const findAllUniques = (numbers) => {
  const uniqueNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    let isUnique = true;
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j && numbers[i] === numbers[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      uniqueNumbers.push(numbers[i]);
    }
  }
  return uniqueNumbers;
};
```

Zkušenější z vás by mohlo napadnout, že by se tento algoritmus dal různými způsoby optimalizovat. Rychlostí a efektivností se však budeme zabývat až v další lekci, kde se budeme věnovat časové složitosti algoritmů. Pro tuto chvíli nám náš postup poslouží jako dobrý základ pro pochopení vnořených cyklů.

## Úklid v kódu

Pokud vidíme dva cykly v sobě, jako v příkladu výše, může být docela výzva přebrat si, co se v kódu vlastně děje. Procházet program a udržet při tom v hlavě několik pomocných a řídících proměnných je občas výzva i pro zkušené programátory.

Přemyšlení si můžeme zjednodušit tak, že vnitřní cyklus zabalíme do funkce a dáme jí natolik popsné jméno, aby bylo na první pohled jasné, co se v ní děje. 

V příkladu s hledáním unikátních čísel bychom mohli vytvořit funkci `isUnique`, která jako parametry obdřží pole a index, a řekne nám, zda se číslo na daném indexu v poli vyskytuje pouze jednou.

```js
const isUnique = (numbers, index) => {
  for (let j = 0; j < numbers.length; j++) {
    if (index !== j && numbers[index] === numbers[j]) {
      return false;
    }
  }
  return true;
};
```

Nyní můžeme náš původní kód zpřehlednit takto:

```js
const findAllUniques = (numbers) => {
  const uniqueNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (isUnique(numbers, i)) {
      uniqueNumbers.push(numbers[i]);
    }
  }
  return uniqueNumbers;
};
```

Tím, že jsme vnitřní cyklus schovali do funkce, odlehčili jsme svému mozku. Při čtení kódu se nemusíme starat o to, co se ve funkci `isUnique` děje. Stačí nám, že funkce dělá to, co dělat má. 
