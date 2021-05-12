let fromWeight;
let toWeight;
let input;
let inputValue;

input = document.getElementById('value');

document.getElementById('next').addEventListener("click", function() {
    fromWeight = document.getElementById('fromWeight').value;
    toWeight = document.getElementById('toWeight').value;
    document.getElementById('value').style.display = "inline";
    document.getElementById('value').placeholder = "Enter " + fromWeight;
    inputValue = input.value;
    if(inputValue) {
        convert(inputValue);
    }
});

document.getElementById('rightArrow').addEventListener("click", swap);
document.getElementById('downArrow').addEventListener("click", swap);

function swap() {
    fromWeight = document.getElementById('fromWeight').value;
    toWeight = document.getElementById('toWeight').value;
    document.getElementById('fromWeight').value = toWeight;
    document.getElementById('toWeight').value = fromWeight;
}

var convertByInput = function(event) {
    convert(event.target.value);
}

function convert(value) {
    document.getElementById('inputUnit').innerHTML = fromWeight + ":";
    document.getElementById('input').style.display = "inline-block";
    document.getElementById('convertedUnit').innerHTML = toWeight + ":";
    document.getElementById('output').style.display = "inline-block";
    document.getElementById('inputValue').innerHTML = value;
    
    if(fromWeight === "Metric tons") {
        if(toWeight === "Metric tons") {
            document.getElementById('convertedValue').innerHTML = value;
        }else if(toWeight === "Kilograms") {
            document.getElementById('convertedValue').innerHTML = (value * 1000);
        }else if(toWeight === "Grams") {
            document.getElementById('convertedValue').innerHTML = (value * 1000000);
        }else if(toWeight === "Milligrams") {
            document.getElementById('convertedValue').innerHTML = (value * (1e+9));
        }else if(toWeight === "Micrograms") {
            document.getElementById('convertedValue').innerHTML = (value * (1e+12));
        }else if(toWeight === "Pounds") {
            document.getElementById('convertedValue').innerHTML = (value * 2204.623);
        }else if(toWeight === "Ounces") {
            document.getElementById('convertedValue').innerHTML = (value * 35273.96);
        }
    }else if(fromWeight === "Kilograms") {
        if(toWeight === "Metric tons") {
            document.getElementById('convertedValue').innerHTML = (value / 1000);
        }else if(toWeight === "Kilograms") {
            document.getElementById('convertedValue').innerHTML = value;
        }else if(toWeight === "Grams") {
            document.getElementById('convertedValue').innerHTML = (value * 1000);
        }else if(toWeight === "Milligrams") {
            document.getElementById('convertedValue').innerHTML = (value * 1000000);
        }else if(toWeight === "Micrograms") {
            document.getElementById('convertedValue').innerHTML = (value * (1e+9));
        }else if(toWeight === "Pounds") {
            document.getElementById('convertedValue').innerHTML = (value * 2.204623);
        }else if(toWeight === "Ounces") {
            document.getElementById('convertedValue').innerHTML = (value * 35.27396);
        }
    }else if(fromWeight === "Grams") {
        if(toWeight === "Metric tons") {
            document.getElementById('convertedValue').innerHTML = (value / 1000000);
        }else if(toWeight === "Kilograms") {
            document.getElementById('convertedValue').innerHTML = (value / 1000);
        }else if(toWeight === "Grams") {
            document.getElementById('convertedValue').innerHTML = value;
        }else if(toWeight === "Milligrams") {
            document.getElementById('convertedValue').innerHTML = (value * 1000);
        }else if(toWeight === "Micrograms") {
            document.getElementById('convertedValue').innerHTML = (value * 1000000);
        }else if(toWeight === "Pounds") {
            document.getElementById('convertedValue').innerHTML = (value * 0.002204623);
        }else if(toWeight === "Ounces") {
            document.getElementById('convertedValue').innerHTML = (value * 0.03527396);
        }
    }else if(fromWeight === "Milligrams") {
        if(toWeight === "Metric tons") {
            document.getElementById('convertedValue').innerHTML = (value / (1e+9));
        }else if(toWeight === "Kilograms") {
            document.getElementById('convertedValue').innerHTML = (value / 100000);
        }else if(toWeight === "Grams") {
            document.getElementById('convertedValue').innerHTML = (value / 1000);
        }else if(toWeight === "Milligrams") {
            document.getElementById('convertedValue').innerHTML = value;
        }else if(toWeight === "Micrograms") {
            document.getElementById('convertedValue').innerHTML = (value * 1000);
        }else if(toWeight === "Pounds") {
            document.getElementById('convertedValue').innerHTML = (value * 0.000002204623);
        }else if(toWeight === "Ounces") {
            document.getElementById('convertedValue').innerHTML = (value * 0.00003527396);
        }
    }else if(fromWeight === "Micrograms") {
        if(toWeight === "Metric tons") {
            document.getElementById('convertedValue').innerHTML = (value / (1e+12));
        }else if(toWeight === "Kilograms") {
            document.getElementById('convertedValue').innerHTML = (value / (1e+9));
        }else if(toWeight === "Grams") {
            document.getElementById('convertedValue').innerHTML = (value / 1000000);
        }else if(toWeight === "Milligrams") {
            document.getElementById('convertedValue').innerHTML = (value / 1000);
        }else if(toWeight === "Micrograms") {
            document.getElementById('convertedValue').innerHTML = value;
        }else if(toWeight === "Pounds") {
            document.getElementById('convertedValue').innerHTML = (value * (2.204623e-9));
        }else if(toWeight === "Ounces") {
            document.getElementById('convertedValue').innerHTML = (value * (3.527396e-8));
        }
    }else if(fromWeight === "Pounds") {
        if(toWeight === "Metric tons") {
            document.getElementById('convertedValue').innerHTML = (value * 0.0004535924);
        }else if(toWeight === "Kilograms") {
            document.getElementById('convertedValue').innerHTML = (value * 0.4535924);
        }else if(toWeight === "Grams") {
            document.getElementById('convertedValue').innerHTML = (value * 453.5924);
        }else if(toWeight === "Milligrams") {
            document.getElementById('convertedValue').innerHTML = (value * 453592.4);
        }else if(toWeight === "Micrograms") {
            document.getElementById('convertedValue').innerHTML = (value * 4.535924e+8);
        }else if(toWeight === "Pounds") {
            document.getElementById('convertedValue').innerHTML = value;
        }else if(toWeight === "Ounces") {
            document.getElementById('convertedValue').innerHTML = (value * 16);
        }
    }else if(fromWeight === "Ounces") {
        if(toWeight === "Metric tons") {
            document.getElementById('convertedValue').innerHTML = (value * 0.00002834952);
        }else if(toWeight === "Kilograms") {
            document.getElementById('convertedValue').innerHTML = (value * 0.02834952);
        }else if(toWeight === "Grams") {
            document.getElementById('convertedValue').innerHTML = (value * 28.34952);
        }else if(toWeight === "Milligrams") {
            document.getElementById('convertedValue').innerHTML = (value * 28349.52);
        }else if(toWeight === "Micrograms") {
            document.getElementById('convertedValue').innerHTML = (value * 2.834952e+7);
        }else if(toWeight === "Pounds") {
            document.getElementById('convertedValue').innerHTML = (value * 0.0625);
        }else if(toWeight === "Ounces") {
            document.getElementById('convertedValue').innerHTML = value;
        }
    }
};

input.addEventListener("input", convertByInput);