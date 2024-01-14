/* 
1. If ticket number is less than or equal 100, per ticket price is:100
2. If you purchase more than 100, but less than or equal to 200 then
first 100 tickets price will be 100 taka and rest tickets will be 90 taka
per piece.
3. If you purchase more than 200 tickets
first 100 --> 100 taka
101-200 ---> 90 taka
20+ --> 70 taka
*/

function totalTicketPrice(tickets){
    var total = 0;
    
        if(tickets <= 100){
            total = total + tickets*100;
        }
        else if (tickets > 100 && tickets <= 200){
            total = total + 100*100 + (tickets-100)*90;
        }

        else {
            total = total + 100*100 + 100*90 + (tickets-200)*70;
        }

        return total;
    }
    const numberOfTickets = 201;
    const myPrice = totalTicketPrice(numberOfTickets);
    console.log(myPrice);