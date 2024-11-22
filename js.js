
function calculateTax(income, expenses) {
    if(typeof income !== 'number' || typeof expenses !== 'number' || income <= 0 || expenses <= 0 || expenses > income){
        return "Invalid Input";
    };
    const profit = income - expenses;
    const tax = profit * .20;
    return tax;
}


function sendNotification(email) {
    if(email.includes("@") === false){
        return "Invalid Email";
    }
    const index = email.indexOf("@");
    const userName = email.slice(0, index);
    const domainName = email.slice(index+1);
    const message = userName + " " + "sent you an email from" + " " + domainName;
    return message;
}


function checkDigitsInName(name) {
    if(typeof name !== "string"){
       return "Invalid Input";
    }
    else{
        if(name.includes(0)){
            return true;
        }
        else if(name.includes(1)){
            return true;
        }
        else if(name.includes(2)){
            return true;
        }
        else if(name.includes(3)){
            return true;
        }
        else if(name.includes(4)){
            return true;
        }
        else if(name.includes(5)){
            return true;
        }
        else if(name.includes(6)){
            return true;
        }
        else if(name.includes(7)){
            return true;
        }
        else if(name.includes(8)){
            return true;
        }
        else if(name.includes(9)){
            return true;
        }
        return false;
    };
}





// let dam = "sawon"
// if(typeof dam === "string"){
//     console.log("ri");
// }
// console.log(dam.includes(1,2,3,4,5,6,7,8,9,0));



































































