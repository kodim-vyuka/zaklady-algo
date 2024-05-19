## Úvod do Node.js

Z různých úvodních kurzů JavaScriptu jste pravděpodobně zvyklí vytvářet programy pro webové prohlížeče. Pokud si však chcete zkoušet různé programátorské techniky nebo budete chtít časem napsat nějaký serverový program, budete potřebovat jiné prostředí než je webový prohlížeč. Jedním z takových prostředí je Node.js.

Node.js je JavaScriptový runtime, který běží mimo webový prohlížeč přímo na vašem počítači. Díky tomu můžete psát programy, které čtou a zapisují soubory na disk, vyřizují HTTP požadavky, komunikují s databází a mnoho dalšího, co by v prohlížeči nedávalo smysl. Zároveň však bez prohlížeče nemáte k dispozici DOM a jiné webové API pro grafické rozhraní. Všechny programy v Node.js tedy poběží v termínálu.

## První program

Pokud máte správně naistalovaný Node.js, můžete si rovnou zkurit spustit první program. Vytvořte si nový adresář a v něm soubor `hello.js` s následujícím obsahem:

```js
console.log('Hello, world!');
```

Nyní otevřete terminál, přejděte do adresáře s tímto souborem a spusťte ho příkazem `node hello.js`. Měli byste vidět výstup `Hello, world!`.
