function calcularIdade() {
    const nascimento = new Date(2008, 2, 16, 17, 30, 21);
    const agora = new Date();

    let anos = agora.getFullYear() - nascimento.getFullYear();
    let meses = agora.getMonth() - nascimento.getMonth();
    let dias = agora.getDate() - nascimento.getDate();
    let horas = agora.getHours() - nascimento.getHours();
    let minutos = agora.getMinutes() - nascimento.getMinutes();
    let segundos = agora.getSeconds() - nascimento.getSeconds();

    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }

    if (minutos < 0) {
        minutos += 60;
        horas--;
    }

    if (horas < 0) {
        horas += 24;
        dias--;
    }

    if (dias < 0) {
        const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
        dias += mesAnterior.getDate();
        meses--;
    }

    if (meses < 0) {
        meses += 12;
        anos--;
    }

    document.getElementById("idade").textContent = 
        `Eu tenho ${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
}

setInterval(calcularIdade, 1000);
calcularIdade(); 