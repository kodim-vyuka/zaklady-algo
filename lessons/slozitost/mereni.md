## Měření času

V předchozí sekci jsme měřili rychlost algoritmu tak, že jsem stopli, jak dlouho program běží pro nějakou velikost vstupu. Tento způsob měření rychlosti není ovšem vůbec praktický.

Všimněte si, jak jsou měření chaotická. Na grafu vidíme různé podivné výkyvy a náhodné změny. Toto má několik důvodů:

- **Náš program není to jediné, co na počítači běží** - na počítači běží na pozadí mnoho dalších programů a procesů, které v různých intervalech žádají o výkon procesoru. Nějaký jiný program nebo přímo operační systém tak může v různých okamžicích běh našeho programu zpomalit.

I kdybychom náš program dokonale izolovali, stejně narazíme na další problémy:

- **Různé počítače jsou různě rychlé** - rychlost počítače závisí na mnoha faktorech, jako je rychlost procesoru, rychlost paměti, rychlost disku, ale i na tom, jak je počítač zatížený a jak je nastavený. Proto náš algoritmus může běžet na různých počítačích různě dlouho.
- **Různé programovací jazyky jsou různě rychlé** - rychlost programovacího jazyka také ovlivňujě mnoho věci, jako je rychlost virtuálního stroje, jak je jazyk optimalizovaný pro daný problém nebo zda se překládá do strojového kódu nebo interpretuje. Náš algoritmus tak může běžet v různých jazycích různě rychle.

My bychom se chtěli od těchto technických detailů odstínit a měřit přímo rychlost algoritmů, nikoliv programů. Algoritmus je totiž zcela nezávislý na tom, v jakém jazyce je napsaný nebo na tom, na jakém počítači běží. Je to pouze detailně popsaný postup, jak řešit nějaký problém. 
