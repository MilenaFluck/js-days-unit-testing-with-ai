import writeModelData from './mock-me';

/*** hier kommen deine gemockten Tests rein ***/




/*** Tests Ende ***/


//___________________________________________________________________________________________________
/*** Schlechtes Beispiel: dieses Beispiel zeigt was passieren kann, wenn wir nicht ordentlich mocken
      - lass den Test laufen
      - überprüfe den assets folder in dieser lib => es wurde unerwünscht eine Datei erstellt, da nicht ausreichend gemockt
 ***/
it('should execute writeModelData method', () => {
  const data = 'GPT-4';
  const filename = 'ai-model.txt';

  return expect(writeModelData(data, filename)).resolves.toBeUndefined();
});
