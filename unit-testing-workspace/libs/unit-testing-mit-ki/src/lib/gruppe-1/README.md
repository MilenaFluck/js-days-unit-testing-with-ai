# Aufgabe
## Schreibe Tests für die Funktionen in mock-me.ts und mocke korrekt
Stell dir vor du bist Software-Entwickler und hast einige neue Funktionen geschrieben. Diese möchtest du nun testen.
Leider hast du nicht so viel Erfahrung mit Mocks, Spies und Stubs. Deshalb möchtest du einen künstlichen Agenten um Umterstützung bitten.

Dazu musst du dem Modell erst einmal erklären, worum es geht. Z.B. könntest du
folgende Punkte mit ihm erläutern:
- Was muss ich überhaupt mocken?
- Macht das Mocken in jedem Fall Sinn?
- Macht der Test noch Sinn, wenn ich das mocke? (Denke an Regel 1)

Nachträglich solltest der Agent auch noch einmal reflektieren, ob seine Lösung Sinn macht:
- Sind grundlegende Anforderungen an gute Unit Tests (Regeln 1-4) erfüllt?
- Ist die Testsuit ordentlich gegliedert?
- Werden die Jest Matcher verwendet, die sich am besten eignen?
- Werden Jest Modifier (wie not) sinnvoll eingesetzt?
- Ist die Coverage ausreichend und sinnvoll (Branch, Statement, Conditional und Lines Coverage)?

**Ziel:** Am Ende solltest du eine laufende Testsuite in mock-me.spec.ts haben, die durchläuft und mindestens 80%
Conditional Coverage vorweist. Zudem darf es keine Nebenwirkungen durch nicht oder falsch gemockte Funktionen geben.

## Vorgehen
1. Was ist der allgemeine Kontext? (Wer bist du? Was ist das Ziel?)
2. Überlegt euch eine Strategie (bspw. Funktion nach Funktion)
3. Überlegt euch eine Prompt-Strategie (Generatives Wissens Prompting, Reasoning und Selbstvalidierung könnten hier sinnvoll sein ;))
3. Sucht euch eine geeignete Prompt-UI aus.
4. Schreibt Prompts, die zu einem sinnvollen Ergebnis führen (Ist alles sicher und sinnvoll gemocked?)

## Hinweise
- Nutzt die Folien, um euch das notwendige Hintergrundwissen für gute Unit Tests und Mocks, Spies und Stubs mit Jest ins Gedächtnis zu rufen
- Nutzt die Folien zum Thema Prompt Engineering
- Mögliche Prompt-UIs findet ihr unter docs/PROMPT-UI.md
- Ihr findet einen Beispielprompt in docs/PROMPT.md und Strategien in PROMPT-STRATEGIE.md
- Diskutiert und probiert aus!

## Idee!
Innerhalb einer Gruppe könnt ihr euch auch aufteilen. Ein Teil der Gruppe testet selbst und der andere Teil mit KI.
Schaut mal wer schneller ist.
