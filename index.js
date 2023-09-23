const btns = document.querySelectorAll("button");
const infoHouses = document.querySelectorAll(".infoHouse");

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const targetId = this.getAttribute("target_landmark");
    const infoHouse = document.getElementById(targetId);
    const btnImagePiusOrMinus = btn.querySelector(".img_plus");
    const btnTargetId = btn.getAttribute("target_landmark");

    function hiddenAllInfoBtn() {
      infoHouses.forEach((infoHouse) => {
        const infoHouseId = infoHouse.getAttribute("id");
        if (infoHouseId !== btnTargetId) {
          infoHouse.style.display = "none";
        }
      });
      btns.forEach((el) => {
        const elTargetId = el.getAttribute("target_landmark");
        if (elTargetId !== btnTargetId) {
          el.classList.remove("opened_btn");
          if (elTargetId !== "rectangle") {
            el.querySelector(".img_plus").src = "./assets/img_btn_plus.svg";
          }
        }
      });
    }

    function openAndCloseBtn() {
      if (btn.classList.contains("opened_btn") == false) {
        btn.classList.add("opened_btn");
        btnImagePiusOrMinus.src = "./assets/img_btn_minus.svg";
      } else {
        btn.classList.remove("opened_btn");
        btnImagePiusOrMinus.src = "./assets/img_btn_plus.svg";
      }

      if (
        infoHouse.style.display === "none" ||
        infoHouse.style.display === ""
      ) {
        infoHouse.style.display = "block";
      } else {
        infoHouse.style.display = "none";
      }
      if (btn.classList.contains("style_btn_blue") == true) {
        infoHouse.classList.add("color_label_blue");
      } else {
        infoHouse.classList.add("color_label_green");
      }
    }

    if (targetId !== "rectangle") {
      openAndCloseBtn();
      hiddenAllInfoBtn();
    } else if (targetId == "rectangle") {
      hiddenAllInfoBtn();
    }
  });
});
