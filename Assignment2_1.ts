let students: [string, number][] = [["Go", 85],["Win", 72],["Gear", 55],["Kell", 48]];

for (let student of students) {
    let name: string = student[0];
    let score: number = student[1]; 
    let grade: string = "";

    if (score >= 80) {
        grade = "A";
    } else if (score >= 70) {
        grade = "B";
    } else if (score >= 60) {
        grade = "C";
    } else if (score >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    console.log(name + " score " + score + " got grade " + grade);
}