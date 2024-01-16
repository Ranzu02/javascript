function canPay(changeArray, totalDue) {
    if (changeArray.length === 0){
        return "You dont have any money";
    }
    else {
        let sum = 0;
        for (var i = 0; i < changeArray.length; i++) {
            sum = sum + changeArray[i];
            // console.log(sum);
        }
        if(sum >= totalDue) {
            return true;
        }
        else {
            return false;
        }
    }
}

const changeMoney = [1, 2, 3];
const chipsPrice = 10;

const canPurchaseOrNot = canPay(changeMoney,chipsPrice);
console.log(canPurchaseOrNot);