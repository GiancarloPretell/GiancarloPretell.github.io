document.addEventListener("DOMContentLoaded", function () {

  var form = document.getElementById("intro-form");
  var generateBtn = document.getElementById("generateJSON");
  var resultDiv = document.getElementById("result");

  generateBtn.addEventListener("click", function () {

    // Build JSON object
    var data = {
      firstName: document.getElementById("firstName").value,
      preferredName: document.getElementById("nickname").value,
      middleInitial: document.getElementById("middleName").value,
      lastName: document.getElementById("lastName").value,

      divider: document.getElementById("divider").value,
      mascotAdjective: document.getElementById("mascotAdj").value,
      mascotAnimal: document.getElementById("mascotAnimal").value,

      image: document.getElementById("pictureUrl").value,
      imageCaption: document.getElementById("pictureCaption").value,

      personalStatement: document.getElementById("personalStatement").value,
      personalBackground: document.getElementById("personalStatement").value,
      professionalBackground: document.getElementById("professionalBackground").value,
      academicBackground: document.getElementById("academicBackground").value,
      subjectBackground: document.getElementById("subjectBackground").value,

      primaryComputer: document.getElementById("platform").value,

      courses: [],
      links: []
    };

    // Build courses array (without arrow functions)
    var courseBlocks = document.querySelectorAll(".course-block");
    for (var i = 0; i < courseBlocks.length; i++) {
      var block = courseBlocks[i];
      data.courses.push({
        department: block.querySelector(".courseDept").value,
        number: block.querySelector(".courseNum").value,
        name: block.querySelector(".courseName").value,
        reason: block.querySelector(".courseReason").value
      });
    }

    // Build links array
    data.links.push({ name: "Link1", href: document.getElementById("link1").value });
    data.links.push({ name: "Link2", href: document.getElementById("link2").value });
    data.links.push({ name: "Link3", href: document.getElementById("link3").value });
    data.links.push({ name: "Link4", href: document.getElementById("link4").value });
    data.links.push({ name: "Link5", href: document.getElementById("link5").value });

    // Convert to JSON
    var prettyJSON = JSON.stringify(data, null, 2);

    // Change heading
    document.querySelector("main h2").innerText = "Introduction JSON";

    // Hide form
    form.style.display = "none";

    // Display JSON
    resultDiv.innerHTML =
      '<pre><code class="json">' + prettyJSON + '</code></pre>' +
      '<button id="resetJSON">Reset Everything</button>';

    // Highlight formatting
    hljs.highlightAll();

    // Reset button
    document.getElementById("resetJSON").addEventListener("click", function () {
      resultDiv.innerHTML = "";
      form.style.display = "block";
      document.querySelector("main h2").innerText = "Introduction Form";
    });

  });

});
