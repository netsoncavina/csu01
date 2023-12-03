const students = [
  {
    name: "João",
    credits: 20,
    completed_courses: [],
    current_courses: [],
  },
  {
    name: "Maria",
    credits: 20,
    completed_courses: [
      "Algoritmos e Lógica de Programação",
      "Engenharia de Software I",
    ],
    current_courses: ["Estrutura de Dados"],
  },
  {
    name: "José",
    credits: 0,
    completed_courses: [],
    current_courses: [
      "Algoritmos e Lógica de Programação",
      "Estrutura de Dados",
      "Engenharia de Software I",
      "Engenharia de Software II",
      "Banco de Dados I",
      "Desenvolvimento Web",
    ],
  },
];

const renderStudents = () => {
  const studentsList = document.getElementById("students-list");
  studentsList.innerHTML = "";

  students.forEach((student) => {
    const studentElement = document.createElement("li");
    studentElement.textContent = student.name;
    studentElement.style.cursor = "pointer";
    studentElement.addEventListener("click", () => {
      renderStudentInfo(student);
    });

    studentsList.appendChild(studentElement);
  });
};

const renderStudentInfo = (student) => {
  const studentInfo = document.getElementById("student-info");
  studentInfo.innerHTML = "";

  const studentName = document.createElement("h2");
  studentName.textContent = student.name;
  studentName.setAttribute("id", "student-name");
  studentInfo.appendChild(studentName);

  const studentCredits = document.createElement("p");
  studentCredits.textContent = `Créditos: ${
    student.credits == 0 ? "Nenhum crédito" : student.credits
  }`;
  studentCredits.setAttribute("id", "student-credits");
  studentInfo.appendChild(studentCredits);

  const currentCourses = document.createElement("p");
  currentCourses.textContent = `Cursos Atuais: ${
    student.current_courses.length == 0
      ? "Nenhum curso atual"
      : student.current_courses.join(", ")
  }`;
  currentCourses.setAttribute("id", "student-current-courses");
  studentInfo.appendChild(currentCourses);

  const studentCourses = document.createElement("p");
  studentCourses.textContent = `Cursos completos: ${
    student.completed_courses.length == 0
      ? "Nenhum curso completo"
      : student.completed_courses.join(", ")
  }`;
  studentCourses.setAttribute("id", "completed-courses");

  studentInfo.appendChild(studentCourses);
};

export default renderStudents;
