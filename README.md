# 06exStorage

# Oefening 1: Countdown.

De bedoeling van deze oefening is om in de local storage in je browser belangrijke momenten (milestones) voor jou in de toekomst bij te houden.

https://user-images.githubusercontent.com/10981553/226975807-3cdaf776-17df-4031-956a-f6317001c5c2.mov

- Als op de `Add` knop geklikt wordt, wordt de milestone toegevoegd aan de local storage op voorwaarde dat de datum groter is dan vandaag.
- Als op `Clear` knop geklikt wordt, worden alle milestones verwijderd uit de local storage.
- Als op de `Delete` knop geklikt wordt (naast de milestone), wordt de milestone verwijderd uit de local storage.

## Gegeven

### Milestone

De klasse `Milestone` is deels gegeven. Je dient nog enkel de methode `toJSON` aan te vullen in het `Milestone.js` bestand.

### MilestonesComponent

De klasse `MilestonesComponent` bevat alle data en acties die op de pagina plaatsvinden. Het bevat de volgende fields en methodes :

- `#milestones`: een array van Milestones
- `#storage` : verwijst naar `localStorage`
- `constructor`: Stelt de event handlers in en haalt de milestones op uit de storage
- `#getMilestonesFromStorage`: haalt de array op uit storage en filtert de milestones die in het verleden liggen eruit
- `#setMilestonesInStorage`: sorteert de milestones op datum en stopt de milestones in de storage
- `#addMilestone`: maakt een nieuwe milestone aan en wordt in de storage geplaatst
- `#deleteMilestone`: verwijdert 1 milestone uit de array milestones en update de nieuwe array in de storage
- `#clearMilestones`: maakt de array milestones leeg en verwijdert de milestones uit de storage
- `#toHTML`: overloopt alle milestones en toont deze, en voegt een verwijder knop toe

### Index

De functie `init` start de applicatie op.

## Gevraagd

### Een milestone toevoegen

- Voeg code toe aan de methode `#addMilestone`:
  - De `name` en `date` zijn **verplichte** velden, indien niet ingevuld, zal de functie een `Error` gooien met een gepaste foutmelding.
  - Als de `date` kleiner is of gelijk is aan vandaag, gooit de functie een `Error` met de foutmelding _"This milestone is already in the past and isn't added."_
  - Als de datum groter is dan vandaag, wordt er een nieuwe `milestone` toegevoegd aan de array van `milestones`.
  - Wanneer de `milestone` succesvol werd toegevoegd, wordt de functie `#toHTML` opgeroepen.
- Voeg code toe aan de constructor van de `MilestonesComponent` zodat de functie `#addMilestone` wordt opgeroepen als op de knop met id `add` wordt geklikt. Gebruik hier een `try`/`catch` constructie om de foutmeldingen op te vangen (die onderliggend mogelijks werden veroorzaakt) en een `alert` te tonen met de foutmelding. Indien er geen foutmelding is, zet je de waarden van de input velden terug leeg.
- Bekijk de bestaande code bij de functie `#toHTML`. Deze code zorgt ervoor dat alle milestones verschijnen als een notificatie lijst en voegt een verwijderknop toe. Hier dien je momenteel nog niets te wijzigen.

### Alle milestones verwijderen

- Voeg code toe aan de methode `#clearMilestones`
  - De array `#milestones` wordt leeg gemaakt
  - De functie `#toHTML` wordt opgeroepen
- Voeg code toe aan de constructor van de `MilestonesComponent` zodat de functie `#clearMilestones` wordt uitgevoerd als op de knop met id `clear` wordt geklikt, nadat de gebruiker via een confirm box toestemming gaf.

### Een milestone verwijderen op positie

- Nadat de gebruiker op de verwijder knop klikt van een `milestone`, moet hij eerst via een confirm box toestemming geven. Pas de `#toHTML` functie aan zodat de gebruiker een confirm box krijgt alvorens te verwijderen.
- Voeg code toe aan de functie `#deleteMilestone(ind)` - De milestone op positie `ind` wordt verwijderd uit de array - De functie `#toHTML` wordt opgeroepen

### Storage toevoegen

