## Pseudokód

V tomto kurzu se chceme věnovat především programovacím technikám a trénovat schopnost řešit algoritmické a programátorské problémy. Pro tyto účely je v podstatě jedno, v jakém programovacím jazyce umíte programovat. Většina jazyků má podobné základní konstrukce a techniky, jen se občas liší syntaxe a některé pokročilejší postupy.

V tomto kurzu proto nebudeme používat žádný konkrétní programovací jazyk. Můžete tak programovat ve svém oblíbeném jazyce. Pro trénink algoritmů jsou však nejvhodnější jazyky netypované, jako JavaScript nebo Python. Většinou totiž píšeme kratší programy, kde nepotřebujeme silnou typovou kontrolu a vymýšlení typů nás může zbytečně brzdit. Pokud však dobře znáte svůj TypeScript, Javu, C#, C++, Rust nebo něco úplně jiného, určitě si poradíte.

Abychom mohli zapisovat ukázky kódu a řešení problémů a žádnému jazyku při tom nenadržovat, budeme puožívat takzvaný _pseudokód_.

### Co je pseudokód

Pseudokód je zjednodušený jazyk, který se používá k popisu algoritmů a programů. Většinou je psán tak, aby byl co nejvíce podobný běžným programovacím jazykům, ale zároveň aby byl co nejvíce srozumitelný, univerzální a nezatěžoval čtenáře zbytečnými technickými detaily konkrétního jazyka.

Zde je příklad pseudokódu, který spočitá průměr ze všech kladných čísel v poli:

```
func average(array)
  sum = 0
  for i from 0 to array.length
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
- Cyklus `for` je postavený tak, že horní mez se vždy bere **vyjma**. To znamená, že cyklus `for i from 0 to 10` projde prvky od 0 do 9. Tím se vyhýbáme detailům jako odečítání jedničky od délky pole.

I když jste nikdy žádný pseudokód neviděli, jistě si dokážete představit, co daný kód dělá a jak byste ho mohli implementovat ve vašem oblíbeném programovacím jazyce.

:::box{type=note}
Žádný oficiální standard pro to, jak psát pseudokód neexistuje, každý autor nějaké učebnice nebo kurzu píše pseudokód po svém. Naše varianta pseudokódu si vypůjčuje prvky z různých jazyků jako je Python, JavaScript nebo Pascal, tak, aby byl pro naše účely co nejvíce srozumitelný a univerzální.
:::
