// Function for the calculation for carbon footprint
function calculateComputerCarbonFootprint() {
    // Get the values of computer/laptop usage hours for day, week, and month
    let dailyHours = parseFloat(document.getElementById("dailyComputerUsage").value);
    let weeklyHours = parseFloat(document.getElementById("weeklyComputerUsage").value);
    let monthlyHours = parseFloat(document.getElementById("monthlyComputerUsage").value);

    // Calculation of the carbon footprint for computer devices
    // Example value for carbon footprint per hour of usage: 0.02 kilograms
    let carbonFootprintPerHour = 0.02;

    // Calculation of the carbon footprint for each period
    let dailyCarbonFootprint = dailyHours * carbonFootprintPerHour;
    let weeklyCarbonFootprint = weeklyHours * carbonFootprintPerHour * 7; // Multiply by 7 to get weekly footprint (7 days a week)
    let monthlyCarbonFootprint = monthlyHours * carbonFootprintPerHour * 30; // Multiply by 30 to get monthly footprint (30 days a month)

    // Calculation of the number of trees that can offset the carbon footprint
    // Each tree can absorb approximately (depending on the type of tree species) 22.6 kilograms of CO2 per year
    let treesPlantedDaily = dailyCarbonFootprint / 22.6;
    let treesPlantedWeekly = weeklyCarbonFootprint / 22.6;
    let treesPlantedMonthly = monthlyCarbonFootprint / 22.6;

    // Display the result with recommendations to reduce carbon footprint
    let resultElement = document.getElementById("computerResult");
    resultElement.innerHTML = "Your carbon footprint from computer usage:<br>";
    resultElement.innerHTML += "Daily: " + dailyCarbonFootprint.toFixed(2) + " kilograms of CO2<br>";
    resultElement.innerHTML += "Weekly: " + weeklyCarbonFootprint.toFixed(2) + " kilograms of CO2<br>";
    resultElement.innerHTML += "Monthly: " + monthlyCarbonFootprint.toFixed(2) + " kilograms of CO2<br><br>";
    resultElement.innerHTML += "To help build a better environment, consider planting trees:<br><br>";
    resultElement.innerHTML += "Daily: plant around " + Math.ceil(treesPlantedDaily) + " tree(s) per day<br>";
    resultElement.innerHTML += "Weekly: plant around " + Math.ceil(treesPlantedWeekly) + " tree(s) per week<br>";
    resultElement.innerHTML += "Monthly: plant around " + Math.ceil(treesPlantedMonthly) + " tree(s) per month<br>";
}

// Function to calculate carbon footprint and provide recommendations for mobile devices
function calculateMobileCarbonFootprint() {
    // Get the values of mobile usage hours for day, week, and month
    let dailyHours = parseFloat(document.getElementById("dailyMobileUsage").value);
    let weeklyHours = parseFloat(document.getElementById("weeklyMobileUsage").value);
    let monthlyHours = parseFloat(document.getElementById("monthlyMobileUsage").value);

    // Calculation of the carbon footprint for mobile devices
    // Example value for carbon footprint per hour of usage: 0.01 kilograms
    let carbonFootprintPerHour = 0.01;

    // Calculation of the carbon footprint for each period
    let dailyCarbonFootprint = dailyHours * carbonFootprintPerHour;
    let weeklyCarbonFootprint = weeklyHours * carbonFootprintPerHour * 7; // Multiply by 7 to get weekly footprint
    let monthlyCarbonFootprint = monthlyHours * carbonFootprintPerHour * 30; // Multiply by 30 to get monthly footprint

    // Display the result with recommendations
    let resultElement = document.getElementById("mobileResult");
    resultElement.innerHTML = "Your carbon footprint from mobile device usage:<br>";
    resultElement.innerHTML += "Daily: " + dailyCarbonFootprint.toFixed(2) + " kilograms of CO2<br>";
    resultElement.innerHTML += "Weekly: " + weeklyCarbonFootprint.toFixed(2) + " kilograms of CO2<br>";
    resultElement.innerHTML += "Monthly: " + monthlyCarbonFootprint.toFixed(2) + " kilograms of CO2<br><br>";
    resultElement.innerHTML += "To reduce carbon footprint, consider using your mobile device less frequently.";
}

// Function to calculate carbon footprint and provide recommendations for tablet devices
function calculateTabletCarbonFootprint() {
    // Get the values of tablet usage hours for day, week, and month
    let dailyHours = parseFloat(document.getElementById("dailyTabletUsage").value);
    let weeklyHours = parseFloat(document.getElementById("weeklyTabletUsage").value);
    let monthlyHours = parseFloat(document.getElementById("monthlyTabletUsage").value);

    // Calculation of the carbon footprint for tablet devices
    // Example value for carbon footprint per hour of usage: 0.015 kilograms 
    let carbonFootprintPerHour = 0.015;

    // Calculation of the carbon footprint for each period
    let dailyCarbonFootprint = dailyHours * carbonFootprintPerHour;
    let weeklyCarbonFootprint = weeklyHours * carbonFootprintPerHour * 7; // Multiply by 7 to get weekly footprint
    let monthlyCarbonFootprint = monthlyHours * carbonFootprintPerHour * 30; // Multiply by 30 to get monthly footprint

    // Display the result with recommendations
    let resultElement = document.getElementById("tabletResult");
    resultElement.innerHTML = "Your carbon footprint from tablet device usage:<br>";
    resultElement.innerHTML += "Daily: " + dailyCarbonFootprint.toFixed(2) + " kilograms of CO2<br>";
    resultElement.innerHTML += "Weekly: " + weeklyCarbonFootprint.toFixed(2) + " kilograms of CO2<br>";
    resultElement.innerHTML += "Monthly: " + monthlyCarbonFootprint.toFixed(2) + " kilograms of CO2<br><br>";
    resultElement.innerHTML += "To reduce carbon footprint, consider watching fewer online videos on your tablet.";
}
