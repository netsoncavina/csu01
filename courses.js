const courses = [
  {
    id: 1,
    name: "Algoritmos e Lógica de Programação",
    credits: 3,
    start_hour: "8:00",
    end_hour: "11:40",
    day: "Segunda-feira",
    max_students: 40,
    students_count: 0,
    requirements: [],
  },
  {
    id: 2,
    name: "Estrutura de Dados",
    credits: 3,
    start_hour: "8:00",
    end_hour: "11:40",
    day: "Terça-feira",
    max_students: 40,
    students_count: 0,
    requirements: ["Algoritmos e Lógica de Programação"],
  },
  {
    id: 3,
    name: "Engenharia de Software I",
    credits: 3,
    start_hour: "8:00",
    end_hour: "11:40",
    day: "Quarta-feira",
    max_students: 40,
    students_count: 0,
    requirements: [],
  },
  {
    id: 4,
    name: "Engenharia de Software II",
    credits: 3,
    start_hour: "8:00",
    end_hour: "11:40",
    day: "Quinta-feira",
    max_students: 40,
    students_count: 0,
    requirements: ["Engenharia de Software I"],
  },
  {
    id: 5,
    name: "Banco de Dados I",
    credits: 3,
    start_hour: "8:00",
    end_hour: "11:40",
    day: "Segunda-feira",
    max_students: 40,
    students_count: 0,
    requirements: [],
  },
  {
    id: 6,
    name: "Desenvolvimento Web",
    credits: 3,
    start_hour: "8:00",
    end_hour: "11:40",
    day: "Sexta-feira",
    max_students: 40,
    students_count: 40,
    requirements: [],
  },
  {
    id: 7,
    name: "Inglês I",
    credits: 3,
    start_hour: "8:00",
    end_hour: "11:40",
    day: "Sabado",
    max_students: 40,
    students_count: 0,
    requirements: [],
  },
  {
    id: 8,
    name: "Desenvolvimento Mobile",
    credits: 3,
    start_hour: "8:00",
    end_hour: "11:40",
    day: "Terça-feira",
    max_students: 40,
    students_count: 0,
    requirements: [],
  },
  {
    id: 9,
    name: "Sistemas e Redes",
    credits: 3,
    start_hour: "11:40",
    end_hour: "15:20",
    day: "Quarta-feira",
    max_students: 40,
    students_count: 0,
    requirements: [],
  },
  {
    id: 10,
    name: "Banco de Dados II",
    credits: 3,
    start_hour: "11:40",
    end_hour: "15:20",
    day: "Quinta-feira",
    max_students: 40,
    students_count: 0,
    requirements: ["Banco de Dados I"],
  },
  {
    id: 11,
    name: "Design Digital",
    credits: 3,
    start_hour: "11:40",
    end_hour: "15:20",
    day: "Sexta-feira",
    max_students: 40,
    students_count: 0,
    requirements: [],
  },
  {
    id: 12,
    name: "Matemática Discreta",
    credits: 3,
    start_hour: "11:40",
    end_hour: "15:20",
    day: "Sabado",
    max_students: 40,
    students_count: 0,
    requirements: [],
  },
];

let subscribedCourses = [];

const renderCourses = () => {
  const coursesList = document.getElementById("courses-list");

  courses.forEach((course) => {
    const card = createCard(course);
    coursesList.appendChild(card);
  });
};

const createCard = (course) => {
  const card = document.createElement("div");
  card.setAttribute("class", "card mb-4");
  card.setAttribute("style", "width: 18rem;");

  const cardBody = createCardBody(course);
  card.appendChild(cardBody);

  return card;
};

const createCardBody = (course) => {
  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  const cardTitle = createCardTitle(course.name);
  const cardText = createCardText(course);

  const cardButton = createCardButton("Inscrever-se", course.name);

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardButton);

  return cardBody;
};

const createCardTitle = (title) => {
  const cardTitle = document.createElement("h5");
  cardTitle.setAttribute("class", "card-title");
  cardTitle.textContent = title;
  return cardTitle;
};

