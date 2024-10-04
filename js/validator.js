// Validación de entrada numérica
function validateInput(value) {
    // Verificar si el valor está vacío o es nulo
    if (value === '' || value === null) {
        return false;  // Si está vacío o es nulo, la entrada no es válida
    }

    // Convertir el valor a número de punto flotante
    const num = parseFloat(value);
    // Verificar si la conversión produjo un valor que no es un número
    if (isNaN(num)) {
        return false;  // Si no es un número válido, la entrada no es válida
    }

    // Verificar si el número es finito (no es infinito o NaN)
    if (!Number.isFinite(num)) {
        return false;  // Si no es finito, la entrada no es válida
    }

    // Verificar si el número está dentro de los límites seguros en JavaScript
    if (Math.abs(num) > Number.MAX_SAFE_INTEGER) {
        return false;  // Si excede el valor máximo seguro, la entrada no es válida
    }

    // Si pasa todas las validaciones anteriores, el valor es válido
    return true;
}

// Valida si un valor está dentro de un rango razonable
function validateRange(value, category) {
    switch (category) {
        case 'temperature':
            // Validar si la temperatura está dentro de un rango razonable
            // No se permiten temperaturas por debajo de -273.15 (cero absoluto) y un límite superior arbitrario (1 millón)
            return value >= -273.15 && value <= 1e6;

        case 'length':
        case 'weight':
        case 'volume':
            // Para las categorías de longitud, peso y volumen, solo se permiten valores positivos
            // Ya que estas medidas físicas no pueden ser negativas
            return value >= 0;

        default:
            // Si la categoría no es reconocida, devolver true (no aplicar restricciones de rango)
            return true;
    }
}

// Validación de precisión decimal
function validatePrecision(value) {
    // Convertir el valor a una cadena y dividirlo en dos partes: antes y después del punto decimal
    const decimals = value.toString().split('.')[1];
    
    // Si existe una parte decimal y tiene más de 10 decimales, retornar false (inválido)
    if (decimals && decimals.length > 10) {
        return false;
    }
    
    // Si no hay más de 10 decimales, el valor es válido y se retorna true
    return true;
}

