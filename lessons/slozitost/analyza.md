## Analýza časové složitosti

Dlouho jsme si pomocí příkladů s úsporami připravovali půdu pro to, abychom v konečně mohli začít mluvit o časové složitosti algoritmů. Jak už je naším zvykem, začneme s jednoduchým příkladem a uvidíme, jak všechno najednou zapadne do sebe.

U každéo toho algoritmu se budeme snažit spočítat, kolik operací vykoná pro vstup nějaké délky. Délku vstupu budeme vždy značit písmenem $n$. Takže pokud například algorithmus pracuje s polem, bude $n$ počet prvků v poli.

Za jeden krok algoritmu budeme považovat vždy jeden řádek pseudokódu, který něco skužečného vykonává. Například přičítání dvou čísel, porovnání dvou čísel nebo přístup k prvku v poli. 

## Příklad 1: Součet prvků v poli

Mějme pro ilustraci opravdu jednoduchý algoritmus, který spočítá součet všech prvků v poli. Například pro pole

```
[1, 7, 3, 4, 1, 3]
```

očekáváme výsledek 19.

Psuedokód algoritmu zapíšeme následovně. U každého řádku navíc uvedeme, zda jej počítáme jako jeden krok.

```
func sum(array)     // +1
  sum = 0           // +1
  for num in array  // +1
    sum = sum + num // +1
  endfor
  return sum        // +1
endfunc
```

Nyní můžeme vytvořit tabulku udávající kolik kroků bude algoritmus potřebovat pro různé velikosti vstupu.

| $n$     | Počet kroků |
| ------- | ----------- |
| 1       | 5           |
| 2       | 7           |
| 3       | 9           |
| 4       | 11          |
| 5       | 13          |
| 6       | 15          |
| 7       | 17          |
| 8       | 19          |
| 9       | 21          |
| 10      | 23          |

Vidíme, že počet kroků se vždy zvětšuje o dva. Když totiž máme o jeden prvek delší pole na vstupu, hlavní cyklus se mustí otočí o jednu otáčku navíc. Jedna otáčka v tomto případě vždy spotřebuje dva kroky. Ihned tedy můžeme říct, že počet kroků algoritmu roste lineárně s velikostí vstupu. Říkáme pak, že algoritmus má _lineární časovou složitost_.

### $\mathcal{O}$ notace

Matemetici a programátoři pro asymptotický lineární růst používají speciální označení $\mathcal{O}(n)$ (čteme „ó en“), kde $n$ je velikost vstupu. Značení $\mathcal{O}$ pochází z latinského _ordo_, což znamená „řád“. Místo dlouhého slovního spojení, že algoritmus má „asymptoticky lineární časovou složitost“ řekneme prostě, že má „složitost $\mathcal{O}(n)$“.

Pokud počet kroků algoritmu nebo nějaké jeho části vůbez nezávisí na velikosti vstupu, tedy pokud je asymptoticky konstantní, používáme značku $\mathcal{O}(1)$. Můžeme tak říct, že náš algoritmus pro výpočet součtu vykoná v každé obrátce cyklu $\mathcal{O}(1)$ kroků.

## Příklad 2: Rozpětí prvků v poli

Podívejme se na malinko složitější algoritmus, který spočítá rozpětí prvků v poli. Rozpětí je rozdíl mezi největším a nejmenším prvkem. Pro pole 

```
[1, 7, 3, 4, 1, 3]
```

tak očekáváme výsledek 6.

Psuedokód algoritmu včetně počtu kroků bude vypadat následovně:

```
func range(array)       // +1
  min = array[0]        // +1
  max = array[0]        // +1
  for num in array      // +1
    if num < min        // +1
      min = num         // (+1)
    endif
    if num > max        // +1
      max = num         // (+1)
    endif
  endfor
  return max - min      // +1
```

Zde se nám nepodaří přesně spočítat počet kroků pro každou délku vstupu, protože počet kroků uvnitř cyklu závisi na konkrétních hodnotách v poli. Kroky uvedené v závorce se někdy vykonají, někdy ne. Můžeme ale z jistotou říct, že cyklus udělá minimálně 3 kroky a maximálně 5 kroků. Počet kroků uvnitř cyklu tedy nezávisí na velikosti pole a je proto $\mathcal{O}(1)$. Jak jsem už viděli na ilustraci s úsporami, pokud máme asymptoticky konstantní přírůstky, říkáme, že máme asymptoticky lineární růst.

Náš algoritmus pro výpošet rozpětí má tedy složitos $\mathcal{O}(n)$.

### Příklad 3: Počet výskytů prvku v poli

Zkusme tentokrát algoritmus, který ke každému prvku v poli spočítá, kolikrát se v poli vyskytuje. Po naše ukázkové pole

```
[1, 7, 3, 4, 1, 3]
```

očekáváme výsledek

```
[2, 1, 2, 1, 2, 2]
```

Psuedokód algoritmu včetně počtu kroků vypadá takto:

```
func count(array)                   // +1
  counts = []                       // +1
  for i from 0 to len(array) - 1    // +1
    counts[i] = 0                   // +1
    for j from 0 to len(array) - 1  // +1
      if array[j] == array[i]       // +1
        counts[i] = counts[i] + 1   // +1
      endif
    endfor
  endfor
  return counts                     // +1
```

Zde už máme kód, který obsahuje dva cykly v sobě. Analýzu složitosti provedeme takto:

1. Začneme vnitřním cyklem. Počet kroků jedné otáčky je $\mathcal{O}(1)$. Ať je velikost pole jakákoliv, jedna otáčka vnitřního cyklu vždy vykoná 2 nebo 3 kroky.
2. Počet kroků jedné otáčky vnějšího cyklu je tedy $\mathcal{O}(n)$, máme totiž vždy konstantní přírůstek.
3. Protože máme pro každou otáčku vnějšího cyklu asymptoticky lineární přírůstek, celkový počet kroků bude asymptoticky kvadratický.

Pro kvadratický růst používáme označení $\mathcal{O}(n^2)$.

Tímto způsobem můžeme provést analýzu složitosti jednoduchých algoritmů založených na cyklech. V dalších lekcích se podíváme na složitější algoritmy a způsoby, jak je analyzovat.
