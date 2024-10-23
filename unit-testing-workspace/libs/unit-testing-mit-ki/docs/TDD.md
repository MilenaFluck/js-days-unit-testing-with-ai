# Beispiel TDD-Test-Cases für Copilot Chat

### Link zu Copilot Chat:
https://copilot-chat.com/

````
input: "BERT" expectedOutput: false
input: "GPT" expectedOutput: true
input: "BLOOM" expectedOutput: true
input: "null" expectedOutput: false
input: "undefined" expectedOutput: false
````
### Requirements Description:
Check whether a model uses a decoder-only architecture.

### Hinweis:
Der Typ des Input und expectedOutput muss immer derselbe sein (String, Boolean etc.). 
Daher werden null und undefined hier als Strings übergeben (gilt nur in der Copilot Chat Prompt-UI).

# Lösungen

## Palindrom-Prüfung

````
input: "Tim" expectedOutput: false
input: "Hannah" expectedOutput: true
input: "Retter" expectedOutput: true
input: "null" expectedOutput: false
input: "undefined" expectedOutput: false
````
### Requirements Description:
Check, whether a string is a palindrom.

_______________________________________________________

## Sortierung

````
input: [3, 2, 8, 1] expectedOutput: [1, 2, 3, 8]
input: [] expectedOutput: []
````
### Requirements Description:
Sort a list of numbers in ascending order.

### Hinweis
Teste welchen Sortier-Algorithmus per default verwendet wird oder gebe
einen Algorithmus vor (z.B. Bubble Sort oder Selection Sort).

_______________________________________________________

## Primzahlen

````
input: 8 expectedOutput: false
input: 7 expectedOutput: true
input: 79 expectedOutput: true
````
### Requirements Description:
Check whether a number is a prime number.
