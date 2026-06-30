let library: [string, boolean][] = [
    ["The Midnight Library", true],
    ["Before the Coffee Gets Cold", false],
    ["Start with Why", true],
    ["Atomic Habits", false],
    ["The Courage to Be Disliked", true]];

let availableCount: number = 0;
let borrowedCount: number = 0;

for (let book of library) {
    let title: string = book[0];
    let isBorrowed: boolean = book[1];
    if (isBorrowed == true) {
        console.log(title + " - Status: Borrowed");
        borrowedCount = borrowedCount + 1;
    } else {
        console.log(title + " - Status: Available");
        availableCount = availableCount + 1;
    }
}
console.log("Total Available Books: " + availableCount);
console.log("Total Borrowed Books: " + borrowedCount);