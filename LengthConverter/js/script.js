let fromLength;
let toLength;
let value = 0;

document.getElementById('next').addEventListener("click", function() {
    fromLength = document.getElementById('fromLength').value;
    toLength = document.getElementById('toLength').value;
    document.getElementById('value').style.display = "inline";
    document.getElementById('value').placeholder = "Enter " + fromLength;
});

document.getElementById('rightArrow').addEventListener("click", swap);
document.getElementById('downArrow').addEventListener("click", swap);

function swap() {
    fromLength = document.getElementById('fromLength').value;
    toLength = document.getElementById('toLength').value;
    document.getElementById('fromLength').value = toLength;
    document.getElementById('toLength').value = fromLength;
}

document.getElementById('value').addEventListener("input", function(event) {
    value = event.target.value;
    document.getElementById('inputUnit').innerHTML = fromLength + ":";
    document.getElementById('input').style.display = "inline-block";
    document.getElementById('convertedUnit').innerHTML = toLength + ":";
    document.getElementById('output').style.display = "inline-block";
    document.getElementById('inputValue').innerHTML = value;
    
    if(fromLength === "Centimeters") {
        if(toLength === "Centimeters") {
            document.getElementById('convertedValue').innerHTML = value;
        }else if(toLength === "Decimeters") {
            document.getElementById('convertedValue').innerHTML = (value / 10);
        }else if(toLength === "Feet") {
            document.getElementById('convertedValue').innerHTML = (value * 0.0328084);
        }else if(toLength === "Inches") {
            document.getElementById('convertedValue').innerHTML = (value * 0.3937008);
        }else if(toLength === "Kilometers") {
            document.getElementById('convertedValue').innerHTML = (value / 100000);
        }else if(toLength === "Meters") {
            document.getElementById('convertedValue').innerHTML = (value / 100);
        }else if(toLength === "Miles") {
            document.getElementById('convertedValue').innerHTML = (value * 0.000006213712);
        }else if(toLength === "Millimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 10);
        }else if(toLength === "Nautical miles") {
            document.getElementById('convertedValue').innerHTML = (value * 0.000005399568);
        }else if(toLength === "Yards") {
            document.getElementById('convertedValue').innerHTML = (value * 0.01093613);
        }
    }else if(fromLength === "Decimeters") {
        if(toLength === "Centimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 10);
        }else if(toLength === "Decimeters") {
            document.getElementById('convertedValue').innerHTML = value;
        }else if(toLength === "Feet") {
            document.getElementById('convertedValue').innerHTML = (value * 0.328084);
        }else if(toLength === "Inches") {
            document.getElementById('convertedValue').innerHTML = (value * 3.937008);
        }else if(toLength === "Kilometers") {
            document.getElementById('convertedValue').innerHTML = (value / 10000);
        }else if(toLength === "Meters") {
            document.getElementById('convertedValue').innerHTML = (value / 10);
        }else if(toLength === "Miles") {
            document.getElementById('convertedValue').innerHTML = (value * 0.00006213712);
        }else if(toLength === "Millimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 100);
        }else if(toLength === "Nautical miles") {
            document.getElementById('convertedValue').innerHTML = (value * 0.00005399568);
        }else if(toLength === "Yards") {
            document.getElementById('convertedValue').innerHTML = (value * 0.1093613);
        }
    }else if(fromLength === "Feet") {
        if(toLength === "Centimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 30.48);
        }else if(toLength === "Decimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 3.048);
        }else if(toLength === "Feet") {
            document.getElementById('convertedValue').innerHTML = value;
        }else if(toLength === "Inches") {
            document.getElementById('convertedValue').innerHTML = (value * 12);
        }else if(toLength === "Kilometers") {
            document.getElementById('convertedValue').innerHTML = (value * 0.0003048);
        }else if(toLength === "Meters") {
            document.getElementById('convertedValue').innerHTML = (value * 0.3048);
        }else if(toLength === "Miles") {
            document.getElementById('convertedValue').innerHTML = (value * 0.0001893939);
        }else if(toLength === "Millimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 304.8);
        }else if(toLength === "Nautical miles") {
            document.getElementById('convertedValue').innerHTML = (value * 0.0001645788);
        }else if(toLength === "Yards") {
            document.getElementById('convertedValue').innerHTML = (value * 0.3333333);
        }
    }else if(fromLength === "Inches") {
        if(toLength === "Centimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 2.54);
        }else if(toLength === "Decimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 0.254);
        }else if(toLength === "Feet") {
            document.getElementById('convertedValue').innerHTML = (value * 0.08333333);
        }else if(toLength === "Inches") {
            document.getElementById('convertedValue').innerHTML = value;
        }else if(toLength === "Kilometers") {
            document.getElementById('convertedValue').innerHTML = (value * 0.0000254);
        }else if(toLength === "Meters") {
            document.getElementById('convertedValue').innerHTML = (value * 0.0254);
        }else if(toLength === "Miles") {
            document.getElementById('convertedValue').innerHTML = (value * 0.00001578283);
        }else if(toLength === "Millimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 25.4);
        }else if(toLength === "Nautical miles") {
            document.getElementById('convertedValue').innerHTML = (value * 0.0000137149);
        }else if(toLength === "Yards") {
            document.getElementById('convertedValue').innerHTML = (value * 0.02777778);
        }
    }else if(fromLength === "Kilometers") {
        if(toLength === "Centimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 100000);
        }else if(toLength === "Decimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 10000);
        }else if(toLength === "Feet") {
            document.getElementById('convertedValue').innerHTML = (value * 3280.84);
        }else if(toLength === "Inches") {
            document.getElementById('convertedValue').innerHTML = (value * 39370.08);
        }else if(toLength === "Kilometers") {
            document.getElementById('convertedValue').innerHTML = value;
        }else if(toLength === "Meters") {
            document.getElementById('convertedValue').innerHTML = (value * 1000);
        }else if(toLength === "Miles") {
            document.getElementById('convertedValue').innerHTML = (value * 0.6213712);
        }else if(toLength === "Millimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 1000000);
        }else if(toLength === "Nautical miles") {
            document.getElementById('convertedValue').innerHTML = (value * 0.5399568);
        }else if(toLength === "Yards") {
            document.getElementById('convertedValue').innerHTML = (value * 1093.613);
        }
    }else if(fromLength === "Meters") {
        if(toLength === "Centimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 100);
        }else if(toLength === "Decimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 10);
        }else if(toLength === "Feet") {
            document.getElementById('convertedValue').innerHTML = (value * 3.28084);
        }else if(toLength === "Inches") {
            document.getElementById('convertedValue').innerHTML = (value * 39.37008);
        }else if(toLength === "Kilometers") {
            document.getElementById('convertedValue').innerHTML = (value / 1000);
        }else if(toLength === "Meters") {
            document.getElementById('convertedValue').innerHTML = value;
        }else if(toLength === "Miles") {
            document.getElementById('convertedValue').innerHTML = (value * 0.0006213712);
        }else if(toLength === "Millimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 1000);
        }else if(toLength === "Nautical miles") {
            document.getElementById('convertedValue').innerHTML = (value * 0.0005399568);
        }else if(toLength === "Yards") {
            document.getElementById('convertedValue').innerHTML = (value * 1.093613);
        }
    }else if(fromLength === "Miles") {
        if(toLength === "Centimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 160934.4);
        }else if(toLength === "Decimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 16093.44);
        }else if(toLength === "Feet") {
            document.getElementById('convertedValue').innerHTML = (value * 5280);
        }else if(toLength === "Inches") {
            document.getElementById('convertedValue').innerHTML = (value * 63360);
        }else if(toLength === "Kilometers") {
            document.getElementById('convertedValue').innerHTML = (value * 1.609344);
        }else if(toLength === "Meters") {
            document.getElementById('convertedValue').innerHTML = (value * 1609.344);
        }else if(toLength === "Miles") {
            document.getElementById('convertedValue').innerHTML = value;
        }else if(toLength === "Millimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 1609344);
        }else if(toLength === "Nautical miles") {
            document.getElementById('convertedValue').innerHTML = (value * 0.8689762);
        }else if(toLength === "Yards") {
            document.getElementById('convertedValue').innerHTML = (value * 1760);
        }
    }else if(frommLength === "Millimeters") {
        if(toLength === "Centimeters") {
            document.getElementById('convertedValue').innerHTML = (value / 10);
        }else if(toLength === "Decimeters") {
            document.getElementById('convertedValue').innerHTML = (value / 100);
        }else if(toLength === "Feet") {
            document.getElementById('convertedValue').innerHTML = (value * 0.00328084);
        }else if(toLength === "Inches") {
            document.getElementById('convertedValue').innerHTML = (value * 0.03937008);
        }else if(toLength === "Kilometers") {
            document.getElementById('convertedValue').innerHTML = (value / 1000000);
        }else if(toLength === "Meters") {
            document.getElementById('convertedValue').innerHTML = (value / 1000);
        }else if(toLength === "Miles") {
            document.getElementById('convertedValue').innerHTML = (value * 0.0000006213712);
        }else if(toLength === "Millimeters") {
            document.getElementById('convertedValue').innerHTML = value;
        }else if(toLength === "Nautical miles") {
            document.getElementById('convertedValue').innerHTML = (value * 0.0000005399568);
        }else if(toLength === "Yards") {
            document.getElementById('convertedValue').innerHTML = (value * 0.001093613);
        }
    }else if(frommLength === "Nautical miles") {
        if(toLength === "Centimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 185200);
        }else if(toLength === "Decimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 18520);
        }else if(toLength === "Feet") {
            document.getElementById('convertedValue').innerHTML = (value * 6076.115);
        }else if(toLength === "Inches") {
            document.getElementById('convertedValue').innerHTML = (value * 72913.39);
        }else if(toLength === "Kilometers") {
            document.getElementById('convertedValue').innerHTML = (value * 1.852);
        }else if(toLength === "Meters") {
            document.getElementById('convertedValue').innerHTML = (value * 1852);
        }else if(toLength === "Miles") {
            document.getElementById('convertedValue').innerHTML = (value * 1.150779);
        }else if(toLength === "Millimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 1852000);
        }else if(toLength === "Nautical miles") {
            document.getElementById('convertedValue').innerHTML = value;
        }else if(toLength === "Yards") {
            document.getElementById('convertedValue').innerHTML = (value * 2025.372);
        }
    }else if(frommLength === "Yards") {
        if(toLength === "Centimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 91.44);
        }else if(toLength === "Decimeters") {
            document.getElementById('convertedValue').innerHTML = (value / 9.144);
        }else if(toLength === "Feet") {
            document.getElementById('convertedValue').innerHTML = (value * 3);
        }else if(toLength === "Inches") {
            document.getElementById('convertedValue').innerHTML = (value * 36);
        }else if(toLength === "Kilometers") {
            document.getElementById('convertedValue').innerHTML = (value * 0.0009144);
        }else if(toLength === "Meters") {
            document.getElementById('convertedValue').innerHTML = (value * 0.9144);
        }else if(toLength === "Miles") {
            document.getElementById('convertedValue').innerHTML = (value * 0.0005681818);
        }else if(toLength === "Millimeters") {
            document.getElementById('convertedValue').innerHTML = (value * 914.4);
        }else if(toLength === "Nautical miles") {
            document.getElementById('convertedValue').innerHTML = (value * 0.0004937365);
        }else if(toLength === "Yards") {
            document.getElementById('convertedValue').innerHTML = value;
        }
    }
});