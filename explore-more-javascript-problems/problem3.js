// 3. Count paper
// book1 --> 100
// book2 --> 200
// book3 --> 300
function paperRequirements(book1, book2, book3){

    const firstBookPage = book1 * 100;
    const secondBookPage = book2 * 200;
    const thirdBookPage = book3 *300;

    const totalPaper = firstBookPage + secondBookPage + thirdBookPage;

    return totalPaper;
}

const finalTotalPaper = paperRequirements(5,2,3);
console.log("Three books will need all together", finalTotalPaper, "Pages.");