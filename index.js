// Global variable customerName
var customerName = 'bob';

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function to overwrite the bestCustomer variable
function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

// Global constant leastFavoriteCustomer
const leastFavoriteCustomer = 'bob';

// Function that attempts to change the constant (will throw an error)
function changeLeastFavoriteCustomer() {
  try {
    leastFavoriteCustomer = 'someone else';
  } catch (error) {
    throw new Error('Assignment to constant variable.');
  }
}
