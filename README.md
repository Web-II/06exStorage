# 06exStorage

## Oefening 1: Countdown.

De bedoeling van deze oefening is om in de local storage in je browser belangrijke momenten (milestones) voor jou in de toekomst bij te houden.

- Als op de + geklikt wordt, wordt de milestone toegevoegd aan de local storage op voorwaarde dat de datum groter is dan vandaag.
- Als op Clear all milestones geklikt wordt, worden alle milestones verwijderd uit de local storage.

1. Deze oefening is volledig analoog aan het stickies voorbeeld.
   ![countdown1.png](/docs/countdown1.png 'Voorbeeld')
1. De klasse Milestone is deels gegeven. je dient de methode toJSON nog aan te vullen.
1. De class MilestonesComponent bevat alle data en acties die op de pagina plaatsvinden. Het bevat volgende properties en methodes :
   - milestones: een array van milestones
   - storage : verwijst naar localStorage
   - calculateDiffDays: berekent het aantal dagen tussen de huidige dag en de dag van de milestone
   ```javascript
   const oneDay = 24 * 60 * 60 * 1000;
   const diffDays = Math.ceil(
     Math.abs(
       (new Date().getTime() - new Date(cursor.value.date).getTime()) / oneDay
     )
   );
   ```
   - getMilestonesFromStorage: haalt de array op uit storage en filtert de milestones die in het verleden liggen eruit.
   - setMilestonesInStorage: sorteert de milestones op datum en stopt de milestones in de storage
   - addMilestone: maakt een nieuwe milestone aan en wordt in de storage geplaatst
   - deleteMilestone: verwijdert 1 milestone uit de array milestones en update de nieuwe array in de storage
   - clearMilestones: maakt de array milestones leeg en verwijdert de milestones uit de storage
   - toHTML: overloopt alle milestones en toont deze, en voegt een verwijder knop toe
1. De functie init haalt initieel de milestones op in de storage en toont die in HTML + de eventhandlers worden ingesteld
1. Een milestone toevoegen
   - Voeg code toe aan de functie addMilestone():
     - De naam en de datum zijn verplichte velden, indien niet ingevuld, zal een boodschap worden weergegeven via een alert.
     - Als de datum kleiner is of gelijk is aan vandaag, verschijnt een alert met de foutmelding: This milestone is already in the past and isn't added.
     - Als de datum groter is dan vandaag, wordt de nieuwe milestone toegevoegd aan de array.
     - Wanneer de milestone succesvol werd toegevoegd, wordt de functie toHTML opgeroepen.
   - Voeg code toe aan de functie init() zodat een nieuwe milestone wordt toegevoegd als op de knop met id “add” wordt geklikt.
   - Bekijk de bestaande code bij de functie toHTML. Deze code zorgt ervoor dat alle milestones verschijnen als een unordered list en voegt een verwijderknop toe.
1. Alle milestones verwijderen
   - Voeg code toe aan de functie clearMilestones()
     - De array wordt leeg gemaakt
     - De functie toHTML wordt opgeroepen
   - Voeg code toe aan de functie init() zodat de functie clearMilestones() wordt uitgevoerd als op de knop met id “clear” wordt geklikt, nadat de gebruiker via een confirm box toestemming gaf
1. Een milestone verwijderen op positie position
   - Voeg code toe aan de functie deleteMilestone(ind) - De milestone op positie position wordt verwijderd uit de array - De functie toHTML wordt opgeroepen
   - Voeg code toe aan de functie toHTML() zodat bij het overlopen van de milestones in de array er gecontroleerd wordt of de datum kleiner is dan of gelijk is aan de datum van vandaag. De gebruiker moet eerst via een confirm box toestemming geven.
   - Probeer dit uit door in de functie addMilestone de controle op de datum tijdelijk in commentaar te zetten, waardoor je tijdelijk wel milestones kunt toevoegen met een datum kleiner dan vandaag. Bij het uitschrijven, zal je zien dat de foutmelding verschijnt in de console.
