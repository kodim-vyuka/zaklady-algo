## Časová složitost

Dlouho jsme si pomocí příkladů s úsporami připravovali půdu pro to, abychom v konečně mohli začít mluvit o časové složitosti algoritmů. Jak už je naším zvykem, začneme s jednoduchým příkladem a uvidíme, jak všechno najednou zapadne do sebe.

### Příklad

Mějme algoritmus, který spočítá součet všech prvků v poli a zároveň bude pro kontrolu vypisovat částečné součty. Algoritmus bude vypadat následovně:

```
func sum(array)     // +1
  sum = 0           // +1
  for num in array  // +1
    sum = sum + num // +1
    print(sum)      // +1
  endfor
  return sum        // +1
endfunc
```




```
func count(array, item)  // +1
  count = 0              // +1
  for num in array       // +1
    if num == item       // +1
      count = count + 1  // +1
    endif
  endfor
  return count           // +1
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

My se proto budeme zajímat spíš o to, jak rychle počet kroků roste, když se zvětšuje velikost vstupu. To nám napoví, pro jak velké vstupy bude algoritmus použitelný a kdy už bude příliš pomalý.

Takto například roste počet kroků pro náš algoritmus pro různé velikosti vstupu:

| $n$     | Počet kroků |
| ------- | ----------- |
| 1       | 8           |
| 10      | 53          |
| 100     | 503         |
| 1000    | 5003        |
| 10 000  | 50 003      |
| 100 000 | 500 003     |

Všimněte si, že když je vstup dostatečně velký, je už docela jedno, jestli algoritmus udělá $5n + 3$ nebo $5n + 10$ nebo třeba $5n + 100$ kroků. Hodnota $5n$ pro dostatečně velké $n$ vždycky přeroste jakékoliv číslo, které k ní přičteme. Můžeme tedy říct, že hodnota $5n + 3$ „roste tak nějak stejně rychle“ jako $5n$.

Můžeme to anekdoticky přirovnat k tomu, že když náš vysněný dům stojí 5 000 000 Kč, je už docela fuk, jestli stojí 5 000 003 Kč nebo 5 000 100 Kč. Rozdíl je jenom pár korun a v porovnání s celkovou cenou domu je to zanedbatelné.

Nyní se vás ale budu snažit přesvědčit, že je celkem jedno i to, jestli algoritmus udělá $5n$, $10n$ nebo třeba $100n$ kroků. To už vzhledem k naší anekdotě s domem působí dost podezřele. Určitě nám nebude jedno, jestli dům stojí 5 000 000 Kč, 10 000 000 Kč nebo dokonce zabijáckých 100 000 000 Kč.

Později v lekci však uvidíme, že počet kroků mnoha jiných algoritmů roste tak rychle, že je opravdu jedno, jakým číslem vynásobíme $n$. Proto můžeme s klidem říct, že hodnota $5n + 3$ „roste tak nějak stejně rychle“ jako $n$.

Věty jako „roste tak nějak stejně rychle“ jsou takové mávání kouzelnou hůlkou. Matematici mají pro tento princip speciální formální značení. Když chceme sdělit, že výraz $5n + 3$ roste tak rychle jako $n$, řekneme, že $5n + 3$ patří do $\mathcal{O}(n)$. Tento symbol čteme „ó en“. Říkáme pak, že náš algoritmus má časovou složitost $\mathcal{O}(n)$.

Časová složitost $\mathcal{O}(n)$ znamená, že:

- počet kroků algoritmu je úměrný velikosti vstupu,
- algoritmus se chová stejně jako jeden cyklus přes všechny prvky vstupu.

Má-li algoritmus časovou složitost $\mathcal{O}(n)$, říkáme také, že má lineární časovou složitost.
