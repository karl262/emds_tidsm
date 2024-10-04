// agregamos elementos al DOM
const form = document.getElementById('converterForm');
const categorySelect = document.getElementById('category');
const fromValue = document.getElementById('fromValue');
const toValue = document.getElementById('toValue');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const switchButton = document.getElementById('switchUnits');
const historyList = document.getElementById('historyList');

// se configuran las unidades de acuerdo a la categoría
const units = {
    length: ['metros', 'kilómetros', 'centímetros', 'milímetros', 'pulgadas', 'pies', 'yardas'],
    weight: ['kilogramos', 'gramos', 'miligramos', 'libras', 'onzas'],
    temperature: ['Celsius', 'Fahrenheit', 'Kelvin'],
    volume: ['litros', 'mililitros', 'galones', 'onzas líquidas']
};

// se inicializa el conversor

function init() {
    // Configurar eventos
    categorySelect.addEventListener('change', updateUnitSelectors); // se actualizan las unidades de acuerdo a la categoría
    fromValue.addEventListener('input', performConversion); // se realiza la conversión de acuerdo a la unidad base
    fromUnit.addEventListener('change', performConversion); // se realiza la conversión de acuerdo a la unidad entrante
    toUnit.addEventListener('change', performConversion);   // se realiza la conversión de acuerdo a la unidad resultante
    switchButton.addEventListener('click', switchUnits);     // se intercambian las unidades de acuerdo a la categoría
    updateUnitSelectors();                                 // se actualizan las unidades
}

