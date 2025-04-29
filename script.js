document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    calculateBtn.addEventListener('click', calculatePayments);
});

function calculatePayments() {
    // Get main meter values
    const prevMain = parseFloat(document.getElementById('previous-main').value) || 0;
    const currMain = parseFloat(document.getElementById('current-main').value) || 0;
    const billAmount = parseFloat(document.getElementById('bill-amount').value) || 0;
    
    // Get unit meter values
    const prevUnit1 = parseFloat(document.getElementById('previous-unit1').value) || 0;
    const currUnit1 = parseFloat(document.getElementById('current-unit1').value) || 0;
    const prevUnit2 = parseFloat(document.getElementById('previous-unit2').value) || 0;
    const currUnit2 = parseFloat(document.getElementById('current-unit2').value) || 0;
    const prevUnit3 = parseFloat(document.getElementById('previous-unit3').value) || 0;
    const currUnit3 = parseFloat(document.getElementById('current-unit3').value) || 0;
    
    // Calculate consumptions
    const mainConsumption = currMain - prevMain;
    const unit1Consumption = currUnit1 - prevUnit1;
    const unit2Consumption = currUnit2 - prevUnit2;
    const unit3Consumption = currUnit3 - prevUnit3;
    
    // Calculate common area consumption (main minus sum of units)
    const totalUnitsConsumption = unit1Consumption + unit2Consumption + unit3Consumption;
    const commonConsumption = mainConsumption - totalUnitsConsumption;
    
    // Calculate rate per cubic meter
    const ratePerCubic = billAmount / mainConsumption;
    
    // Calculate payments based on consumption
    const unit1Payment = unit1Consumption * ratePerCubic;
    const unit2Payment = unit2Consumption * ratePerCubic;
    const unit3Payment = unit3Consumption * ratePerCubic;
    const commonPayment = commonConsumption * ratePerCubic;
    
    // Divide common area payment equally among units
    const commonPerUnit = commonPayment / 3;
    
    // Calculate total payments per unit
    const unit1Total = unit1Payment + commonPerUnit;
    const unit2Total = unit2Payment + commonPerUnit;
    const unit3Total = unit3Payment + commonPerUnit;
    
    // Display results
    document.getElementById('total-consumption').textContent = mainConsumption.toFixed(2);
    document.getElementById('rate-per-cubic').textContent = ratePerCubic.toFixed(2);
    
    document.getElementById('unit1-consumption').textContent = unit1Consumption.toFixed(2);
    document.getElementById('unit1-payment').textContent = unit1Payment.toFixed(2);
    
    document.getElementById('unit2-consumption').textContent = unit2Consumption.toFixed(2);
    document.getElementById('unit2-payment').textContent = unit2Payment.toFixed(2);
    
    document.getElementById('unit3-consumption').textContent = unit3Consumption.toFixed(2);
    document.getElementById('unit3-payment').textContent = unit3Payment.toFixed(2);
    
    document.getElementById('common-consumption').textContent = commonConsumption.toFixed(2);
    document.getElementById('common-payment').textContent = commonPayment.toFixed(2);
    
    document.getElementById('unit1-total').textContent = unit1Total.toFixed(2);
    document.getElementById('unit2-total').textContent = unit2Total.toFixed(2);
    document.getElementById('unit3-total').textContent = unit3Total.toFixed(2);
    
    // Show results section
    document.getElementById('results').classList.remove('hidden');
}