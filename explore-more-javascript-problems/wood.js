// Write a program to find the total wood required for chair, table and beds. Take the number of the each furniture by using parameters/arguments.

function woodCalculator(tableQuanity, chairQuantity, bedQuantity){
    const tableWoodRequired = 5;
    const ChairWoodRequired = 3;
    const bedWoodRequired = 10;

    const tableWood = tableQuanity * tableWoodRequired;
    const chairWood = chairQuantity * ChairWoodRequired;
    const bedWood = bedQuantity * bedWoodRequired;

    const totalWood = tableWood + chairWood + bedWood;
    return totalWood;
}

const totalWoodRequired = woodCalculator(5, 2, 8);
console.log("Total Wood Required for the furnitures:", totalWoodRequired);