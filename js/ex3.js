window.onload = function () {
    //Declare studentList Array
    const studentList = [
        {
            firstName: "Allan",
            lastName: "Able",
            scores: [95, 85, 92, 98]
        },
        {
            firstName: "Amy",
            lastName: "Alexander",
            scores: [80, 88, 100]
        },
        {
            firstName: "Betty",
            lastName: "Barns",
            scores: [70, 80, 90, 100]
        },
        {
            firstName: "Bob",
            lastName: "Bones",
            scores: [75, 85, 95, 85]
        },
        {
            firstName: "Cindy",
            lastName: "Chase",
            scores: [95, 90, 92, 98]
        },
        {
            firstName: "Charles",
            lastName: "Chips",
            scores: [88, 99, 90]
        },
    ];
    // TO DO - Write higher order functions / There are many solutions
    var students_with_C = studentList.filter(student => (student.firstName[0] == 'C' && student.lastName[0] == 'C'));

    function minS(scores) {
        var minV = scores[0]
        for (var i = 1; i < scores.length; i++) {
            if (minV > scores[i]) {
                minV = scores[i]
            }
        }
        return minV
    }

    function maxS(scores) {
        var maxV = scores[0]
        for (var i = 1; i < scores.length; i++) {
            if (maxV < scores[i]) {
                maxV = scores[i]
            }
        }
        return maxV
    }

    function averageS(scores) {
        var averageV = scores.reduce((total, score) => {
            return total + score
        }, 0)
        averageV /= scores.length
        return averageV
    }

    //Declare cLastNameResults.  Use functions and map a new array of objects

    var cLastNameResults = new Array()
    for (var i = 0; i < students_with_C.length; i++) {
        var newStudent = new Object()
        newStudent.firstName = students_with_C[i].firstName
        newStudent.lastName = students_with_C[i].lastName
        newStudent.minScore = minS(students_with_C[i].scores)
        newStudent.maxScore = maxS(students_with_C[i].scores)
        newStudent.avgScore = averageS(students_with_C[i].scores)
        cLastNameResults[i] = newStudent
    }

    //Output
    console.log(cLastNameResults);

}


