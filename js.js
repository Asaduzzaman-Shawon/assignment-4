

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


function calculateFinalScore(obj) {
    if(typeof obj === 'object'){
        let mark = 0;
        if(obj.testScore <= 50){
            mark = mark + obj.testScore;
        }
        if(obj.schoolGrade <= 30){
            mark = mark + obj.schoolGrade;
        }
        if(obj.isFFamily === true){
            mark = mark + 20;
        }
        else if(obj.isFFamily === false){
            mark = mark + 0;
        }
        if(mark >= 80){
            return true;
        }
        return false;
    }
    else{
        return "Invalid Input";
    };
}


function  waitingTime(waitingTimes  , serialNumber) {
    if(Array.isArray(waitingTimes) && typeof serialNumber === "number"){
        let time = 0;
        for(const i of waitingTimes){
                time = time + i   
        }
        const avg = time / waitingTimes.length;
        const avgTime = Math.round(avg);
        const beforeCandidate = serialNumber - 1 - waitingTimes.length;
        const result = avgTime * beforeCandidate;
        return result;
    }
    else{
        return "Invalid Input";
    }
}


