document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("intro-form");
  const resultDiv = document.getElementById("result");
  const clearBtn = document.getElementById("clearBtn");
  const addCourseBtn = document.getElementById("addCourseBtn");
  const coursesContainer = document.getElementById("courses-container");

  // Default starting courses
  const starterCourses = [
    {
      dept: "ITCS",
      num: "3112",
      name: "Design and Implementation of Object Oriented Systems",
      reason: "I want to learn more about object oriented programming and its implementations."
    },
    {
      dept: "ITIS",
      num: "3135",
      name: "Front-End Web Application Development",
      reason: "I am interested in being a front-end developer."
    },
    {
      dept: "ITSC",
      num: "3146",
      name: "Intro to Operating Systems and Networks",
      reason: "To see more of the basis between systems and networks."
    },
    {
      dept: "STAT",
      num: "2122",
      name: "Intro to Prop and Stat",
      reason: "Required but I have always been interested in statistics."
    },
    {
      dept: "ITIS",
      num: "3130",
      name: "Introduction to Human Centered Computing",
      reason: "It seemed interesting with more theory and implementation."
    }
  ];

  // Add a course block
  function addCourse(course = {}) {
    const block = document.createElement("div");
    block.classList.add("course-block");

    block.innerHTML = `
      <label>Department:
        <input type="text" class="courseDept" value="${course.dept || ""}" required>
      </label>

      <label>Number:
        <input type="text" class="courseNum" value="${course.num || ""}" required>
      </label>

      <label>Course Name:
        <input type="text" class="courseName" value="${course.name || ""}" required>
      </label>

      <label>Reason:
        <input type="text" class="courseReason" value="${course.reason || ""}" required>
      </label>

      <button type="button" class="deleteCourse">Delete</button>
      <hr>
    `;

    block.querySelector(".deleteCourse").addEventListener("click", () => {
      block.remove();
    });

    coursesContainer.appendChild(block);
  }

  // Initialize default courses
  starterCourses.forEach(c => addCourse(c));

  // Add new course button
  addCourseBtn.addEventListener("click", () => addCourse());

  // Clear button
  clearBtn.addEventListener("click", () => {
    form.querySelectorAll("input, textarea").forEach(el => {
      if (el.type !== "file") el.value = "";
    });
  });

  // FORM SUBMIT
  form.addEventListener("submit", e => {
    e.preventDefault();
    buildResult();
  });

  function buildResult() {

    // Collect form values
    const firstName = firstName.value;
    const middleName = middleName.value;
    const nickname = nickname.value;
    const lastName = lastName.value;

    const ackStatement = ackStatement.value;
    const ackDate = ackDate.value;

    const mascotAdj = mascotAdj.value;
    const mascotAnimal = mascotAnimal.value;
    const divider = divider.value;

    const picUrlField = document.getElementById("pictureUrl").value;
    const fileInput = document.getElementById("pictureFile").files[0];
    let finalImage = picUrlField;

    if (fileInput) {
      finalImage = URL.createObjectURL(fileInput);
    }

    const caption = pictureCaption.value;

    const personalStatement = personalStatement.value;
    const professional = professionalBackground.value;
    const academic = academicBackground.value;
    const subject = subjectBackground.value;
    const platform = platform.value;
    const funny = funnyThing.value;
    const share = shareThing.value;
    const grad = grad.value;
    const from = from.value;

    // Course values
    const courseBlocks = document.querySelectorAll(".course-block");
    let courseHTML = "";

    courseBlocks.forEach(b => {
      const dept = b.querySelector(".courseDept").value;
      const num = b.querySelector(".courseNum").value;
      const name = b.querySelector(".courseName").value;
      const reason = b.querySelector(".courseReason").value;

      courseHTML += `
        <li><strong>${dept} ${num} - ${name}:</strong> ${reason}</li>
      `;
    });

    // BUILD FINAL INTRO PAGE (MUST MATCH intro.html EXACTLY)
    resultDiv.innerHTML = `
      <h2>Introduction</h2>
      <figure>
        <img src="${finalImage}" alt="User Image" width="200" height="200">
        <figcaption><em>${caption}</em></figcaption>
      </figure>

      <ul>
        <li><strong>Personal Background:</strong> ${personalStatement}</li>
        <li><strong>Professional Background:</strong> ${professional}</li>
        <li><strong>Academic Background:</strong> ${academic}</li>
        <li><strong>Background in this Subject:</strong> ${subject}</li>
        <li><strong>Primary Computer Platform:</strong> ${platform}</li>
        <li><strong>Courses I'm Taking & Why:</strong></li>
        <ul>${courseHTML}</ul>
        <li><strong>Funny/Interesting Item to Remember me by:</strong> ${funny}</li>
        <li><strong>I'd also like to share:</strong> ${share}</li>
        <li>${grad}</li>
        <li>${from}</li>
      </ul>

      <button id="resetAll">Reset Everything</button>
    `;

    document.getElementById("intro-form").style.display = "none";

    document.getElementById("resetAll").addEventListener("click", () => {
      resultDiv.innerHTML = "";
      form.style.display = "block";
    });
  }

});
