const btns = document.querySelectorAll("button");
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // console.log("Button clicked " + e.target.textContent);
    const targetId = this.getAttribute("target_landmark");
    console.log(targetId);
    const infoHouse = document.getElementById(targetId);
    if (infoHouse.style.display === "none" || infoHouse.style.display === "") {
      infoHouse.style.display = "block";
    } else {
      infoHouse.style.display = "none";
    }
  });
});
