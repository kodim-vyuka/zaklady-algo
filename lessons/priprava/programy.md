## Spouštění programů

V tomto kurzu se chceme věnovat především programovacím technikám a trénovat schopnost řešit algoritmické a programátorské problémy. Pro tyto účely je v podstatě jedno, v jakém programovacím umíte programovat. Většina programovacích jazyků má podobné základní konstrukce a techniky, jen se občas liší syntaxe a některé pokročilejší postupy.

My v tomto kurzu budeme používat programovací jazyk JavaScript. Pokud umíte programovat v jiném jazyce jako je Python, Java nebo C#, určitě vám nebude dělat problém pochopit kód v JavaScriptu. Svá vlastní řešení pak můžete psát buď v JavaScriptu, pokud se jej chcete naučit, nebo ve vašem oblíbeném jazyce, pokud vám to bude pohodlnější.

### Node.js

Pokud jste absolvovali nějaký úvodní kurz JavaScriptu, jste pravděpodobně zvyklí vytvářet programy pro webové prohlížeče. Pokud si však chcete zkoušet různé programátorské techniky nebo budete chtít časem napsat nějaký serverový program, budete potřebovat jiné prostředí než je webový prohlížeč. Jedním z takových prostředí je například Node.js.

Node.js je JavaScriptový runtime, který běží mimo webový prohlížeč přímo na vašem počítači. Díky tomu můžete psát programy, které čtou a zapisují soubory na disk, vyřizují HTTP požadavky, komunikují s databází a mnoho dalšího, co by v prohlížeči nedávalo smysl. Zároveň však bez prohlížeče nemáte k dispozici DOM a jiná webové API. Programy v Node.js tedy nemají žádné grafické rozhraní a všechny poběží přímo v termínálu. To je pro naše účely ideální, protože v tomto kurzu se budeme zaměřovat na programovací techniky a nikoliv na webové aplikace a technologie.

## První program

Pokud máte správně nainstalovaný Node.js, můžete si rovnou zkusit spustit první program. Vytvořte si nový adresář a v něm soubor `hello.js` s následujícím obsahem:

```js
console.log('Hello, world!');
```

Nyní otevřete terminál, přejděte do adresáře s tímto souborem a spusťte ho příkazem `node hello.js`. Měli byste vidět výstup `Hello, world!`.

