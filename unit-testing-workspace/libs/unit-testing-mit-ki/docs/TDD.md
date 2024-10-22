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
