let correctPassword = "admin123";
let enteredPassword;
let attempts = 0;

do {
  attempts++;
  enteredPassword = "admin123";
} while (enteredPassword !== correctPassword);

console.log("Login successful in " + attempts + " attempt(s)");
