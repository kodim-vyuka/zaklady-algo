## Klasícký for cyklus

Cyklus je nejčastěji používaná konstrukce při řešení algoritmických problémů. Pomocí cyklu můžeme opakovat stejný kód několikrát, dokud není splněna nějaká podmínka, vyčerpány všechny hodnoty v poli nebo dokud prostě nejsme spokojeni s výsledkem výpočtu.

V různých jazycích máme k dispozici různé druhy cyklů a jejich zápisů. Většina jazyků podporuje takzvaný klasický `for` cyklus, který pochází z jazyka C a je velmi univerzální a flexibilní.

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

Výstupem tohoto cyklu bude postupné vypsání čísel od 0 do 9.

Jeden z mála jazyků, který nemá klasický `for` cyklus, je například Python. V Pythonu se používá cyklus `for` s iterací přes prvky v poli nebo nějaké jiné kolekci. Takže pro vypsání čísel od 0 do 9 v Pythonu potřebujeme následující kód:

```py
for i in range(10):
  print(i)
```

Abychom se vyhnuli technickým detailům konkrétních jazyků, budeme v tomto kurzu zapisovat cykly v pseudokódu:

```
for i from 0 to 9 do
  print(i)
end for
```

## Procházení pole

Cyklus často používáme k procházení prvků v nějakém poli. Takto můžeme například vypsat všechny prvky pole na obrazovku:

```
pole = [10, 8, 3, 5, 2, 7, 1, 6, 4, 9]
for i from 0 to pole.length - 1 do
  print(pole[i])
end for
```

Cyklus `for` je dostatečně flexibilní, abychom mohli procházet pole různými způsoby. Například procházení pole od konce:

```
for i from pole.length - 1 to 0 do
  print(pole[i])
end for
```

nebo třeba procházení po dvou:

```
for i from 0 to pole.length - 1 step 2 do
  print(pole[i])
end for
```
