
// recupere dans tout les .quantite l'input de type number 
// met sur l'input un listner qui regarde les changement number


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.quantite input[type="number"]').forEach(input => {
        input.addEventListener('change', function() {
            checkQuantity(this);
        });
    });
});

// fonction regarde si input == O si 0 suprime produit
function checkQuantity(input) {
    if (input.value == 0){
        const produit = input.closest('.produit');
        produit.remove()
    }
}


//je veux recuperer le prix et la quantiter et afficher le total
const prix = document.querySelector('.prix p');
const quantite = document.querySelector('.quantite input[type="number"]');

quantite.addEventListener('input', () => {
    console.log(`Quantité actuelle : ${quantite.value}`);
});