1. Storage

   - Voeg code toe aan de functie getMilestonesFromStorage om de milestones op te halen uit de storage en in de array milestones te stoppen. Hier worden ook de milestones die in het verleden liggen uitgefilterd.
   - Voeg code toe aan de functie setMilestonesInStorage om de milestones in de storage te stoppen. Sorteer eerst de milestones op aflopende datum.
   - Voeg code toe aan
     - addMilestone(): om de veranderde array in de storage te stoppen (maak gebruik van setMilestonesInStorage)
     - deleteMilestone(): om de veranderde array in de storage te stoppen (maak gebruik van setMilestonesInStorage)
     - clearMilestone() om de array uit de storage te verwijderen
   - Test dit uit. Bekijk de storage via de Developer Tools

1. Storage – Vervolg
   - Voeg helemaal vooraan de init() functie code toe
     - Als de browser geen localStorage ondersteunt, moeten de knoppen add en clear disabled worden
     - Anders worden de milestones opgehaald uit de storage en getoond (met behulp van de functie toHTML)

## Oefening 2: Fietsvergoeding

De bedoeling van de webpagina is om het aantal gefietste kilometers per maand gemakkelijk te kunnen ingeven (om later een fietsvergoeding te kunnen ontvangen).
De gefietste kilometers zijn hard gecodeerd in de JavaScript code: in de GefietsteKilometersRepository

- De jaren worden geladen in de keuzelijst met id jaar bovenaan (op basis van de GefietsteKilometersRepository)
- Als de gebruiker een jaar kiest worden waarden ingevuld
- Als de gebruiker één of meerdere waarden aanpast en klikt op de knop Opslaan, worden de waarden veranderd in de repository. Merk op dat dit tijdelijke en geen permanente veranderingen zijn!
- Het laatst gekozen jaar wordt bijgehouden in de storage. Als de pagina daarna opnieuw geopend wordt, worden de waarden van dit laatst gekozen jaar onmiddellijk getoond.
  De class GefietsteKilometers bestaat al: elk object bestaat uit een jaar, aantalKilometers (dit is een array: op positie 0 het aantal gefietste kilometers van januari, …) en bedragPerKilometer. Omdat het bedrag per kilometer bijvoorbeeld verandert door indexaanpassingen, wordt dit per jaar bijgehouden.
  De data die we willen laten zien zit in GefietsteKilometersRepository

1. Implementeer de functie geefJaren in GefietsteKilometersRepository
   - De functie geefJaren retourneert een array van de unieke jaren die bestaan binnen GefietsteKilometersRepository
1. Implementeer de functie geefGefietsteKilometersVoorEenJaar in GefietsteKilometersRepository
   - De functie retourneert een array van de gefietste kilometers voor het opgegeven jaar (parameter)
1. Implementeer de functie voegToe in GefietsteKilometersRepository
   - De functie voegToe voeg een nieuw object GefietsteKilometers toe aan GefietsteKilometersRepository
1. Implementeer de functie wijzigGefietsteKilometers in GefietsteKilometersRepository
   - De functie wijzigGefietsteKilometers vervangt de bestaande array aantalKilometers voor het opgegeven jaar (parameter) door de array waarden (parameter)
   - Implementeer de volgende functies in GefietsteKilometersComponent
   1. gefietsteKilometersToHtml
      - De tekstvakken krijgen de correcte waarde voor het meegegeven jaar (parameter)
   1. getJaarFromStorage
      - Als de storage een sleutel jaarGefietsteKilometers bevat, moet de keuzelijst met id jaar deze waarde krijgen
   1. setJaarInStorage
      - Deze functie wordt gebruikt om het gekozen jaar weg te schrijven naar de storage. De gebruikte sleutel is jaarGefietsteKilometers
   1. init
      - Het laatst gekozen jaar wordt opgehaald uit de storage en ingesteld als waarde van de keuzelijst met id jaar
      - De tekstvakken worden met de correcte waarden dynamisch opgevuld voor dat jaar (functie gefietsteKilometersToHtml)
      - Als een ander jaar gekozen wordt in de keuzelijst met id jaar
      - De tekstvakken met de correcte waarden worden dynamisch opgevuld voor dat jaar (functie gefietsteKilometersToHtml)
      - Het laatst gekozen jaar wordt bijgewerkt in de storage
      - Als op de knop opslaan geklikt wordt, moet de repository bijgewerkt worden.
