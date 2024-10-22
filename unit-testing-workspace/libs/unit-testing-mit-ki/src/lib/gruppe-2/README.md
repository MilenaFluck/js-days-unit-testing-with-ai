# Aufgabe
## Generiere Tests für die identify-testcases.spec.ts
Stell dir vor du bist ein Software-Entwickler, der nachträglich die Coverage von vorhandenem Code hochziehen soll.
Leider haben vor dir ein paar Kollegen nicht so schöne Funktionen geschrieben und dein Kopf dreht sich vor lauter Conditions.
Dennoch sollst du den Quellcode nicht anfassen und nur durch Unit Tests absichern.

Statt dich selbst durch die Funktion zu hangeln, nimmst du eine beliebige Prompt-UI zur Unterstützung. Diese
soll dir dabei helfen:
1. Die Funktion zu verstehen
2. Alle Outcomes (was passiert unter welchen Bedingungen) zu identifizieren
3. Testfälle aus den möglichen Szenarien abzuleiten 
4. Herauszufinden, welche Testfälle sich lohnen, sodass die Testsuite wartbar bleibt und alle Edge Cases abdeckt
5. Für jedes Szenario einen Test schreiben
6. Die Tests gut strukturiert in eine Testsuite schreiben

**Ziel:** Am Ende solltest du eine laufende Testsuite in identify-testcases.spec.ts haben, die durchläuft und 100% 
Conditional Coverage vorweist.

## Vorgehen
1. Was ist der allgemeine Kontext? (Wer bist du? Was ist das Ziel?)
2. Überlegt euch eine Prompt-Strategie (Prompt-Chaining oder Reasoning können hier Sinn machen ;)
3. Sucht euch eine geeignete Prompt-UI aus.
4. Schreibt Prompts, die zu einem sinnvollen Ergebnis führen
5. Lasst den künstlichen Agenten auch nochmal slebst validieren und reflektieren

## Hinweise
- nutzt die Folien, um euch das notwendige Hintergrundwissen für gute Unit Tests mit Jest ins Gedächtnis zu rufen
- mögliche Prompt-UIs findet ihr unter docs/PROMPT-UI.md
- nutzt die Folien zum Thema Prompt Engineering
- ihr findet einen Beispielprompt in docs/PROMPT.md und Strategien in PROMPT-STRATEGIE.md
- diskutiert und probiert aus!

## Idee!
Innerhalb einer Gruppe könnt ihr euch auch aufteilen. Ein Teil der Gruppe testet selbst und der andere Teil mit KI.
Schaut mal wer schneller ist.
