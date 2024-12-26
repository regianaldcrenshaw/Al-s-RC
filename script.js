const inventory = {
    "Lighting Controller": {"Copper Wire": 10, "Plastic": 10},
    "Body kit": {"Fibreglass": 30, "Steel": 5},
    "Respray kit": {"Paint": 1, "Aluminum": 3},
    "Vehicle wheels": {"Rubber": 40, "Aluminum": 50},
    "Cleaning Kit": {"Water gallon": 2, "Soap": 2},
    "Performance Parts": {"Iron": 100, "Steel": 100},
    "Engine Oil": {"Crude oil": 10, "Conventional oil": 10},
    "Tire Replacement": {"Rubber": 10, "Copper Wire": 2},
    "Clutch Replacement": {"Copper": 5, "Steel": 5, "Iron": 5},
    "Air Filter": {"Plastic": 10, "Barring": 1, "Filter": 1},
    "Spark Plug": {"Copper": 2, "Ceramic": 2, "Steel Wire": 2},
    "Suspension parts": {"Steel": 5, "Aluminium": 5, "Rubber": 5},
    "V6 Engine": {"Steel": 40, "Iron": 40, "Barring": 2, "Filter": 2, "Copper Wire": 20, "Gears": 10, "Bolts": 20, "Nuts": 20},
    "I4 Engine": {"Steel": 20, "Iron": 20, "Barring": 1, "Filter": 1, "Copper Wire": 10, "Gears": 5, "Bolts": 10, "Nuts": 10},
    "V8 Engine": {"Steel": 120, "Iron": 120, "Barring": 6, "Filter": 6, "Copper Wire": 80, "Gears": 60, "Bolts": 80, "Nuts": 80},
    "V12 Engine": {"Steel": 400, "Iron": 400, "Barring": 16, "Filter": 12, "Copper Wire": 160, "Gears": 100, "Bolts": 160, "Nuts": 160},
    "Turbo Charger": {"Aluminium": 50, "Barring": 1},
    "EV Motor": {"Aluminium": 15, "Barring": 1},
    "EV Battery": {"Lithium": 50, "Aluminium": 5, "Copper Wire": 5},
    "EV Coolant": {"Water Gallon": 20, "Mono-Ethelyne Glycol": 30},
    "AWD Drivetrain": {"Carbon": 10, "Gears": 5, "Steel": 5},
    "RWD Drivetrain": {"Carbon": 10, "Gears": 5, "Steel": 5},
    "FWD Drivetrain": {"Carbon": 10, "Gears": 5, "Steel": 5},
    "Slick tires": {"Rubber": 150, "Copper Wires": 60},
    "Semi Slick Tires": {"Rubber": 150, "Copper Wires": 50},
    "Offroad Tires": {"Rubber": 150, "Copper Wires": 50},
    "Drift Tuning Kit": {"Iron": 200, "Barring": 15, "Bolts": 20, "Nuts": 20, "Gears": 25, "Steel": 400},
    "Stance Kit": {"Steel": 40, "Aluminum": 50, "Rubber": 15},
    "Tire Smoke Kit": {"Dye": 100, "Rubber": 50},
    "Extras kit": {"Plastic": 50},
    "Repair Kit": {"Bolts": 10, "Nuts": 10, "Pliers": 1, "Screwdriver": 1},
    "Duct Tape": {"Glue": 10, "Rubber": 10},
    "Brakepad Replacement": {"Ceramic": 2, "Rubber": 2, "Fiberglass": 1},
    "Ceramic Brakes": {"Ceramic": 20, "Rubber": 30, "Fiberglass": 25},
    "Nuts": {"Iron": 1},
    "Bolts": {"Iron": 1},
    "Copper Wire": {"Copper": 1},
    "Steel Wire": {"Steel": 1},
    "Barring": {"Steel": 1},
    "Gear": {"Iron": 1},
    "Filter": {"Plastic": 1, "Steel": 1, "Carbon": 1}
};

document.addEventListener("DOMContentLoaded", function() {
    const itemList = document.getElementById("item-list");
    const materialList = document.getElementById("material-list");
    const clearButton = document.getElementById("clear-button");

    itemList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            const selectedItem = event.target.getAttribute("data-item");
            highlightSelectedItem(event.target);
            displayMaterials(selectedItem);
        }
    });

    clearButton.addEventListener("click", function() {
        clearMaterials();
        clearSelection();
    });

    function highlightSelectedItem(itemElement) {
        const items = itemList.getElementsByTagName("li");
        for (let item of items) {
            item.classList.remove("selected");
        }
        itemElement.classList.add("selected");
    }

    function displayMaterials(item) {
        materialList.innerHTML = "";
        if (inventory[item]) {
            for (let material in inventory[item]) {
                const listItem = document.createElement("li");
                listItem.textContent = `${material}: ${inventory[item][material]}`;
                materialList.appendChild(listItem);
            }
        }
    }

    function clearMaterials() {
        materialList.innerHTML = "";
    }

    function clearSelection() {
        const items = itemList.getElementsByTagName("li");
        for (let item of items) {
            item.classList.remove("selected");
        }
    }
});
