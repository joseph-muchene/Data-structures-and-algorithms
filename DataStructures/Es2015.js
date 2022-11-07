// objectives
//--> class, abstracttion polymophism
// syntax

class Student {
  constructor(firstName, secondName, year) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.grade = year;
    this.absence = 0;
    this.scores = [];
  }

  fullName() {
    return "you are " + this.firstName + " " + this.secondName;
  }

  markLate() {
    this.absence = this.absence + 1;
    if (this.absence >= 3) return "you are expelled";
    return `${this.firstName} ${this.secondName} has been absent for ${this.absence} days`;
  }
  addScore(score) {
    this.scores.push(score);
  }
  calculateAverage() {
    let sum = this.scores.reduce((a, b) => {
      return a + b;
    }, 0);

    return sum / this.scores.length;
  }
  static EnrollingStudents(){
    return "Enrolling stu"
  }
}
let firstStudent = new Student("joseph", "muchene", 2, 50);

let x = firstStudent.fullName();
let y = firstStudent.markLate();

let average = firstStudent.calculateAverage();
y = firstStudent.markLate();

firstStudent.addScore(100);
firstStudent.addScore(50);
firstStudent.addScore(20);
firstStudent.addScore(30);
const c = firstStudent.scores;

console.log(firstStudent.calculateAverage());
y = firstStudent.markLate();