- Voeg code toe aan de functie `#getMilestonesFromStorage` om de milestones op te halen uit de storage en in de array milestones te stoppen. Zorg ervoor dat hier de milestones die in het verleden liggen uitgefilterd worden.
- Voeg code toe aan de functie `#setMilestonesInStorage` om de milestones in de storage te stoppen. Sorteer eerst de milestones op aflopende datum.
- Voeg code toe aan
  - `#addMilestone`: om de veranderde array in de storage te stoppen (maak gebruik van `#setMilestonesInStorage`)
  - `#deleteMilestone`: om de veranderde array in de storage te stoppen (maak gebruik van `#setMilestonesInStorage`)
  - `#clearMilestone` om de array uit de storage te verwijderen
- Test dit uit. Bekijk de storage via de Developer Tools

---

## Oefening 2: Fietsvergoeding

De bedoeling van de webpagina is om het aantal gefietste kilometers per maand gemakkelijk te kunnen ingeven (om later een fietsvergoeding te kunnen ontvangen).
De gefietste kilometers zijn hard gecodeerd in de JavaScript code: in de `GefietsteKilometersRepository`

- De jaren worden geladen in de keuzelijst met id jaar bovenaan (op basis van de `GefietsteKilometersRepository`)
- Als de gebruiker een jaar kiest worden waarden ingevuld
- Als de gebruiker één of meerdere waarden aanpast en klikt op de knop Opslaan, worden de waarden veranderd in de repository. Merk op dat dit tijdelijke en geen permanente veranderingen zijn! Je hoeft ze dus nooit te persisteren in localstorage, enkel aanpassen in de array van GefietsteKilometersRepository is voldoende.
- Het laatst gekozen jaar wordt bijgehouden in de storage. Als de pagina daarna opnieuw geopend wordt, worden de waarden van dit laatst gekozen jaar onmiddellijk getoond.
  De class `GefietsteKilometers` bestaat al: elk object bestaat uit een `jaar`, `aantalKilometers` (dit is een array: op positie 0 het aantal gefietste kilometers van januari, …) en `bedragPerKilometer`. Omdat het bedrag per kilometer bijvoorbeeld verandert door indexaanpassingen, wordt dit per jaar bijgehouden.
  De data die we willen laten zien zit in `GefietsteKilometersRepository`

Implementeer de volgende functies in `GefietsteKilometersRepository`

1. Implementeer de functie `geefJaren` in `GefietsteKilometersRepository`
   - De functie `geefJaren` retourneert een array van de unieke jaren die bestaan binnen `GefietsteKilometersRepository`
1. Implementeer de functie `geefGefietsteKilometersVoorEenJaar` in `GefietsteKilometersRepository`
   - De functie retourneert een array van de gefietste kilometers voor het opgegeven jaar (parameter)
1. Implementeer de functie `voegToe` in `GefietsteKilometersRepository`
   - De functie `voegToe` voeg een nieuw object `GefietsteKilometers` toe aan `GefietsteKilometersRepository`
1. Implementeer de functie `wijzigGefietsteKilometers` in `GefietsteKilometersRepository`
   - De functie `wijzigGefietsteKilometers` vervangt de bestaande array `aantalKilometers` voor het opgegeven jaar (parameter) door de array waarden (parameter)

Implementeer de volgende functies in `GefietsteKilometersComponent`

1.  `#gefietsteKilometersToHtml`
    - De tekstvakken krijgen de correcte waarde voor het meegegeven jaar (parameter)
1.  `#getJaarFromStorage`
    - Als de storage een sleutel `jaarGefietsteKilometers` bevat, moet de keuzelijst met id jaar deze waarde krijgen
1.  `#setJaarInStorage`
    - Deze functie wordt gebruikt om het gekozen jaar weg te schrijven naar de storage. De gebruikte sleutel is `jaarGefietsteKilometers`
1.  Constructor van de `GefietsteKilometersComponent`
    - Het laatst gekozen jaar wordt opgehaald uit de storage en ingesteld als waarde van de keuzelijst met id jaar
    - De tekstvakken worden met de correcte waarden dynamisch opgevuld voor dat jaar (functie `#gefietsteKilometersToHtml`)
    - Als een ander jaar gekozen wordt in de keuzelijst met id jaar
    - De tekstvakken met de correcte waarden worden dynamisch opgevuld voor dat jaar (functie `#gefietsteKilometersToHtml`)
    - Het laatst gekozen jaar wordt bijgewerkt in de storage
    - Als op de knop `opslaan` geklikt wordt, moet de `repository` bijgewerkt worden.
