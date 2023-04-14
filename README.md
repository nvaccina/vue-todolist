TO DO LIST
===
Descrizione:<br>
Rifare l’esercizio della to do list.
Ogni todo sarà un oggetto, formato da due proprietà:<br>
`text`, una stringa che indica il testo del todo<br>
`done`, un booleano (true/false) che indica se il todo è stato fatto oppure no<br>
<br>
**MILESTONE 1**<br>
Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà `done` è uguale a `true`, visualizzare il testo del todo ~~sbarrato~~.<br>
**MILESTONE 2**<br>
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.<br>
**MILESTONE 3**<br>
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.<br>
**Bonus:**<br>
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se `done` era uguale a `false`, impostare `true` e viceversa)<br>

## Steps
- Creare il container dei todo e stampare i todo in pagina in base alle proprietà assegnate;
- Dare almeno ad un item la proprietà 'sbarrato';
- Creare una funzione per rimuovere l'item al click della x corrispondente;
- Aggiungere la condizione che l'elemento può essere eliminato solo se done = true altrimenti mostrare messaggio di errore;
- Inserirre un campo di input per aggiungere altri to do, e un bottone che andrà ad aggiungere il nuovo oggetto alla lista;
- Creare una funzione che verifichi se il testo inserito nell'imput abbia almeno 5 caratteri e se vero pusharlo nella lista dei to do come primo elemento, altrimenti mostrare messaggio di errore per inserire testo più lungo;
- Creare una funzione che dopo 2s faccia scomparire il messaggio di errore;
