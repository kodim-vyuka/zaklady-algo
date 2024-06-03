## Klasícký for cyklus

Cyklus je nejčastěji používaná konstrukce při řešení algoritmických problémů. Pomocí cyklu můžeme opakovat stejný kód několikrát, dokud není splněna nějaká podmínka, vyčerpány všechny hodnoty v poli nebo dokud prostě nejsme spokojeni s výsledkem výpočtu.

V různých jazycích máme k dispozici různé druhy cyklů a jejich zápisů. Většina jazyků podporuje takzvaný klasický `for` cyklus, který pochází z jazyka C a je velmi univerzální a flexibilní.

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

Tento cyklus se skládá ze tří částí:

1. **Inicializace** - `let i = 0` - zde vytvoříme takzvanou _řídící proměnnou_ `i` a nastavíme ji na počáteční hodnotu (v tomto případě 0).
2. **Podmínka** - `i < 10` - dokud je tato podmínka splněna, cyklus se bude opakovat.
3. **Iterace** - `i++` - po každém průchodu cyklem se provede tento příkaz. V našem případě se jedná o zvýšení hodnoty proměnné `i` o 1.

Výstupem tohoto cyklu bude postupné vypsání čísel od 0 do 9. Na konci cyklu bude proměnná `i` rovna 10, cyklus se proto již neopakuje, protože podmínka `i < 10` proprvé nebude splněna.

## Procházení pole

Cyklus často používáme k procházení prvků v nějakém poli. Takto můžeme například vypsat všechny prvky pole na obrazovku:

```js
const pole = [10, 8, 3, 1, 5];
for (let i = 0; i < pole.length; i++) {
  console.log(pole[i]);
}
```

Cyklus `for` je dostatečně flexibilní, abychom mohli procházet pole různými způsoby. Například procházení pole od konce:

```js
for (let i = pole.length - 1; i >= 0; i--) {
  console.log(pole[i]);
}
```

nebo třeba procházení po dvou:

```js
for (let i = 0; i < pole.length; i += 2) {
  console.log(pole[i]);
}
```
