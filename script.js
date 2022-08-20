function calcular(event) {
    event.preventDefault(); // Mostra o valor digitado nos input's.

    let alcoolInput = document.getElementById('alcool').value;
    let petrolInput = document.getElementById('petrol').value;
    let contentResult = document.getElementById('content-result'); // Variavel p/ mostrar a section result.
    let textResult = document.getElementById('text-result'); // Variavel mostra resultado que vai aparecer no text-result.

    let petrolSpan = document.getElementById('petrol-result');
    let alcoolSpan = document.getElementById('alcool-result');

    // Cálculo: alcool / petrol
    // If the result less that 0.7 use alcool.
    let calculo = (alcoolInput / petrolInput); // Variavel recebe o valor dos input's.
    // Condição:
    if (calculo < 0.7) {
        // Compensa alcool
        textResult.innerHTML = "It pays to use Alcool.";
    } else {
        // Compensa petrol
        textResult.innerHTML = "It pays to use Petrol.";
    }

    petrolSpan.innerHTML = "Petrol £ " + petrolInput;
    alcoolSpan.innerHTML = "Alcool £ " + alcoolInput;

    contentResult.classList.remove('hide'); //

}
