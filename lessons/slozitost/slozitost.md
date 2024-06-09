## Časová složitost

V předchozí sekci jsme měřili rychlost algoritmu tak, že jsem stopli, jak dlouho běží jeho implementace a viděli jsme, že takovéto měření rychlosti není moc praktické. 

Místo toho bychom chtěli umět odhadnout, jak dlouho bude algoritmus běžet pro různé velikosti vstupu, aniž bychom ho museli programovat a spouštět na počítači. Tomu, jak dlouho algoritmus běží v závislosti na velikosti vstupu, říkáme odborně ::term{cs="časová složitost" en="time complexity"}.

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

Každý řádek kódu máme označený počtem kroků, které algoritmus provede. Velikost vstupu budeme vždy značit písmenem $n$. V tomto případě je velikost vstupu délka pole, tedy pro pole délky 100 bude $n = 100$.

Když si spočítáme počet kroků našeho algoritmu, dosteneme

- 2 kroky před začátkem cyklu,
- 5 kroků uvnitř cyklu pro každé číslo v poli,
- 1 krok po skončení cyklu.

Celkový počet kroků je tedy $2 + 5n + 1 = 5n + 3$. Pro pole délky 100 bude algoritmus potřebovat $5 \cdot 100 + 3 = 503$ kroků.
