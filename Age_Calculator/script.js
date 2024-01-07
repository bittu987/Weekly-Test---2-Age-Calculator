function calculateAge(){
    let birthdate = document.getElementById('birthdate').value;
    let today = new Date();
    let birthdateObj = new Date(birthdate);
    let age = today.getFullYear()-birthdateObj.getFullYear();
    // Logic
    if(today.getMonth()<birthdateObj.getMonth() || today.getMonth()===birthdateObj.getMonth() && today.getDate()<birthdateObj.getDate()){
        age--;
    }
    document.getElementById('result').innerHTML="Your age is "+age+" year old";
}