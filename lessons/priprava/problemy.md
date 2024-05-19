## Typické problémy při procházení pole

Procházením pole pomocí cyklu můžeme řešit mnoho různých typů problémů. Většina z nich se dá rozdělit do několika kategorií:

1. **Prohledávání** - hledání prvku s určitou vlastností nebo hodnotou.
2. **Filtrování** - vytvoření nového pole, které obsahuje jen některé prvky z původního pole. Můžeme například vytvořit pole jen s lichými čísly, jen s prvky většími než 10 atd.
3. **Transformace** - nějakým způsobem změníme každý prvek v poli. Můžeme například vynásobit každý prvek 2, přidat k němu 1 atd.
4. **Agregace** - spočítáme nějaký výsledek, která vychází ze všech prvků v poli. Můžeme například spočítat součet, průměr, největší prvek atd.
5. **Testování** - zjistíme, zda platí nějaké tvrzení o celé poli. Například zda jsou všechny prvky větší než 0, zda jsou všechny prvky různé, nebo třeba zda pole obsahuje alespoň jeden prvek větší než 10.

Toto určitě není kompletní výčet. V praxi narážíme na různé varianty a kombinace těchto postupů. Výše uvedené kategorie nám ale mohou pomoct se lépe orientovat v nějakém problému a lépe formulovat popis jeho řešení.

## Příklady jednoduchých problémů

Pojďme si pro každou kategorii vyzkoušet jednoduchý příklad. Pro každý problém si nejprve popíšeme, co chceme udělat, a pak se pokusíme napsat kód, který tento problém řeší.

### Prohledávání

**Zadání:** Máme pole řetězců a chceme najít první řetězec, který je prázdný.

**Řešení:** Projdeme pole pomocí cyklu a na každém prvku zkontrolujeme, zda je prázdný. Vrátíme index prvního prázdného řetězce nebo `null`, pokud v poli žádný není.

```js
const findEmptyString = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '') {
      return i;
    }
  }
  return null;
}
```

### Filtrování

**Zadání:** Máme pole čísel a chceme vytvořit nové pole, které bude obsahovat jen čísla větší než 0.

**Řešení:** Projdeme pole pomocí cyklu a na každém prvku zkontrolujeme, zda je větší než 0. Pokud ano, přidáme ho do nového pole.

```js
const filterPositiveNumbers = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      result.push(array[i]);
    }
  }
  return result;
}
```

### Transformace

**Zadání:** Máme pole objektů představující uživatele a chceme vytvořit pole, které bude obsahovat jen jejich jména.

**Řešení:** Projdeme pole pomocí cyklu a pro každý objekt přidáme do nového pole jeho jméno.

```js
const extractNames = (users) => {
  const result = [];
  for (let i = 0; i < users.length; i++) {
    result.push(users[i].name);
  }
  return result;
}
```

### Agregace

**Zadání:** Máme pole čísel a chceme spočítat jejich průměr.

**Řešení:** Projdeme pole pomocí cyklu a sečteme všechna čísla. Na konci vydělíme součet počtem prvků.

```js
const average = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
```

### Testování

**Zadání:** Máme pole řetězců a chceme zjistit, zda některý z nich obsahuje slovo "JavaScript".

**Řešení:** Projdeme pole pomocí cyklu a na každém prvku zkontrolujeme, zda obsahuje hledaný řetězec. Pokud ano, vrátíme `true`. Pokud žádný prvek neobsahuje hledaný řetězec, vrátíme `false`.

```js
const containsJavaScript = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes('JavaScript')) {
      return true;
    }
  }
  return false;
}
```

## Kombinace postupů

Všechny tyto příklady byly záměrně jednoduché, aby bylo snadné pochopit, jak se dají různé problémy řešit pomocí cyklu. V praxi se budeme setkávat s problémy složitějšími, které budou kombinovat různé postupy, nebo budou vyžadovat zamyslet se nějakým jiným směrem, než máme vyzkoušené.

Zkusme proto na závěr nějaký problém, který bude kombinovat několik postupů najednou.

**Zadání:** Máme pole objektů představující uživatele a chceme spočítat průměrný věk těch uživatelů, kteří mají alespoň 18 let.

**Řešení:** Projdeme pole pomocí cyklu a pro každého uživatele zkontrolujeme, zda je starší než 18 let. Pokud ano, přidáme jeho věk do celového součtu a zároveň zvýšíme počitadlo dospělých uživatelů. Na konci vydělíme součet věků počtem dospělých uživatelů.

```js
const averageAdultAge = (users) => {
  let sum = 0;
  let adultCount = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
      sum += users[i].age;
      adultCount++;
    }
  }
  return sum / adultCount;
}
```
