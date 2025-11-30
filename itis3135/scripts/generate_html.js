document.addEventListener("DOMContentLoaded", function () {

  var form = document.getElementById("intro-form");
  var generateHTMLBtn = document.getElementById("generateHTML");
  var resultDiv = document.getElementById("result");

  generateHTMLBtn.addEventListener("click", function () {

    var pictureFile = document.getElementById("pictureFile").files[0];
    var pictureUrl = document.getElementById("pictureUrl").value;
    var finalImage = pictureUrl;
    if (pictureFile) finalImage = URL.createObjectURL(pictureFile);

    var courseBlocks = document.querySelectorAll(".course-block");
    var courseHTML = "";
    var i;
    for (i = 0; i < courseBlocks.length; i++) {
      var block = courseBlocks[i];
      var dept = block.querySelector(".courseDept").value;
      var num = block.querySelector(".courseNum").value;
      var name = block.querySelector(".courseName").value;
      var reason = block.querySelector(".courseReason").value;
      courseHTML +=
        '<li><strong>' + dept + ' ' + num + ' - ' + name + ':</strong> ' + reason + "</li>";
    }

    var htmlOutput =
      '<h2>Introduction HTML</h2>\n' +
      '<h3>' +
      document.getElementById("firstName").value + " " +
      document.getElementById("middleName").value + " \"" +
      document.getElementById("nickname").value + "\" " +
      document.getElementById("lastName").value +
      " ★ " +
      document.getElementById("mascotAdj").value + " " +
      document.getElementById("mascotAnimal").value +
      "</h3>\n\n" +

      '<figure>\n' +
      '    <img src="' + finalImage + '" alt="' + document.getElementById("pictureCaption").value + '">\n' +
      '    <figcaption>' + document.getElementById("pictureCaption").value + '</figcaption>\n' +
      '</figure>\n\n' +

      '<ul>\n' +
      '    <li><strong>Personal Background:</strong> ' + document.getElementById("personalStatement").value + '</li>\n' +
      '    <li><strong>Professional Background:</strong> ' + document.getElementById("professionalBackground").value + '</li>\n' +
      '    <li><strong>Academic Background:</strong> ' + document.getElementById("academicBackground").value + '</li>\n' +
      '    <li><strong>Background in this Subject:</strong> ' + document.getElementById("subjectBackground").value + '</li>\n' +
      '    <li><strong>Primary Computer Platform:</strong> ' + document.getElementById("platform").value + '</li>\n' +
      '    <li><strong>Courses I\'m Taking & Why:</strong></li>\n' +
      '    <ul>\n' + courseHTML + '\n    </ul>\n' +
      '    <li><strong>Funny/Interesting Item to Remember me by:</strong> ' + document.getElementById("funnyThing").value + '</li>\n' +
      '    <li><strong>I\'d also like to share:</strong> ' + document.getElementById("shareThing").value + '</li>\n' +
      '    <li>' + document.getElementById("grad").value + '</li>\n' +
      '    <li>' + document.getElementById("from").value + '</li>\n' +
      '</ul>';

    form.style.display = "none";

    resultDiv.innerHTML =
      '<pre><code class="html">' + htmlOutput.replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</code></pre>' +
      '<button id="resetHTML">Reset Everything</button>';

    hljs.highlightAll();

    document.getElementById("resetHTML").addEventListener("click", function () {
      resultDiv.innerHTML = "";
      form.style.display = "block";
      document.querySelector("main h2").innerText = "Introduction Form";
    });

    document.querySelector("main h2").innerText = "Introduction HTML";

  });

});
