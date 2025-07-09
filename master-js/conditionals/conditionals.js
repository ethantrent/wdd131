let age = 15;

function discount() {
// less than 6 years old -> free
if (age < 6) {
    return "Free";
} // 6 to 17 years old     -> child discount
else if (age >= 6 && age <= 17) {
    return "Child Discount";
} // 18 to 26 years old    -> student discount
else if (age >= 18 && age <= 26) {
    return "Student Discount";
} // 27 to 66 years old    -> full price
else if (age >= 27 && age <= 66) {
    return "Full Price";
} // over 66 years old     -> senior citizen discount
else if (age > 66) {
    return "Senior Citizen Discount";
}
}

console.log(discount());