function calculateCarbonFootprints() {
    var dailyUsage = parseFloat(document.getElementById('dailyUsageMobile').value);
    var weeklyUsage = parseFloat(document.getElementById('weeklyUsageMobile').value);
    var monthlyUsage = parseFloat(document.getElementById('monthlyUsageMobile').value);

    var totalUsage = dailyUsage * 7 * 4 + weeklyUsage * 4 + monthlyUsage;

    var resultElement = document.getElementById('resultMobile');

    var message = "You are using your mobile device for a total of " + totalUsage + " hours per month. ";

    if (totalUsage > 100) {
        message += "You are using your mobile device excessively. Consider reducing your usage to reduce your carbon footprint.";
    } else if (totalUsage > 50) {
        message += "You are using your mobile device moderately. You could still reduce your usage to lower your carbon footprint.";
    } else {
        message += "You are using your mobile device responsibly. Keep up the good work!";
    }

    resultElement.innerHTML = "<div class='alert alert-info'>" + message + "</div>";
}
