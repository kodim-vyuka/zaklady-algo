## Pseudokód

V tomto kurzu se chceme věnovat především programovacím technikám a trénovat schopnost řešit algoritmické a programátorské problémy. Pro tyto účely je v podstatě jedno, v jakém programovacím umíte programovat. Většina programovacích jazyků má podobné základní konstrukce a techniky, jen se občas liší syntaxe a některé pokročilejší postupy.

Aby tento kurz byl dostupný pro co nejvíce lidí, nebudeme zde používat žádný konkrétní programovací jazyk. Proto je v pořádku, pokud budete programovat ve svém oblíbeném jazyce jako je Python, JavaScript, Java, C#, Rust, C nebo cokoliv jiného. 

Jak ale budeme zapisovat ukázky kódu a řešení problémů, když nebudeme mít k dispozici žádný konkrétní jazyk? K tomu nám poslouží takzvaný pseudokód.

### Co je pseudokód

Pseudokód je zjednodušený jazyk, který se používá k popisu algoritmů a programů. Většinou je psán tak, aby byl co nejvíce podobný běžným programovacím jazykům, ale zároveň aby byl co nejvíce srozumitelný a univerzální. 

Zde je příklad pseudokódu, který spočitá průměr ze všech kladných čísel v poli:

```
func average(array)
  sum = 0
  for i from 0 to array.length - 1
    if array[i] > 0
      sum = sum + array[i]
    endif
  endfor
  return sum / array.length
endfunc

numbers = [10, -8, 0, 5, -2, 7, -1, 6, 4, 9]
print(average(numbers))
```

Všimněte si, že pseudokód obsahuje základní konstrukce jako je funkce, proměnná, cyklus `for` a podmínka `if`. 

- Syntaxe je zjednodušená a neobsahuje žádné konkrétní detaily specifické pro nějaký programovací jazyk.
- Používáme funkce, u kterých je jasné, co dělají, například `print`. Takovou funkci si pak musíte ve svém programovacím jazyce nahradit za ekvivalentní funkci. Například v Pythonu by to bylo `print`, v JavaScriptu `console.log`, v C# `Console.WriteLine`, v Java `System.out.println` atd.

Věřím, že i když jste nikdy žádný pseudokód neviděli, dokážete si z něj představit, co daný kód dělá a jak byste ho mohli implementovat ve vašem oblíbeném programovacím jazyce.

:::box{type=note}
Žádný oficiální standard pro to, jak psát pseudokód neexistuje, každý autor nějaké učebnice nebo kurzu píše pseudokód po svém. Naše varianta pseudokódu si vypůjčuje prvky z různých jazyků jako je Python, JavaScript nebo Pascal, tak, aby byl pro naše účely co nejvíce srozumitelný a univerzální.
:::
