# Aufgabe
## Reviewe die Testsuite review-me.spec.ts
Stell dir vor du bist ReviewerIn und bekommst in einem MR diese Testsuite. Hier werden die Funktionen aus review-me.ts abgetestet.
Statt nun selbst alles im Detail durchzugehen, möchtest du mit Hilfe einer Prompt-UI deiner Wahl Feedback für den
Entwickler generieren, der die Tests geschrieben hat.

Dazu musst du dem Modell aber erst einmal erklären, worum es geht und worauf du in deinem Projekt Wert legst. Z.B. könntest du
folgende Punkte mit ihm erläutern:
- Ist alles ordentlich und sicher gemockt?
- Werden die F.I.R.S.T-Prinzipien einghalten?
- Sind grundlegende Anforderungen an gute Unit Tests (Regeln 1-4) erfüllt?
- Ist die Testsuit ordentlich gegliedert?
- Werden die Jest Matcher verwendet, die sich am besten eignen?
- Werden Jest Modifier (wie not) sinnvoll eingesetzt?
- Ist die Coverage ausreichend und sinnvoll (Branch, Statement, Conditional und Lines Coverage)?

Es geht nicht darum, die Tests neu zu schreiben, sondern einer anderen Entwicklerin sinnvolle Verbesserungsvorschläge und Kommentare zu geben, sodass
ein Lerneffekt erzielt wird. Hier kann die eine künstliche Agentin auch helfen zusätzlich Wissen für Kollegen aus verständliche Art und Weise mitzugeben.

## Vorgehen
1. Was ist der allgemeine Kontext? (Wer bist du? Was ist das Ziel?)
2. Überlegt euch eine Strategie (bspw. Reviews nach unterschiedlichen Perspektive oder einzelnen Funktionen)
3. Überlegt euch eine Prompt-Strategie (Generatives Wissens Prompting könnte hier sinnvoll sein ;))
3. Sucht euch eine geeignete Prompt-UI aus.
4. Schreibt Prompts, die zu einem sinnvollen Ergebnis führen (Wie lang soll das Feedback sein? Wer ist die Zielgruppe?)

## Hinweise
- nutzt die Folien, um euch das notwendige Hintergrundwissen für gute Unit Tests mit Jest ins Gedächtnis zu rufen
- nutzt die Folien zum Thema Prompt Engineering
- mögliche Prompt-UIs findet ihr unter docs/PROMPT-UI.md
- ihr findet einen Beispielprompt in docs/PROMPT.md und Strategien in PROMPT-STRATEGIE.md
- diskutiert und probiert aus!

## Kontrolle
- Folgende Verbesserungsvorschläge sollte die KI mindestens machen:
- Gliederung der Testsuite schlecht: manchmal describe-Blöcke, "run-all-test"-suite nicht sinnvoll etc.
- zu viele oder unpassende Assertions, Jest Matcher (bspw. toEqual(false) statt toBeFalsy()) und Jest Modifier (bspw. doppelte Verneinung mit .not)
- Cónditional Coverage nicht ausreichend
- unangemessenes Mocking der Funktion "isModelDangerous" => Test hat keinen Mehrwert
- Test "should execute writeModelData method" nicht gemocked => führt zur Erstellung einer Datei im assets-Ordner
- Funktion "isDaylight" nicht korrekt gemocked => aufgrund von new Date() wird der Test je nach Uhrzeit der Ausführung fehlschlagen
- ggf. wird die KI bzgl. "isDaylight" auch anmerken, dass hier maßgeblich Third-Party-Code getestet wird

## Idee!
Innerhalb einer Gruppe könnt ihr euch auch aufteilen. Ein Teil der Gruppe testet selbst und der andere Teil mit KI.
Schaut mal wer schneller ist und das qualitativere Review macht.
