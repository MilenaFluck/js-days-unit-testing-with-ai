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
