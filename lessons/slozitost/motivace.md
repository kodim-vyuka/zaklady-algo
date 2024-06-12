## Motivace

Když vymýšlíme algoritmus pro řešení nějakého problému, to nejdůležitější, co nás většinou zajímá, je, jak rychle tento algoritmus dokáže pracovat. Než se ale pustíme do určování rychlosti algoritmů, musíme dobře pochopit rozdíl mezi algoritmem a programem.

**Algoritmus** je obecný postup, jak řešit nějaký problém. Algoritmus je vždy nezávislý na konkrétním programovacím jazyce nebo na konkrétním počítači. Průběh algoritmu většinou popisujeme slovy a větami, nejlépe tak přesně, aby bylo jasné, jakým způsobem se pak algoritmus dá implementovat.

**Program** je konkrétní implementace nějakého algoritmu v nějakém programovacím jazyce. Program je tedy už konkrétní zdrojový kód, který můžeme spustit nebo zkompilovat.

## Měření rychlosti programů

Pokud chceme změřit rychlost nějakého **programu**, stačí nám jednoduše stopnout, jak dlouho program běží pro nějakou velikost vstupu. Dostaneme tak čas měření v nějakých jednotkách, například

- v sekundách, jednotka _s_,
- v milisekundách (tisícinách sekundy), jednotka _ms_,
- v mikrosekundách (miliontinách sekundy), jednotka _µs_ nebo dokonce
- v nanosekundách (miliardtinách sekundy), jednotka _ns_.

Pojdme si vzít na pomoc program, který počítá největší možný zisk z historických dat na burze. Zadání tohoto domácího úkolu ukazovalo na tři možná řešení:

- nejpřímočařejší řešení problému využívá tři do sebe zanořené cykly,
- chytřejší řešení využívá pouze dva do sebe zanořené cykly,
- nejchytřejší řešení využívá pouze jeden cyklus.

Následující graf ukazuje, jak dlouho zabralo jednotlivým algoritmům spočítat výsledek v závislosti na velikosti vstupu. Měření probíhalo tak, že pro každou velikost vstupu $n$ jsme vygenerovali 100 náhodných polí délky $n$ a změřili průměrný čas, který algoritmus potřeboval k výpočtu výsledku pro jedno pole.

Pro pole délky 100 byl průměrný čas výpočtu následující:

- pro algoritmus s jedním cyklem: 232 µs.
- pro algoritmus s dvěma cykly: 1 285 µs,
- pro algoritmus s třemi cykly: 16 141 µs, (takto vysoká hodnota se do grafu už ani nevešla),

Takového měření rychlosti nám dává nějaký základní přehled o tom, jak rychle jednotlivé algoritmy pracují. Zároveň je to však postup extrémně nepřesný a závíšlý na mnoha okolnostech.

### Proč je měření rychlosti programů nepřesné

Všimněte si, jak jsou měření v grafu chaotická. V datech vidíme různé podivné výkyvy a náhodné odchylky. Toto má několik důvodů:

- **Náš program není to jediné, co na počítači běží** - na počítači běží na pozadí mnoho dalších programů a procesů, které v různých intervalech žádají o výkon procesoru. Nějaký jiný program nebo přímo operační systém tak může v různých okamžicích běh našeho programu zpomalit a zkreslit tak naše měření.
- **Různé počítače jsou různě rychlé** - měření času závisí na rychlosti počítače. Tu ovlivňuje mnoho faktorů, jako je rychlost procesoru, rychlost pamětí nebo internetu, ale i to, jak je počítač aktuálně zatížený a jak je nastavený. Proto náš program bude běžet na různých počítačích různě dlouho.
- **Různé programovací jazyky jsou různě rychlé** - rychlost programovacího jazyka také ovlivňujě mnoho věci, jako je rychlost virtuálního stroje, jak je jazyk optimalizovaný pro daný problém nebo zda se překládá do strojového kódu nebo interpretuje. Program tak bude běžet v různých jazycích různě rychle.

Pokud tedy změříme, že náš program zpracoval vstup o délce 100 položek za 1 285 mikrosekund, znamená to, že toto číslo platí pro náš konkrétní počítač, operační systém, programovací jazyk, denní dobu, aktuální náladu božstev a konstelaci Jupitera proti Saturnu.
