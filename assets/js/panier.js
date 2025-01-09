function checkQuantity(input) {
    if (input.value == 0) {
        const produit = input.closest('.produit');
        produit.remove();
    }
}