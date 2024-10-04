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



