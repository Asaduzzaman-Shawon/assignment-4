
function calculateTax(income, expenses) {
    if(typeof income !== 'number' || typeof expenses !== 'number' || income <= 0 || expenses <= 0 || expenses > income){
        return "Invalid Input"
    };
    const profit = income - expenses;
    const tax = profit * .20;
    return tax;
}


function sendNotification(email) {
    if(email.includes("@") === false){
        return "Invalid Email"
    }
    const index = email.indexOf("@");
    const userName = email.slice(0, index);
    const domainName = email.slice(index+1);
    const message = userName + " " + "sent you an email from" + " " + domainName;
    return message;
}













































































