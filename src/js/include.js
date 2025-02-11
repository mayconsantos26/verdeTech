document.addEventListener('DOMContentLoaded', function () {
    // Carregar Header
    fetch('../pages/components/header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header').innerHTML = data);

    // Carregar Footer
    fetch('../pages/components/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML = data);
});