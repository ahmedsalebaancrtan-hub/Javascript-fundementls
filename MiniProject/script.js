//select alll elements 

const nameInput = document.getElementById("nameInput")
const scoreInput = document.getElementById("scoreInput")

//select btn elements

const addBtn = document.getElementById("addBtn")
const passedBtn = document.getElementById("passedBtn")
const allBtn = document.getElementById("allBtn")

//list 

const studentList = document.getElementById("studentList")

const students = []


addBtn.addEventListener("click", function(){
    const studentName  = nameInput.value
    const StudentScore = +(scoreInput.value)

    if(studentName === "" ||  StudentScore < 0) {
        alert("please insert something")
        return
    }

    let student = {
      studentName:studentName,
      StudentScore:StudentScore
    }

    students.push(student)

    nameInput.value = ""
    scoreInput.value = ""


    // studentList.innerHTML = "<h1>pro iska waran</h1>"

    

renderStudent(students)

})

passedBtn.addEventListener("click", function() {
    let passed  = students.filter( function (student) {

        if (student.StudentScore >= 50) {
            return student
        }

    })

    renderStudent(passed)
})


allBtn.addEventListener("click", function() {
    return renderStudent(students)
})


function  renderStudent(studentArray) {
    studentList.innerHTML = ""

    let items  = studentArray.map(function (student) {
        return `

        <li>
            ${student.studentName} -Score : ${student.StudentScore}
        </li>
        
        
        `
        

    })

    studentList.innerHTML = items.join("")
}