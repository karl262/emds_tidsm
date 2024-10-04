// Definición de un objeto que contiene los factores de conversión entre diferentes unidades
const conversionFactors = {
    // Categoría de longitud (length)
    length: {
        // Factores de conversión desde metros a otras unidades de longitud
        metros: {
            kilómetros: 0.001,        // 1 metro es igual a 0.001 kilómetros
            centímetros: 100,         // 1 metro es igual a 100 centímetros
            milímetros: 1000,         // 1 metro es igual a 1000 milímetros
            pulgadas: 39.3701,        // 1 metro es igual a 39.3701 pulgadas
            pies: 3.28084,            // 1 metro es igual a 3.28084 pies
            yardas: 1.09361           // 1 metro es igual a 1.09361 yardas
        },
        // Factores de conversión desde kilómetros a otras unidades de longitud
        kilómetros: {
            metros: 1000,             // 1 kilómetro es igual a 1000 metros
            centímetros: 100000,      // 1 kilómetro es igual a 100000 centímetros
            milímetros: 1000000,      // 1 kilómetro es igual a 1000000 milímetros
            pulgadas: 39370.1,        // 1 kilómetro es igual a 39370.1 pulgadas
            pies: 3280.84,            // 1 kilómetro es igual a 3280.84 pies
            yardas: 1093.61           // 1 kilómetro es igual a 1093.61 yardas
        }
        // Otros factores de conversión dentro de la categoría de longitud
        // se pueden calcular automáticamente utilizando reglas inversas
    },

    // Categoría de peso (weight)
    weight: {
        // Factores de conversión desde kilogramos a otras unidades de peso
        kilogramos: {
            gramos: 1000,             // 1 kilogramo es igual a 1000 gramos
            miligramos: 1000000,      // 1 kilogramo es igual a 1000000 miligramos
            libras: 2.20462,          // 1 kilogramo es igual a 2.20462 libras
            onzas: 35.274             // 1 kilogramo es igual a 35.274 onzas
        }
        // Otros factores de conversión dentro de la categoría de peso
        // se pueden calcular automáticamente
    },

    // Categoría de volumen (volume)
    volume: {
        // Factores de conversión desde litros a otras unidades de volumen
        litros: {
            mililitros: 1000,         // 1 litro es igual a 1000 mililitros
            galones: 0.264172,        // 1 litro es igual a 0.264172 galones
            'onzas líquidas': 33.814  // 1 litro es igual a 33.814 onzas líquidas
        }
        // Otros factores de conversión dentro de la categoría de volumen
        // se pueden calcular automáticamente
    }
};

// Funciones especiales para temperatura
const temperatureConversions = {
    // Conversiones desde Celsius a otras unidades de temperatura
    Celsius: {
        // Convertir de Celsius a Fahrenheit
        Fahrenheit: (c) => (c * 9 / 5) + 32, // Fórmula: (°C × 9/5) + 32
        // Convertir de Celsius a Kelvin
        Kelvin: (c) => c + 273.15          // Fórmula: °C + 273.15
    },
    // Conversiones desde Fahrenheit a otras unidades de temperatura
    Fahrenheit: {
        // Convertir de Fahrenheit a Celsius
        Celsius: (f) => (f - 32) * 5 / 9,    // Fórmula: (°F - 32) × 5/9
        // Convertir de Fahrenheit a Kelvin
        Kelvin: (f) => (f - 32) * 5 / 9 + 273.15 // Fórmula: (°F - 32) × 5/9 + 273.15
    },
    // Conversiones desde Kelvin a otras unidades de temperatura
    Kelvin: {
        // Convertir de Kelvin a Celsius
        Celsius: (k) => k - 273.15,        // Fórmula: K - 273.15
        // Convertir de Kelvin a Fahrenheit
        Fahrenheit: (k) => (k - 273.15) * 9 / 5 + 32 // Fórmula: (K - 273.15) × 9/5 + 32
    }
};

// Función principal de conversión
function convert(value, fromUnit, toUnit, category) {
    // Si la unidad de origen es igual a la unidad de destino, no es necesario convertir, retornar el mismo valor
    if (fromUnit === toUnit) return value;

    // Si la categoría es 'temperature', usar las funciones especiales para la conversión de temperatura
    if (category === 'temperature') {
        // Retornar el resultado de la conversión utilizando las funciones definidas en `temperatureConversions`
        return temperatureConversions[fromUnit][toUnit](value);
    }

    // Para otras categorías, como longitud, peso o volumen, usar factores de conversión estándar
    return convertWithFactors(value, fromUnit, toUnit, category);
}

function convertWithFactors(value, fromUnit, toUnit, category) {
    // obtiene los factores de conversión de la categoría
    const factors = conversionFactors[category];

    // Conversión directa si existe un factor de conversión entre las unidades de origen y destino
    if (factors[fromUnit] && factors[fromUnit][toUnit]) {
        // Multiplicar el valor por el factor de conversión correspondiente
        return value * factors[fromUnit][toUnit];
    }

    // Conversión inversa si existe el factor de conversión en sentido contrario
    if (factors[toUnit] && factors[toUnit][fromUnit]) {
        // Dividir el valor por el factor de conversión inverso
        return value / factors[toUnit][fromUnit];
    }

    // Si no hay conversión directa, convertir a través de una unidad base
    const baseUnit = Object.keys(factors)[0]; // Usar la primera unidad de la categoría como la unidad base

    // Si la unidad de origen es la unidad base
    if (fromUnit === baseUnit) {
        // Multiplicar el valor por el factor de conversión de la base a la unidad de destino
        return value * factors[baseUnit][toUnit];
        // Si la unidad de destino es la unidad base
    } else if (toUnit === baseUnit) {
        // Dividir el valor por el factor de conversión de la unidad de origen a la base
        return value / factors[baseUnit][fromUnit];
    } else {
        // Si ninguna de las unidades es la base, primero convertir a la unidad base
        const toBase = value / factors[baseUnit][fromUnit];
        // Luego, convertir de la unidad base a la unidad de destino
        return toBase * factors[baseUnit][toUnit];
    }
}
