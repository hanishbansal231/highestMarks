let higherMarksBtn = document.querySelector('#higherMarksBtn');

const heigherMarks = () => {
    let student_1 = document.querySelector('#student_1').value;
    let student_2 = document.querySelector('#student_2').value;
    let student_3 = document.querySelector('#student_3').value;
    let student_4 = document.querySelector('#student_4').value;
    let student_5 = document.querySelector('#student_5').value;
    let showValue = document.querySelector('#showValue');
    let students = [student_1, student_2, student_3, student_4, student_5];
    let heigh = students[0];

    for (let i = 0; i < students.length; i++) {
        if (students[i] > heigh) {
            heigh = students[i];
        }
    }
    showValue.innerText = "Heigher Mark = " + heigh;

};


higherMarksBtn.addEventListener('click', heigherMarks)