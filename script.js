// Data de início - ALTERE AQUI PARA SUA DATA DESEJADA
// Formato: Ano, Mês (0-11), Dia, Hora, Minuto, Segundo
const dataInicio = new Date(2025, 8, 6, 9, 0, 0); // 1º de Janeiro de 2024

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    // Calcular tempo decorrido
    const segundos = Math.floor(diferenca / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    // Calcular valores restantes
    const segundosRestantes = segundos % 60;
    const minutosRestantes = minutos % 60;
    const horasRestantes = horas % 24;

    // Atualizar elementos na página
    document.getElementById('days').textContent = dias.toLocaleString();
    document.getElementById('hours').textContent = horasRestantes.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutosRestantes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = segundosRestantes.toString().padStart(2, '0');
}

// Atualizar contador a cada segundo
setInterval(atualizarContador, 1000);

// Executar uma vez ao carregar a página
atualizarContador();

// Adicionar efeito de fade-in ao carregar
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';

    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
});