
// Creare un oggetto palla che abbia le seguenti proprietà.
/* Nome = palla
Peso = 10 */  

/* var palla = {
    nome : "palla",
    peso : 120,
} */





//Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla. 

/* var user = Number(prompt("modifica il peso della palla"));
console.log(user);  */



/* Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
Stampare a schermo la bici con peso minore.
 */


/* var bike = [
    {
    nome : "atala",
    peso : 50,
    },
    
    {
    nome : "Aclima",
    peso : 40,
    },

    {
    nome : "Basil",
    peso : 20,
    }
]  
console.log(bike);



var pesoMinore = bike[0].peso;
for (var i = 0; i < bike.length; i++) {
    if(bike[i].peso < pesoMinore){
      pesoMinore = bike[i].peso;   
    }   
    
}

console.log(pesoMinore); */




/* Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.
(ripassiamo il Teorema di Pitagora ;D )
 */ 


/* var triangolo = {
    base : 4,
    altezza : 8,
 } */
 //usa math.squirt




/* Creare un array di oggetti di squadre di calcio. 
Ogni squadra avrà diverse proprietà: 
nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 */ 



 var squadre = [
    {
    nome : "Juventus",
    punti : "",
    falli : "" ,
    },
    
    {
    nome : "Milan",
    punti : "",
    falli : "",
    },

    {
    nome : "Inter",
    punti : "",
    falli : "",
    }
] 
console.log(squadre);


/* Generare numeri random al posto degli 0 nelle proprietà:
punti fatti e falli subiti
 */ 

for (var i = 0; i < 5; i++) {
    squadre[i].punti = Math.floor((Math.random() + 10) + 1);
    squadre[i].falli = Math.floor((Math.random() * 10) + 1);
    
} 
