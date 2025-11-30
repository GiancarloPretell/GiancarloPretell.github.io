document.addEventListener("DOMContentLoaded", function () {

  var form = document.getElementById("intro-form");
  var resultDiv = document.getElementById("result");
  var clearBtn = document.getElementById("clearBtn");
  var addCourseBtn = document.getElementById("addCourseBtn");
  var coursesContainer = document.getElementById("courses-container");

  // Default starting courses
  var starterCourses = [
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

  function addCourse(course) {
    if (!course) course = {};

    var block = document.createElement("div");
    block.classList.add("course-block");

    block.innerHTML =
      '<label>Department:' +
      '<input type="text" class="courseDept" value="' + (course.dept || '') + '" required></label>' +

      '<label>Number:' +
      '<input type="text" class="courseNum" value="' + (course.num || '') + '" required></label>' +

      '<label>Course Name:' +
      '<input type="text" class="courseName" value="' + (course.name || '') + '" required></label>' +

      '<label>Reason:' +
      '<input type="text" class="courseReason" value="' + (course.reason || '') + '" required></label>' +

      '<button type="button" class="deleteCourse">Delete</button>' +
      '<hr>';

    block.querySelector(".deleteCourse").addEventListener("click", function () {
      block.remove();
    });

    coursesContainer.appendChild(block);
  }

  // Load initial courses
  for (var i = 0; i < starterCourses.length; i++) {
    addCourse(starterCourses[i]);
  }

  // Add course button
  addCourseBtn.addEventListener("click", function () {
    addCourse();
  });

  // Clear button
  clearBtn.addEventListener("click", function () {
    var fields = form.querySelectorAll("input, textarea");
    for (var i = 0; i < fields.length; i++) {
      if (fields[i].type !== "file") {
        fields[i].value = "";
      }
    }
  });


  form.addEventListener("submit", function (e) {
    e.preventDefault();
    buildResult();
  });


  function buildResult() {

    // Collect text fields safely
    var firstName = document.getElementById("firstName").value;
    var middleName = document.getElementById("middleName").value;
    var nickname = document.getElementById("nickname").value;
    var lastName = document.getElementById("lastName").value;

    var ackStatement = document.getElementById("ackStatement").value;
    var ackDate = document.getElementById("ackDate").value;

    var mascotAdj = document.getElementById("mascotAdj").value;
    var mascotAnimal = document.getElementById("mascotAnimal").value;
    var divider = document.getElementById("divider").value;

    var pictureUrl = document.getElementById("pictureUrl").value;
    var pictureFile = document.getElementById("pictureFile").files[0];

    var finalImage = pictureUrl;
    if (pictureFile) {
      finalImage = URL.createObjectURL(pictureFile);
    }

    var caption = document.getElementById("pictureCaption").value;

    var personalStatement = document.getElementById("personalStatement").value;
    var professional = document.getElementById("professionalBackground").value;
    var academic = document.getElementById("academicBackground").value;
    var subject = document.getElementById("subjectBackground").value;
    var platform = document.getElementById("platform").value;

    var funny = document.getElementById("funnyThing").value;
    var share = document.getElementById("shareThing").value;
    var grad = document.getElementById("grad").value;
    var fromText = document.getElementById("from").value;

    // COURSES
    var courseBlocks = document.querySelectorAll(".course-block");
    var courseHTML = "";

    for (var i = 0; i < courseBlocks.length; i++) {
      var block = courseBlocks[i];
      var dept = block.querySelector(".courseDept").value;
      var num = block.querySelector(".courseNum").value;
      var name = block.querySelector(".courseName").value;
      var reason = block.querySelector(".courseReason").value;

      courseHTML +=
        "<li><strong>" + dept + " " + num + " - " + name + ":</strong> " + reason + "</li>";
    }

    // BUILD FINAL OUTPUT PAGE
    resultDiv.innerHTML =
      '<h2>Introduction</h2>' +

      '<figure>' +
      '<img src="' + finalImage + '" width="200" height="200">' +
      '<figcaption><em>' + caption + '</em></figcaption>' +
      '</figure>' +

      '<ul>' +
        '<li><strong>Personal Background:</strong> ' + personalStatement + '</li>' +
        '<li><strong>Professional Background:</strong> ' + professional + '</li>' +
        '<li><strong>Academic Background:</strong> ' + academic + '</li>' +
        '<li><strong>Background in this Subject:</strong> ' + subject + '</li>' +
        '<li><strong>Primary Computer Platform:</strong> ' + platform + '</li>' +

        '<li><strong>Courses I\'m Taking & Why:</strong></li>' +
        '<ul>' + courseHTML + '</ul>' +

        '<li><strong>Funny/Interesting Item to Remember me by:</strong> ' + funny + '</li>' +
        '<li><strong>I\'d also like to share:</strong> ' + share + '</li>' +
        '<li>' + grad + '</li>' +
        '<li>' + fromText + '</li>' +
      '</ul>' +

      '<button id="resetAll">Reset Everything</button>';

    // Hide form
    form.style.display = "none";

    // Reset everything
    document.getElementById("resetAll").addEventListener("click", function () {
      resultDiv.innerHTML = "";
      form.style.display = "block";
    });
  }

});
