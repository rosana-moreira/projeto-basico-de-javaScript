let score = 75;
let scoreA = score >= 90 && score <= 100;
let scoreB = score >= 80 && score <= 89;
let scoreC = score >= 70 && score <= 79;
let scoreD = score >= 60 && score <= 69;
let scoreF = score < 60;
let scoreFinal;

if (scoreA) {
  scoreFinal = "A";
} else if (scoreB) {
  scoreFinal = "B";
} else if (scoreC) {
  scoreFinal = "C";
} else if (socoreD) {
  scoreFinal = "D";
} else {
  scoreFinal = "F";
}
console.log(scoreFinal);
