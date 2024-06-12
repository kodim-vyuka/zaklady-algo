## Rychlost růstu

V předchozí sekci jsme měřili rychlost algoritmu tak, že jsem stopli, jak dlouho běží jeho implementace, tedy jak dlouho běží spuštěný program. Viděli jsme, že takovéto měření rychlosti není moc praktické. 

Místo toho bychom chtěli umět odhadnout, kolik kroků udělá algoritmus pro různé velikosti vstupu, aniž bychom ho museli programovat a spouštět na počítači. Tomu, jak dlouho algoritmus běží v závislosti na velikosti vstupu, říkáme odborně :term{cs="časová složitost" en="time complexity"}.

Abychom se mohli bavit o časové složitosti, nejdříve je třeba poruzmět tomu, co to je takzvaný _lineární růst_ a _kvadratický růst_. Pro ilustraci a lepší pochopení máme přepravený ilustrační příklad.

## Spoření a lineární růst

Představte si, že ze svého výdělku v práci si dokážete každý měsíc odložit 2 tisíce korun. Tuto částku si každý měsíc pošlete na svůj bezúročný spořící účet. Na začátku máte na spořícím účtu 50 tisíc korun. Pokud si takto budede odkládat pravidelně každý měsíc po jeden rok, budou vaše úspory na účtu růst takto:

| Měsíc  | Vklad    | Úspory   |
| ------ | ---------| -------- |
| 1      | 2 tisíce | 52 tisíc |
| 2      | 2 tisíce | 54 tisíc |
| 3      | 2 tisíce | 56 tisíc |
| 4      | 2 tisíce | 58 tisíc |
| 5      | 2 tisíce | 60 tisíc |
| 6      | 2 tisíce | 62 tisíc |
| 7      | 2 tisíce | 64 tisíc |
| 8      | 2 tisíce | 66 tisíc |
| 9      | 2 tisíce | 68 tisíc |
| 10     | 2 tisíce | 70 tisíc |
| 11     | 2 tisíce | 72 tisíc |
| 12     | 2 tisíce | 74 tisíc |

Bez úroků se tak vaše úspory zvětšují každý měsíc vždy o stejnou částku. Je jedno, zda je zrovna prvni nebo desátý měsíc, vždy na účet vložíme 2 tisíce korun. Když se nějaká veličina nemění a zůstává pořád stejná, matematici říkají, že je takzvaně _konstantní_. Odborně tedy řekneme, že měsíční vklad na váš spořící je konstantní.

Pokud nějaká veličina roste v každém kroku a konstantní, tedy pořád stejnou hodnotu, říkáme, že veličina roste _lineárně_. Celkové úspory na vašem spořícím účtu tedy rostou lineárně.

Slovo „lineární“ pochází z latinského _linea_, což znamená „přímka“. Pokud se na lineární růst podíváme graficky, zjistíme, že hodnoty našich úspor budou tvořit přímku.

::fig{scr=linearni-uspory.png}

## Kvadratický růst

Možná si řeknete, že ušetřit každý měsíc 2 tisíce korun je pěkné, ale je to trochu málo. Vydáte se tedy za svým šéfem s žádostí o zvýšení platu. Šéf vám ale řekne, že na jednorázové zvýšení platu nemá teď firma peníze. Nabídne vám však, že vám po dobu jednoho roku každý měsíc zvýší plat o tisíc korun. 

První měsíc se vám plat zvýší o tisíc korun, takže ušetříte 3 tisíce. Druhý měsíc už ušetříte 4 tisíce, třetí měsíc 5 tisíc a tak dále. Vaše úspory budou pak růst takto:

| Měsíc  | Vklad    | Úspory   |
| ------ | ---------| -------- |
| 1      | 3 tisíce | 53 tisíc |
| 2      | 4 tisíce | 57 tisíc |
| 3      | 5 tisíc  | 62 tisíc |
| 4      | 6 tisíc  | 68 tisíc |
| 5      | 7 tisíc  | 75 tisíc |
| 6      | 8 tisíc  | 83 tisíc |
| 7      | 9 tisíc  | 92 tisíc |
| 8      | 10 tisíc | 102 tisíc |
| 9      | 11 tisíc | 113 tisíc |
| 10     | 12 tisíc | 125 tisíc |
| 11     | 13 tisíc | 138 tisíc |
| 12     | 14 tisíc | 152 tisíc |

Všimněte si, že tentokrát náš vklad na spořící účet roste podle toho, jaký je zrovna měsíc. Dokonce si můžeme všimnout, že vklad roste lineárně. Každý měsíc je vklad vyšší o 1 tisíc korun.

Pokud nějaká veličina roste v každém kroku o hodnotu, a tato hodnota sama roste lineárně, říkáme, že tato naše veličina roste _kvadraticky_. Naše vklady rostou lineárně a proto naše celkové úspory rostou kvadraticky. 



