# Unit Test Workshop 

## Dies ist ein Nx Workspace, in dem eine Nest.js Backend App und eine Angular Frontend App liegen. Beide sind für sich startbar.

## Getting Started
Dependencies installieren: 'npm install'

## Apps starten
Starten der Backend-Anwendung mit 'nx serve unit-testing-backend' bzw. 'nx serve unit-testing-frontend'.

## Apps testen
Alle Test innerhalb einer App werden ausgeführt mit mit 'nx test unit-testing-backend' bzw. 'nx test unit-testing-frontend'. Mit dem zusätzlichen Flag --coverage wird in der Ausgabe ein Coverage Report angezeigt. Mit dem Flag --watch wird jest im Watch-Modus ausgeführt. Sobald sich dann etwas im Code ändert, werden nur alle betroffenen Tests sofort erneut ausgeführt.
