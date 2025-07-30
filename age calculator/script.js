function calculateAge() {
    let birthdayInput = document.getElementById("birthday").value;
    
    if (!birthdayInput) {
        document.getElementById("result").textContent = "Please enter your birthday.";
        return;
    }

    let birthDate = new Date(birthdayInput);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();

    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById("result").textContent = `Your age is ${age} years old.`;
}
