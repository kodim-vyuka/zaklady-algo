## Datové struktury

Do této chvíle jsme se v tomto kurzu bavili hlavně o algoritmech, tedy o postupech, jak řešit určitý problém. Součástí fungování algoritmu je však velmi často také práce s daty. Naším cílem je vždy, aby algoritmus věžel co nejrychleji a proto se snažíme i s daty pracovat co nejefektivněji.

Data máme vždy uložena v nějaké struktuře, nad kterou pak provádíme různé operace. Pro příklad si vezměme nejběžnější datovou strukturu, se kteoru jsme již hojně pracovali, a to pole.

Pole je struktura, která umožňuje ukládat více prvků stejného typu za sebou. Prvky v poli jsou indexovány od nuly a můžeme k nim přistupovat pomocí indexu.

Operace, které nad polem většinou chceme provádět, jsou:

- **Přístup k prvku** - získání hodnoty prvku na daném indexu - READ,
- **Zápis do pole** - změna hodnoty prvku na daném indexu - WRITE,
- **Vložení prvku** - vložení nového prvku do pole - INSERT,
- **Odstranění prvku** - odstranění prvku z pole - DELETE,
- **Vyhledání prvku** - nalezení prvku s danou hodnotou - SEARCH.

Máme-li pole o délce $n$, ptáme se, jakou časovou složitost má každá z těchto operací.

### Přístup a zápis do pole

Přístup k prvku a zápis do pole má časovou složitost $\mathcal{O}(1)$. Pro získání nebo přepsání hodnoty nám stačí znát její index a můžeme k němu na jeden krok přistoupit.

### Vložení a odstranění prvku

Vložení nebo odstranění prvku z pole je složitější. Některé jazyky, například Python, JavaScript a další, se znaží tvářit, že vložení a odstranění prvku je jednokroková operace. Často máme k dispozici metody `insert` a `delete` nebo nějaké jejich ekvivalenty, které nám umožňují vložit nebo odstranit prvek na daném indexu.

Z hlediska práce s pamětí počítače však takovou operaci nelze udělat v konstantním čase. Při vložení nebo odstranění prvku musíme totiž přesunout všechny prvky, které jsou za ním o jednu pozici. Pokud tedy chceme v nejhorším případě vložit nebo smazat prvek na první pozici, musíme přesunout všechny prvky v poli o jednu pozici. Časová složitost vložení nebo odstranění prvku je tedy $\mathcal{O}(n)$.

### Vyhledání prvku

S vyhledáním prvku v poli je to podobné jako s vložením nebo mazáním. Abychom našli prvek s danou hodnotou, musíme projít všechny prvky pole a porovnat je s hledanou hodnotou. Časová složitost vyhledání prvku je tedy také $\mathcal{O}(n)$.

## Shrnutí

Z výše zmíněného plyne, že většina důležitých operací na poli má složitost $\mathcal{O}(n)$. To je pro spoustu aplikací příliš pomalé a v dalších lekcích si ukážeme zajímavější struktury, které tyto operace umí dělat výrazně rychleji.
