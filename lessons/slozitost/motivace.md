## Modelový problém

Když vymyšlíme algoritmus pro řešení nějakého problému, to nejdůležitější, co nás většinou zajímá, je jak rychle tento algoritmus dokáže pracovat. Odborně tomu, jak rychle algoritmus pracuje, říkáme ::term{cs="časová složitost" en="time complexity"}. Pro ilustraci toho, jak nad časovou složitostí algoritmů přemýšlíme, si rozebereme možná řešení domácího úkolu z minulé lekce o cenách akcií na burze.

### Pohyb cen akcií

Zadání domácího úkolu ukazovalo na tři možná řešení:

- nejpřímočařejší řešení problému využívá tři do sebe zanořené cykly,
- chytřejší řešení využívá pouze dva do sebe zanořené cykly,
- nejchytřejší řešení využívá pouze jeden cyklus.

Přestože jsme ještě detailně o časové složitosti algoritmů nemluvili, intuitivně asi tušíte, že algoritmus procházející pole jedním cyklem bude rychlejší než algoritmus procházející pole třemi vnořenými cykly.

Kdybychom chtěli rychlost algoritmu nějak kvantifikovat, to nejjednodušší, co můžeme udělat, je prostě stopnout, jak dlouho algoritmus běží pro nějakou velikost vstupu. 

### Měření času

Následující graf ukazuje, jak dlouho zabralo jednotlivým algoritmům spočítat výsledek v závislosti na velikosti vstupu. Měření probíhalo tak, že pro každou velikost vstupu _n_ jsme vygenerovali 100 náhoných polí délky _n_ a změřili průměrný čas, který algoritmus potřeboval k výpočtu výsledku pro jedno pole.

Pro pole délky 100 byl průměrný čas výpočtu následující:

- pro algoritmus s třemi cykly: 16 141 µs, (takto vysoká hodnota se do grafu už nevešla),
- pro algoritmus s dvěma cykly: 1 285 µs,
- pro algoritmus s jedním cyklem: 232 µs.

Kdybychom se podívali pouze na tyto poslední hodnoty, mohly bychom si říct, že

- algoritmus se dvěma cykly je cca 13× rychlější než algoritmus s třemi cykly,
- algoritmus s jedním cyklem je cca 6× rychlejší než algoritmus s dvěma cykly.

Takového měření rychlosti ovšem nedává moc smysl, a to z mnoha důvodů, které probereme v následující sekci.

