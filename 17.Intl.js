// Internationalization in javascript
const number = 123456.789;

// Default locale (e.g., en-US)
console.log(new Intl.NumberFormat().format(number)); // Output: 123,456.789

// German locale (uses comma for decimal, period for thousands)
console.log(new Intl.NumberFormat('de-DE').format(number)); // Output: 123.456,789

// Currency formatting (e.g., USD in en-US)
console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)); // Output: $123,456.79

// Unit formatting (e.g., kilometers per hour in Portuguese)
console.log(new Intl.NumberFormat('pt-PT', { style: 'unit', unit: 'kilometer-per-hour' }).format(50)); // Output: 50 km/h