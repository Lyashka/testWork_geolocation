const btns = document.querySelectorAll("button");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const btnImage = btn.querySelector(".img_plus");

    if (btn.classList.contains("opened_btn") == false) {
      btn.classList.add("opened_btn");
      btnImage.src = "./assets/img_btn_minus.svg";
    } else {
      btn.classList.remove("opened_btn");
      btnImage.src = "./assets/img_btn_plus.svg";
    }

    const targetId = this.getAttribute("target_landmark");
    const infoHouse = document.getElementById(targetId);

    if (infoHouse.style.display === "none" || infoHouse.style.display === "") {
      infoHouse.style.display = "block";
    } else {
      infoHouse.style.display = "none";
    }

    if (btn.classList.contains("style_btn_blue") == true) {
      infoHouse.classList.add("color_label_blue");
    } else {
      infoHouse.classList.add("color_label_green");
    }
  });
});
