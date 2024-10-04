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

function updateUnitSelectors() {
    // Obtener categoría seleccionada
    const category = categorySelect.value; 
    const categoryUnits = units[category];
    
    // Limpiar selectores
    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';
    
    // Poblar selectores con las unidades de la categoría
    categoryUnits.forEach(unit => {
        fromUnit.add(new Option(unit, unit));
        toUnit.add(new Option(unit, unit));
    });
    
    // Establecer valores por defecto diferentes para cada categoría
    if (categoryUnits.length > 1) {
        toUnit.selectedIndex = 1;
    }
    
    performConversion();    // se realiza la conversión
}

// Realizar conversión
function performConversion() {  
    if (!validateInput(fromValue.value)) {  // validar datos de entrada
        toValue.value = '';                  // si el valor no es válido se limpia y no se hace la conversión
        return;
    }

    const value = parseFloat(fromValue.value);  // convierte a flotante el numero de entrada

    // Obtener las unidades seleccionadas
    const category = categorySelect.value;
    const from = fromUnit.value;
    const to = toUnit.value;

    const result = convert(value, from, to, category);  // se realiza la conversión pasando el valor para obtener el resultado
    toValue.value = result.toFixed(4);                  // se redondea el resultado a 4 decimales
    
    addToHistory(value, from, to, result);               // se agrega la conversión a la lista de historial
}

// Agregar al historial
function addToHistory(fromVal, fromUnit, toUnit, toVal) {
    // Crear elemento para el historial
    const historyItem = document.createElement('li');
    historyItem.className = 'list-group-item';  // se agrega una clase para darle estilos
    historyItem.textContent = `${fromVal} ${fromUnit} = ${toVal.toFixed(4)} ${toUnit}`;  //  se agrega el contenido del <li> con la conversión realizada
    
    // Mantener solo los últimos 5 items
    if (historyList.children.length >= 5) {
        historyList.removeChild(historyList.lastChild);     // si ya hay 5 o más elementos en la lista, eliminar el último
    }
    
    historyList.insertBefore(historyItem, historyList.firstChild);  // agregar el <li> como primer elemento de la lista
}

// Intercambiar unidades
function switchUnits() {
    const tempUnit = fromUnit.value;     // guarda temporalmente el valor de la unidad de origen
    fromUnit.value = toUnit.value;       //se asigna el valor de la unidad de destino a la unidad de origen
    toUnit.value = tempUnit;             // se asigna el valor temporal de la unidad de origen a la unidad de destino
    performConversion();                // se realiza la conversión de acuerdo a las nuevas unidades intercambiadas
}

document.addEventListener('DOMContentLoaded', init);  // se inicializa el conversor al cargar el DOM totalmente