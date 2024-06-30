## Stromové struktury

Co se týče reprezentace růcných dat, zatím jsme se v tomto kurzu bavili hlavně o polích. Tam máme prvky vždy uloženy v řadě jeden za druhým a přistupujeme k nim pomocí indexů. Toto však zdaleka není jediný způsob, jak mohou být v našem programu data uložena. 

Určitě jste se v praxi již setkali s daty uspořádanými do nějaké stromové struktury. Takto by například mohla vypadat struktura dat pro evidenci zboží v supermarketu. 

::fig{src=potraviny.png}

Takovýto strom má však dost omezenou hloubku, tedy počet různých úrovní, které může obsahovat. My se budeme chtít věnovat hlavně stromům, které mohou mít potenciálně libovolnou hloubku. 

Jednu z takových stromových struktur jste zvyklí používat téměř každý den - strukturu složek a souborů na vašem počítači.

```
User/
├─ Documents/
│  ├─ Work/
│  │  ├─ Reports/
│  │  │  ├─ Q1_Financial_Report.docx
│  │  │  └─ Annual_Summary_2023.docx
│  │  ├─ Presentations/
│  │  │  ├─ Sales_Pitch_March.pptx
│  │  │  └─ Marketing_Strategy_2024.pptx
│  │  ├── Resume_Aaron_Dearing.docx
│  │  └── CoverLetter_Aaron_Dearing.docx
│  ├─ Personal/
│  │  ├─ Finance/
│  │  │  ├─ Household_Budget_2024.xlsx
│  │  │  └─ TaxReturn_2023.pdf
│  │  └─ Recipes/
│  │     ├─ Chocolate_Chip_Cookies.docx
│  │     └─ Lasagna_Recipe.docx
│  └─ Miscellaneous/
│     ├─ Meeting_Notes_2023-05-15.txt
│     └─ Book_Ideas.docx
├─ Pictures/
│  ├─ Vacation/
│  │  ├─ Beach_Sunset.jpg
│  │  ├─ Beach_Family.jpg
│  │  └─ Mountain_Cabin.jpg
│  └─ Family/
│     ├─ Christmas_Tree.jpg
│     ├─ Christmas_Dinner.jpg
│     ├─ Birthday_Cake.jpg
│     └─ Birthday_Party.jpg
├─ Music/
│  ├─ Albums/
│  │  ├─ Abbey_Road/
│  │  │  ├─ Come_Together.mp3
│  │  │  └─ Here_Comes_The_Sun.mp3
│  │  └─ Dark_Side_Of_The_Moon/
│  │     ├─ Time.mp3
│  │     └─ Money.mp3
│  ├─ Singles/
│  │  ├─ Uptown_Funk.mp3
│  │  └─ Blinding_Lights.mp3
│  └─ Playlists/
│     ├─ Road_Trip.m3u
│     └─ Workout_Mix.m3u
├─ Videos/
│  ├─ Movies/
│  │  ├── The_Shawshank_Redemption.mp4
│  │  └── Inception.mp4
│  ├─ TV Shows/
│  │  ├─ Breaking_Bad/
│  │  │  ├─ S01E01.mp4
│  │  │  ├─ S01E02.mp4
│  │  │  └─ S01E03.mp4
│  │  └─ Stranger_Things/
│  │     ├─ S01E01.mp4
│  │     └─ S01E02.mp4
│  └─ Home Videos/
│     ├─ Kids_Playing.mp4
│     └─ Family_Reunion.mp4
└─ Downloads/
   ├─ Software/
   │  ├─ VLC_Player_Installer.exe
   │  └─ Adobe_Reader_Installer.exe
   └─ Documents/
      ├─ Travel_Itinerary.pdf
      └─ Conference_Agenda.pdf
```

Všimněte si, že souborový strom může mít zcela libovonlou hloubku, složky do sebe můžete zanořovat jak hluboko chcete. Takovéto stromy vždy mívají takzvaně _rekurzivní_ strukturu. Strom souborů je totiž:

- buď jeden soubor
- nebo složka, která obsahuje seznam souborových stromů

## Názvosloví
