---
title: Burza
lead: Implementujte algoritmus, který zjistí největší možný zisk z obchodování s akciemi.
demand: 3
solutionAccess: protected
---

Investoři na burze s akciemi obchodují tak, že sledují vývoj ceny nějaké akcie a snaží se ve správnou dobu nakoupit a poté prodat, aby dosáhli co největšího zisku. 

Jednoduchý příklad vývoje ceny nějaké fiktivní akcie vidíte na násldujícím grafu:

::fig{src=assets/burza.png}

Obrázek ukazuje vývoj ceny během 14 dní od 1. července do 14. července. Cena za jednu akcii byla v pondělí 1. července přesně 100 Kč. Náledující den v úterý cena vzrostla na 105 Kč, ve středu klesla na 103 Kč a tak dále. Kdyby tedy investor nakoupil akcie v pondělí a prodal je ve středu, dosáhl by zisku 3 Kč na jedné akcii.

Vaším úkolem je přijít na to, kdy by bylo nejvýhodnější nakoupit a poté prodat akcie tak, aby investor dosáhl co největšího možného zisku. 

### Formulace problému

Pojďme náš problém formulovat jako zadání pro nějaký program. Na vstupu máme pole jednotlivých přírůstků ceny pro každý den. Pro náš graf uvedený výše vypadá vtup takto:

```js
const prices = [-1, 5, -2, -6, 2, -1, 4, 1, -7, 1, -1, 2, -3, 4];
```

Napište funkci `maxProfit(prices)`, která najde takovou souvislou část pole `prices`, kde součet všech čísel v této části je nejvyšší možný. 

Souvislá část pole s největším součtem v našem příkladu sahá od indexu 4 do indexu 7 (tj. `[2, -1, 4, 1]`) a součet těchto čísel je 6. Funkce `maxProfit` by tedy měla vrátit 6.

- Dejte pozor na to, že souvislá část pole může mít i délku 1, tedy že se jedná pouze o jedno jediné číslo.
- Nejpřímočařejší řešení tohoto problému využivá **tři** do sebe zanořené cykly. 
- Pokud jste vymysleli řešení pomocí tří vnořených cyklů a jste všemi mastmí mazaní, můžete tento problém zkusít vyřešit pomocí tří cyklů, z nichž jsou do sebe však zanořené **pouze dva**. Takový algoritmus bude určitě rychlejší.
- Pokud jste vymysleli řešení pomocí dvou cyklů, gratuluji, jste opravdu šikovní. Vězte však, že tento problém lze vyřešit i pomocí jednoho cyklu, tedy na jeden průchod pole. Takové řešení je však brutálně chytré a vyžaduje velké zkušenosti s návrhem algoritmů. Ukážeme si ho v následující lekci.

### Odevzdání

Jako řešení úkolu odezvdejte 

- **za jeden bod** - zdrojový kód funkce `maxProfit(prices)`
- **za jeden extra bod** - řešení úkolu pomocí tří cyklů, z nichž jsou dva do sebe zanořené