const createCardText = (course) => {
  const cardText = document.createElement("p");
  cardText.setAttribute("class", "card-text");

  const scheduleInfo = document.createElement("span");
  scheduleInfo.setAttribute("class", "text-muted");
  scheduleInfo.textContent = `Horário: ${course.start_hour} - ${course.end_hour} - ${course.day}`;

  const creditsInfo = document.createElement("span");
  creditsInfo.setAttribute("class", "text-muted");
  creditsInfo.textContent = `Créditos: ${course.credits}`;

  const studentsInfo = document.createElement("span");
  studentsInfo.setAttribute("class", "text-muted");
  studentsInfo.setAttribute("id", `course-${course.id}-students`);
  studentsInfo.textContent = `Alunos: ${course.students_count}`;

  cardText.appendChild(scheduleInfo);
  cardText.appendChild(document.createElement("br"));
  cardText.appendChild(creditsInfo);
  cardText.appendChild(document.createElement("br"));
  cardText.appendChild(studentsInfo);

  return cardText;
};

const createCardButton = (text, courseName) => {
  const cardButton = document.createElement("button");
  cardButton.setAttribute("class", "btn btn-primary");
  cardButton.textContent = text;
  cardButton.addEventListener("click", () => {
    subscribeToCourse(courses.find((course) => course.name == courseName));
  });
  return cardButton;
};

const checkRequirements = (course) => {
  let completedCourses =
    document.getElementById("completed-courses").textContent;

  if (course.requirements.length == 0) {
    return true;
  }

  let requirements = course.requirements;
  let completed = true;

  requirements.forEach((requirement) => {
    if (!completedCourses.includes(requirement)) {
      completed = false;
    }
  });

  return completed;
};

const checkHourConflict = (course) => {
  if (subscribedCourses.length == 0) {
    return true;
  }

  let conflict = true;
  let subscribed = subscribedCourses;

  subscribed.forEach((subscribedCourse) => {
    if (
      subscribedCourse.day == course.day &&
      subscribedCourse.start_hour == course.start_hour
    ) {
      conflict = false;
    }
  });

  console.log(subscribedCourses);

  return conflict;
};

const checkCourseAlreadyCompleted = (course) => {
  let completedCourses =
    document.getElementById("completed-courses").textContent;

  if (completedCourses.includes(course.name)) {
    Swal.fire({
      title: "Atenção!",
      text: "Você já completou este curso",
      icon: "warning",
    });
    return true;
  }
  return false;
};

const addCourseToStudent = (course) => {
  let currentCourses = document.getElementById("student-current-courses");

  if (currentCourses.textContent.includes(course.name)) {
    Swal.fire({
      title: "Atenção!",
      text: "Você já está inscrito neste curso",
      icon: "warning",
    });
    return;
  }
  if (currentCourses.textContent == "Cursos Atuais: Nenhum curso atual") {
    currentCourses.textContent = "Cursos Atuais: ";
    currentCourses.innerHTML += `${course.name}`;
    subscribedCourses.push(course);
  } else {
    currentCourses.innerHTML += `, ${course.name}`;
    subscribedCourses.push(course);
  }
  Swal.fire({
    title: "Sucesso!",
    text: "Você foi inscrito na matéria com sucesso!",
    icon: "success",
  });
};

const deductCredits = (course) => {
  let credits = document
    .getElementById("student-credits")
    .innerHTML.split(" ")[1];
  if (credits <= course.credits || credits == "Créditos: Nenhum crédito") {
    Swal.fire({
      title: "Atenção!",
      text: "Você não possui créditos suficientes",
      icon: "warning",
    });
    return false;
  }

  document.getElementById("student-credits").innerHTML = `Créditos: ${
    credits - course.credits
  }`;
  return true;
};

const subscribeToCourse = (course) => {
  let credits = document.getElementById("student-credits").textContent;

  if (course.students_count >= course.max_students) {
    Swal.fire({
      title: "Atenção!",
      text: "Não há vagas disponíveis",
      icon: "warning",
    });
    return;
  }

  if (!checkRequirements(course)) {
    Swal.fire({
      title: "Atenção!",
      text: "Você não possui os requisitos necessários",
      icon: "warning",
    });
    return;
  }

  if (checkCourseAlreadyCompleted(course)) {
    return;
  }

  if (!checkHourConflict(course)) {
    Swal.fire({
      title: "Atenção!",
      text: `Você possui conflitos de horário.`,
      icon: "warning",
    });
    return;
  }
  if (!deductCredits(course)) {
    return;
  }
  addCourseToStudent(course);
  if (credits == 0 || credits == "Créditos: Nenhum crédito") {
    Swal.fire({
      title: "Atenção!",
      text: "Você não possui créditos suficientes",
      icon: "warning",
    });
    return;
  }

  document.getElementById(
    `course-${course.id}-students`
  ).textContent = `Alunos: ${course.students_count + 1}`;

  console.log(2);

  course.students_count += 1;
  return;
};

export default renderCourses;
