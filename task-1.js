function calculateMoney(ticketSale) {

    if (ticketSale >=0) {
        const totalTicketSaleMoney = ticketSale * 120;
        const expense = 500 + (8 * 50);
        const total = totalTicketSaleMoney - expense;

        return total;

    }
    else {
        const wrong = "Invalid Number";
        return wrong;
    }
}

console.log(calculateMoney(0));