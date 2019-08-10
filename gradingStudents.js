function gradingStudents(grades) {
    let newArr = [];
    for (let i = 0; i < grades.length; i++){
        let calc = grades[i]%5;
        if (calc > 2 && grades[i] >= 38){

            newArr.push(grades[i]+(5-calc))
        }
        else{
            newArr.push(grades[i])
        }
    }
}


gradesTest = [38,54,67,80,85,93]

gradingStudents(gradesTest)