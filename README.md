
# Water Bill Calculator - Documentation

## Overview
The Water Bill Calculator is a web application designed to fairly distribute water bill payments among tenants in a multi-unit apartment based on individual water meter readings. It calculates each unit's consumption, determines their share of the total bill, and accounts for any common area water usage.
## Features

- Main Meter Tracking: Input for the building's main water meter readings
- Unit-Specific Meters: Individual meter tracking for up to 3 units
- Bill Calculation: Automatically calculates each unit's share based on consumption
- Common Area Allocation: Identifies and fairly distributes common area water usage
- Detailed Breakdown: Shows consumption and payment details for each unit


## Installation

## Option 1: Local Installation
1. Clone or download the repository
2. Open index.html in any modern web browser

## Option 2: Web Hosting
1. Upload all files to your web hosting service
2. Access via your domain or hosting provider's URL

# File Structure

```bash
water-bill-calculator/
├── index.html        # Main application file
├── styles.css        # Stylesheet for the application
└── script.js         # JavaScript logic for calculations
```
    
## Usage Instructions
1. Enter Main Meter Information:
- Input the previous and current readings from the main water meter
- Enter the total bill amount

2. Enter Unit Meter Readings:
- For each unit (up to 3), input their previous and current meter readings

3. Calculate Payments:
- Click the "Calculate Payments" button
- The application will display a detailed breakdown of water usage and payments

4. Understanding the Results:
- Total Consumption: Shows the building's total water usage
- Rate per m³: Calculated cost per cubic meter of water
- Unit Breakdown: Each unit's consumption and proportional payment
- Common Area: Usage and cost for shared spaces, divided equally among units
- Total Payment: Final amount each unit should pay

## Technical Details

Calculation Methodology

1. Total Consumption
```javascript
Main Consumption = Current Main Reading - Previous Main Reading
```
2. Unit Consumption:
```javascript
Unit X Consumption = Current Unit X Reading - Previous Unit X Reading
```

3. Common Area Consumption:
```javascript
Common Consumption = Main Consumption - Sum of All Unit Consumptions
```

4. Rate per Cubic Meter:
```javascript
Rate = Total Bill Amount / Main Consumption
```

5. Unit Payments:
```javascript
Unit X Payment = Unit X Consumption × Rate
Common Payment per Unit = (Common Consumption × Rate) ÷ 3
Total Unit X Payment = Unit X Payment + Common Payment per Unit
```

## Technologies Used
- HTML5 for structure
- CSS3 for styling
- JavaScript for calculations
- Responsive design principles


## Customization Options
1. Changing Number of Units:
- Edit the HTML to add or remove unit sections
- Update the JavaScript calculations accordingly

2. Styling Changes:
- Modify `styles.css` to change colors, fonts, or layout

3. Currency/Units:
- Update the currency symbol in the HTML (currently ₱ for Philippine Peso)
- Change water unit from cubic meters if needed

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch for your feature (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## License
This project is open source and available under the MIT License.

## Support
For issues or questions, please open an issue on GitHub.
