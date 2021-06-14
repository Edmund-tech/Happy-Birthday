function validateForm(event) {
    event.preventDefault();
    var day = document.forms["details"]["day"].value;
    var month = document.forms["details"]["month"].value;
    var year = document.forms["details"]["year"].value;
    if (day === "") {
        alert("Day must be filled out");
        return false;
    }
    if (month === "") {
        alert("Month must be filled out");
        return false;
    }
    if (year === "") {
        alert("Year must be filled out");
        return false;
    }
    var radios = document.getElementsByName('gender');
    let gender = null
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            gender = radios[i].value
            break;
        }
    }
    if (gender == null) {
        alert("Gender must be provided");
        return false
    }
    if (month > 12 || month < 1 || isNaN(month)) {

        alert("Month must be in the range of 1 to 12")
        return false
    }
    if (day > 31 || day < 1 || isNaN(day)) {
        alert("Day must be in the range of 1 to 31")
        return false
    }

    if (year > new Date().getFullYear() || year < 1 || isNaN(year)) {
        alert("Year must be in the range of 1 to the current year")
        return false
    }
    return handleSubmit(month, day, year, gender)
}

function dayOfTheWeek(month, day, year) {
    let CC = parseInt(year.substring(0, 2));
    let YY = parseInt(year.substring(2, 4))
    let MM = parseInt(month)
    let DD = parseInt(day)
    //Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
    return (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
}

// let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// names ordered by day of the week form sunday to saturday
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

function handleSubmit(month, day, year, gender) {
    let x = new Date(year, month, day).getDay()
    if (gender === "male") {
        alert("Your Akan name is " + maleNames[x])
        return true
    } else if (gender === "female") {
        alert("Your Akan name is " + femaleNames[x])
        return true
    }
}
