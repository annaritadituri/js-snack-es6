<!--
TRACCIA

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando  template literal.
-->

-Creare un array di oggetti
--Usare il metodo map per creare un array solo con i valori di peso
---Creare una variabile per il valore della funzione minValue()
----Stampare il valore relativo alla chiave "nome" dell'oggetto con minor peso

<!--FUNZIONE minValue()-->
Prende in input un array
<!---->
-Impostare min = il valore più grande assegnabile ad un int
-Creare un ciclo for per gli elementi dell'array
    SE il peso[i] < min
        -min assumerà come nuovo valore il peso[i]
---Creare un ciclo while per ritrovare la posizione corrispondente al min
<!---->
Return : un oggetto in cui salviamo la posizione e il valore min