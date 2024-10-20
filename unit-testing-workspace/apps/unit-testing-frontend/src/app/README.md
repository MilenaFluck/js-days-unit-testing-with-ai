# Beispiel-Prompt

## ## Anweisung ## ##
Erstelle einen Unit Test mit Jest für die Funktion add(a, b), die die Summe von a und b zurückgibt.

## ## Kontext ## ##
Die Funktion add(a, b) ist eine einfache JavaScript-Funktion, die zwei Zahlen als Parameter entgegennimmt und deren Summe zurückgibt. Es ist wichtig, verschiedene Szenarien zu testen, einschließlich typischer Werte, Grenzwerte und falscher Eingaben.

## ## Beispiel ## ##
Hier ist ein Beispiel für einen bestehenden Unit Test mit Jest:

**Funktion:**
```
multiply(a, b) { return a * b; }
```
**Test:**
```
describe('multiply', () => {
     it('should return the product of two positive numbers', () => { 
         expect(multiply(2, 3)).toStrictEqual(6); 
     });
});
```
Bitte folge dieser Struktur für die Funktion add(a, b).

## ## Erwartung ## ##
Gib mir eine vollständige Testsuite, die mindestens die folgenden Szenarien abdeckt:
-	Summe zweier positiver Zahlen
-	Summe zweier negativer Zahlen
-	Summe einer positiven und einer negativen Zahl
-	Umgang mit null als Eingabe
-	Umgang mit ungültigen Eingaben (z. B. Strings, undefined)

## ## Format ## ##
Präsentiere die Testfälle in Form von beschreibenden Testbeschreibungen (describe und it Blöcken), die gut lesbar und gut strukturiert sind.

## ## Einschränkungen ## ##
Halte den Testcode einfach und übersichtlich. Verwende nur native Jest-Methoden ohne externe Bibliotheken.

## ## Zielgruppe ## ##
Die Antwort richtet sich an Reviewer, die die Qualität und Vollständigkeit der Tests bewerten werden. Stelle sicher, dass der Code klar kommentiert ist und die Absicht hinter jedem Testfall deutlich wird.


_______________________________

# Beispiel TDD-Test-Cases für Copilot Chat

### Link zu Copilot Chat:
https://copilot-chat.com/

````
input: "T-REX" expectedOutput: false
input: "STEGOSAURUS" expectedOutput: true
input: "TRICERATOPS" expectedOutput: true
input: "null" expectedOutput: false
input: "undefined" expectedOutput: false
````
### Requirements Description:
Check whether a dinosaur is herbivore.

### Hinweis:
Der Typ des Input und expectedOutput muss immer derselbe sein (String, Boolean etc.). Daher werden null und undefined hier als Strings übergeben.
