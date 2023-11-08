window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Calcola l'altezza del documento e l'altezza della finestra del browser
    var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Verifica se l'utente è vicino alla fine della pagina (considerando un offset di 10 pixel)
    if (documentHeight - (scrollPosition + windowHeight) < 10) {
        document.getElementById('footer').style.display = 'block'; // Mostra il footer
    } else {
        document.getElementById('footer').style.display = 'none'; // Nascondi il footer
    }
});