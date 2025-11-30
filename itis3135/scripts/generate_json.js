document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("intro-form");
  const generateBtn = document.getElementById("generateJSON");
  const resultDiv = document.getElementById("result");

  generateBtn.addEventListener("click", () => {

    const data = {
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

      courses: Array.from(document.querySelectorAll(".course-block")).map(block => ({
        department: block.querySelector(".courseDept").value,
        number: block.querySelector(".courseNum").value,
        name: block.querySelector(".courseName").value,
        reason: block.querySelector(".courseReason").value
      })),

      links: [
        { name: "Link1", href: document.getElementById("link1").value },
        { name: "Link2", href: document.getElementById("link2").value },
        { name: "Link3", href: document.getElementById("link3").value },
        { name: "Link4", href: document.getElementById("link4").value },
        { name: "Link5", href: document.getElementById("link5").value }
      ]
    };

    const prettyJSON = JSON.stringify(data, null, 2);

    document.querySelector("main h2").innerText = "Introduction JSON";
    form.style.display = "none";

    resultDiv.innerHTML = `
      <pre><code class="json">${prettyJSON}</code></pre>
      <button id="resetJSON">Reset Everything</button>
    `;

    hljs.highlightAll();

    document.getElementById("resetJSON").addEventListener("click", () => {
      resultDiv.innerHTML = "";
      form.style.display = "block";
      document.querySelector("main h2").innerText = "Introduction Form";
    });

  });

});
