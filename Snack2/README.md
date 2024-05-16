<!--
TRACCIA

Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine  creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
-->

-Creare un array di oggetti
--Creare un loop for e assegnare a punti fatti e falli subiti un numero random con la funzione genIntRandom()
---Utilizzare il metodo map per creare un nuovo array in cui ci sono nome e falli subiti
----Stampare l'array appena creato

<!--FUNZIONE genIntRandom()-->
Prende in input due valori: min, max
<!---->
-Utilizzare la funzione Math.random per generare un numero compreso tra min e max (inclusi)
<!---->
Return : un numero random