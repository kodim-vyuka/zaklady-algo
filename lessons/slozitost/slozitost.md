## Časová složitost

V předchozí sekci jsme měřili rychlost algoritmu tak, že jsem stopli, jak dlouho běží jeho implementace a viděli jsme, že takovéto měření rychlosti není moc praktické. 

Místo toho bychom chtěli umět odhadnout, jak dlouho bude algoritmus běžet pro různé velikosti vstupu, aniž bychom ho museli programovat a spouštět na počítači. Tomu, jak dlouho algoritmus běží v závislosti na velikosti vstupu, říkáme odborně :term{cs="časová složitost" en="time complexity"}.

Časovou složitost budeme udávat v počtu kroků, které algoritmus provede pro danou velikost vstupu. Zatím to můžeme udělat tak, že každý řádek kódu, který něco reálně dělá, budeme považovat za jeden krok. To je sice hrubé zjednodušení, protože některé řádky kódu mohou být v realitě rychlejší nebo pomalejší, ale později uvidíme, že takový náš je dostatečně dobrý.

### Příklad

Mějme algoritmus, který vezme pole čísel a spočítá jejich rozpětí, tedy rozdíl mezi největším a nejmenším číslem v poli. Pseudokód algoritmu bude vypadat takto:

```
func range(array)
  max = array[0]    // +1
  min = array[0]    // +1
  for num in array  // +1
    if num > max    // +1
      max = num     // +1
    endif
    if num < min    // +1
      min = num     // +1
    endif
  endfor
  return max - min  // +1
endfunc
```

Každý řádek kódu máme označený počtem kroků, které algoritmus provede. Velikost vstupu budeme vždy značit písmenem $n$. V tomto případě bude velikost vstupu délka pole `array`, tedy pro pole délky 100 bude $n = 100$.

Když si spočítáme počet kroků našeho algoritmu, dosteneme

- 2 kroky před začátkem cyklu,
- 5 kroků uvnitř cyklu pro každé číslo v poli,
- 1 krok po skončení cyklu.

Celkový počet kroků je tedy $2 + 5n + 1 = 5n + 3$. Pro pole délky 100 tak bude algoritmus potřebovat $5 \cdot 100 + 3 = 503$ kroků.

## Asymptotická složitost

Počítání každého kroku při běhu algoritmu je zbytečně složité a do velké míry zbytečné. Jak dlouho bude na nějakém počítači a v nějakém programovacím jazyce trvat spuštění 503 kroků se skoro nedá předem odhadnout.

My se proto budeme zajímat spíš o to, jak rychle počet kroků roste, když se zvětšuje velikost vstupu. 

Takto roste počet kroků pro náš algoritmus pro různé velikosti vstupu:

| $n$     | Počet kroků |
| ------- | ----------- |
| 1       | 8           |
| 10      | 53          |
| 100     | 503         |
| 1000    | 5003        |
| 10 000  | 50 003      |
| 100 000 | 500 003     |

Všimněte si, že když je vstup dostatečně velký, je už docela jedno, jestli algoritmus udělá $5n + 3$ nebo $5n + 10$ nebo třeba $5n + 100$ kroků. Hodnota $5n$ pro dostatečně velké $n$ vždycky přeroste jakékoliv číslo, které k ní přičteme. Můžeme tedy říct, že hodnota $5n + 3$ „roste tak nějak stejně rychle“ jako $5n$.

Můžeme to anekdoticky přirovnat k tomu, že když například dům stojí třeba 5 000 000 Kč, je už docela jedno, jestli stojí 5 000 003 Kč nebo 5 000 100 Kč. Rozdíl je jenom pár korun a v porovnání s celkovou cenou domu je to zanedbatelné.

Nyní se vás budu snažit přesvědčit, že je dokonce dost jedno, jestli algoritmus udělá $5n$, $10n$ nebo třeba $100n$ kroků. To už vzhledem k naší anekdotě s domem působí dost podezřele. Určitě nám nebude jedno, jestli dům stojí 5 000 000 Kč, 10 000 000 Kč nebo dokonce brutálních 100 000 000 Kč.

Později v lekci si ukážeme, že počet kroků mnoha jiných algoritmů roste tak rychle, že je opravdu jedno, jakým číslem vynásobíme $n$. Proto můžeme s klidem říct, že hodnota $5n + 3$ „roste tak nějak stejně rychle“ jako $n$.

Matematici mají pro pojem „roste tak nějak stejně rychle“ speciální značení. Říkáme, že výraz $5n + 3$ patří do $\mathcal{O}(n)$. Tento symbol čteme „ó en“. 
