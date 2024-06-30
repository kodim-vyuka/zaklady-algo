## Rekurze

Rekurze je jednou ze záklandích programátorských technik pro nárvh algoritmů a zpracování dat. Zároveň je to však pojem tajemný až děsivý a mnoho začínajících programátorů se ho může lekat. Než se tedy vrhneme do víru programování, podiváme se na příklady rekurze takříkajíc z reálného života.

Rekurze nastává vždy, když obsah nějakého pojmu nebo procesu závisí na nějaké verzi jeho samotného. Rekurze je tedy jakési odkazování se na sebe sama. 

### Nůžky v obalu

Podívejte se na tyto chytře zabalené nůžky:

::fig{src="assets/scissors.jpg"}

evidentně už musíte nějaké jiné nůžky vlastnit, abyste je dostali z obalu a mohli je použít. Abyste tedy získali nůžky, **musíte k tomu už mít nůžky**.

### Chlebový kvásek

Dalším příkladem je chlebový kvásek, který se pro potřebu pečení chleba vyrobí tak, že vezmete už existující kvásek a přídáte do něj mouku a vodu. **Kvásek se tedy vyrobí pomocí kvásku**.

### Hravé zkratky

Určitě už jste někdy slyšeli o programovacím jazyku PHP. Věděli jste ale, že tato zkratka znamená _PHP: Hypertext Preprocessor_? První písmeno zkratky PHP tedy přestavuje tuto zkratku samu o sobě. Podobný příklad je zkratka [projektu GNU](https://www.gnu.org/), která znamená _GNU's Not Unix_. 

### Nekonečné zrcadlo

Další ukázku rekurze objevíte, když se pokusíte v některém programu pro on-line schůzky nasdílet obrazovku, na které je otevřené okno tohoto programu. Výsledek je obrazovka, která do nekonečna obsahuje menší kopie sebe sama.

::fig{src="assets/infinity-mirror.png"}

## Rekurze v programování

Ze všech výše uvedených ukázek už jste nejspíš nasáli hlavní myšlenku rekurze. V programování a algoritmech nejčastěji rekurze vypadá tak, že nějaká funkce volá sama sebe.

Ukažme si to na příkladu rekurzivního hledání maximálního prvku v poli. Celou proceduru můžeme popsat takto:

Maximální prvek v poli nejdeme tak, že:

1. Najdeme maximální prvek v poli od druhého prvku do konce pole.
2. Porovnáme tento maximální prvek s prvním prvkem v poli a vrátíme větší z nich.

V matematice se může stát, že rekurze probíhá donekonečna. V programování však vždy musí nakonec nějak zastavit. V případě hledání maxima v poli se zastavíme, když už pole obsahuje jen jeden prvek, což je zároveň maximum.

V psedokódu tento algoritmus zapíšeme takto:

```
func maximum(array)
  if array.length == 1
    return array[0]
  
  [head, ...tail] = array
  max = maximum(tail)
  return head > max ? head : max
endfunc
```

Takováto funkce nám zatím spíše slouží jako ilustrační příklad. V praxi bychom pro hledání maxima použili spíše obyčejný cyklu. Kde se ale bez rekurze neobejdeme jsou stromové struktury.

<!-- Příklady rekurze:

1. Film _Inception_ (2010) režiséra Christophera Nolana
3. Matryoshka panenka
4. Sierpinského trojúhelník nebo Barnsleyho kapradí -->
