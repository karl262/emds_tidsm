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
