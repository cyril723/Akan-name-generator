function calculateAkanName() {
    const dateOfBirth = new 
    Date(document.getElementById('date-of-birth').value);
    const gender = document.getElementById('gender').value;

    if (isNaN(dateOfBirth)) {
        alert('Please enter a valid date of birth.');
        return;
    }   
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday',
     'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena',
     'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    const femaleNames = ['Akosua', 'Adwoa', 'Abenaa',
     'Akua', 'Yaa', 'Afua', 'Ama'];
    const dayIndex = dateOfBirth.getDay();

    let akanName = '';

    if (gender === 'male') {
        akanName = maleNames[dayIndex];
    } else if (gender === 'female') {
        akanName = femaleNames[dayIndex];
    }

    document.getElementById('akan-name').value = akanName;
}
document.querySelector('form').addEventListener('submit',
 function(event) {
    event.preventDefault();
    calculateAkanName();
}); 
document.querySelector('form').addEventListener('reset',
 function() {
    document.getElementById('akan-name').value = '';
}); 
