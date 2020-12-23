export function diferenciaYear(year) {
    return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
    let incremento;
    switch (marca) {
        case 'americano':
            incremento = 1.15;
            break;
    
        case 'asiatico':
            incremento = 1.05;
            break;

        case 'europeo':
            incremento = 1.30;
            break;

        default:
            break;
    }
    return incremento;
}

export function calcularPlan(plan) {
    let incremento;

    plan === 'basico' ? incremento = 1.20 : incremento = 1.50;

    return incremento;
}

export function primeraMayuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}