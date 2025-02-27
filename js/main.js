const pulsanteSaluta = document.getElementById('saluta')

pulsanteSaluta.addEventListener('click', saluta)

function saluta () {
    let nome = window.prompt('Piacere sono Federico, tu chi sei?')
    if (nome != null && nome != '') {
        window.alert('Ciao ' + nome + ", piacere di conoscerti! Non vedo l'ora di affrontare il corso!")
    } else {
        window.alert("Anche se non so il tuo nome non vedo l'ora di affrontare il corso!")
    }
}