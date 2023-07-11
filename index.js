let ondex = document.querySelectorAll("#drams_img").length;

      for (let index = 0; index < ondex; index++) {
        document
          .querySelectorAll(".img-item")
          [index].addEventListener("click", function () {
            let music = 0;

            let orb = this.innerText;

            makesound(orb);
            buttonanimation(orb - 1);
          });
      }

      document.addEventListener("keypress", (event) => {
        makesound(event.key);
      });

      function makesound(key) {
        switch (key) {
          case "1":
            music = new Audio("sound/1.mp3");
            break;
          case "2":
            music = new Audio("sound/2.mp3");
            break;
          case "3":
            music = new Audio("sound/3.mp3");
            break;
          case "4":
            music = new Audio("sound/4.mp3");
            break;
          case "5":
            music = new Audio("sound/5.mp3");
        }

        music.play();
      }

      function buttonanimation(index) {
        let activebuuten = document
          .querySelectorAll("#drams_img")
          [index];
          
         activebuuten.classList.add("pressed");
        setTimeout(function () {
          activebuuten.classList.remove("pressed")
        }, 50);
      }
