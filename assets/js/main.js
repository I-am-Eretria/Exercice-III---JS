/* 
En cliquant sur n'importe quel carré, celui-ci rétrécit de 10%, décrit une rotation de 360 degrés et 
prend un fond jaune. En recliquant dessus, le carré reprend ses propriétés initiales.
*/


const squares = document.querySelectorAll(".carres"); // définit un tableau squares avec pour éléments les balises ayant pour classe respective carres

// Ajout d'un écouteur d'événement pour chaque carré
squares.forEach(square => {
    square.addEventListener('click', () => { 
    // Add/remove the active class to the current/clicked square
    square.classList.toggle("active");
    });
});

/* Explications pour () => { ... } :

Ceci est une fonction fléchée (ou fonction anonyme) qui sera exécutée lorsque l'événement se produit.
Le code à l'intérieur des accolades { ... } sera exécuté lorsque l'élément sera cliqué (ici pour chaque carré)

*/