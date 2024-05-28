// SCROLL TRIGGER CODEPEN JS FILE ....

function locomotiveCodepen() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

locomotiveCodepen();

// YOUR JS CODE WRITE BELOW :-- BE REMEMBER =>  DO NOT TOUCH ABOVE CODE OR ANY CHANGES...

function navBarMenu() {
  var closeBar = document.querySelector(".n-right>i");
  var navRight = document.querySelector(".n-right");
  var navElem2 = document.querySelector(".n-right>#n2");
  var navElem3 = document.querySelector(".n-right>#n3");

  var flag = 0;

  closeBar.addEventListener("click", function () {
    if (flag == 0) {
      gsap.to(closeBar, {
        transform: "rotate(45deg)",
        duration: 0.3,
      });
      navRight.style.width = "14vw";
      navElem2.style.display = "none";
      navElem3.style.display = "none";
      flag = 1;
      console.log(flag);
    } else {
      gsap.to(closeBar, {
        transform: "rotate(0deg)",
        duration: 0.3,
      });
      navRight.style.width = "28vw";
      navElem2.style.display = "block";
      navElem3.style.display = "block";
      flag = 0;
      console.log(flag);
    }
  });
}
navBarMenu();

function loaderAnimations() {
  setTimeout(() => {
    gsap.to("#loader", {
      top: "-100%",
      duration: 0.4,
      ease: Power3,
    });
  }, 200);

  setTimeout(() => {
    gsap.to("#loader2", {
      top: "-200%",
      duration: 1.2,
      ease: Power3,
    });
  }, 1200);

  setTimeout(() => {
    gsap.to(
      ".n-right > a,#nav svg path,.n-right > i,.hero-text,.btm > a,.btm > i",
      {
        color: "black",
        fill: "#000",
      }
    );
  }, 1300);
}
loaderAnimations();

function page2Animation() {
  var page2 = document.querySelector("#page2");
  var box1 = document.querySelector("#box1");
  var box2 = document.querySelector("#box2");
  var box3 = document.querySelector("#box3");
  var box4 = document.querySelector("#box4");
  var box5 = document.querySelector("#box5");

  // FOR BOX 1 BACKGROUND IMAGE
  box1.addEventListener("mouseenter", function () {
    var a = box1.getAttribute("data-image");
    page2.style.backgroundImage = `url(${a}) `;

    const box2Text = document.querySelectorAll("#box2>.movingIn");
    for (let i = 0; i < box2Text.length; i++) {
      box2Text[i].style.opacity = "0";
    }

    const box3Text = document.querySelectorAll("#box3>.movingIn");
    for (let i = 0; i < box3Text.length; i++) {
      box3Text[i].style.opacity = "0";
    }

    const box4Text = document.querySelectorAll("#box4>.movingIn");
    for (let i = 0; i < box4Text.length; i++) {
      box4Text[i].style.opacity = "0";
    }

    const box5Text = document.querySelectorAll("#box5>.movingIn");
    for (let i = 0; i < box5Text.length; i++) {
      box5Text[i].style.opacity = "0";
    }
  });

  box1.addEventListener("mouseleave", function () {
    page2.style.backgroundImage = `url() `;

    const box2Text = document.querySelectorAll("#box2>.movingIn");
    for (let i = 0; i < box2Text.length; i++) {
      box2Text[i].style.opacity = "1";
    }

    const box3Text = document.querySelectorAll("#box3>.movingIn");
    for (let i = 0; i < box3Text.length; i++) {
      box3Text[i].style.opacity = "1";
    }

    const box4Text = document.querySelectorAll("#box4>.movingIn");
    for (let i = 0; i < box4Text.length; i++) {
      box4Text[i].style.opacity = "1";
    }

    const box5Text = document.querySelectorAll("#box5>.movingIn");
    for (let i = 0; i < box5Text.length; i++) {
      box5Text[i].style.opacity = "1";
    }
  });

  // FOR BOX 2 BACKGROUND IMAGE
  box2.addEventListener("mouseenter", function () {
    var a = box2.getAttribute("data-image");
    page2.style.backgroundImage = `url(${a}) `;

    const box1Text = document.querySelectorAll("#box1>.movingIn");
    for (let i = 0; i < box1Text.length; i++) {
      box1Text[i].style.opacity = "0";
    }

    const box3Text = document.querySelectorAll("#box3>.movingIn");
    for (let i = 0; i < box3Text.length; i++) {
      box3Text[i].style.opacity = "0";
    }

    const box4Text = document.querySelectorAll("#box4>.movingIn");
    for (let i = 0; i < box4Text.length; i++) {
      box4Text[i].style.opacity = "0";
    }

    const box5Text = document.querySelectorAll("#box5>.movingIn");
    for (let i = 0; i < box5Text.length; i++) {
      box5Text[i].style.opacity = "0";
    }
  });

  box2.addEventListener("mouseleave", function () {
    page2.style.backgroundImage = `url() `;

    const box1Text = document.querySelectorAll("#box1>.movingIn");
    for (let i = 0; i < box1Text.length; i++) {
      box1Text[i].style.opacity = "1";
    }

    const box3Text = document.querySelectorAll("#box3>.movingIn");
    for (let i = 0; i < box3Text.length; i++) {
      box3Text[i].style.opacity = "1";
    }

    const box4Text = document.querySelectorAll("#box4>.movingIn");
    for (let i = 0; i < box4Text.length; i++) {
      box4Text[i].style.opacity = "1";
    }

    const box5Text = document.querySelectorAll("#box5>.movingIn");
    for (let i = 0; i < box5Text.length; i++) {
      box5Text[i].style.opacity = "1";
    }
  });

  // FOR BOX 3 BACKGROUND IMAGE
  box3.addEventListener("mouseenter", function () {
    var a = box3.getAttribute("data-image");
    page2.style.backgroundImage = `url(${a}) `;

    const box2Text = document.querySelectorAll("#box2>.movingIn");
    for (let i = 0; i < box2Text.length; i++) {
      box2Text[i].style.opacity = "0";
    }

    const box1Text = document.querySelectorAll("#box1>.movingIn");
    for (let i = 0; i < box1Text.length; i++) {
      box1Text[i].style.opacity = "0";
    }

    const box4Text = document.querySelectorAll("#box4>.movingIn");
    for (let i = 0; i < box4Text.length; i++) {
      box4Text[i].style.opacity = "0";
    }

    const box5Text = document.querySelectorAll("#box5>.movingIn");
    for (let i = 0; i < box5Text.length; i++) {
      box5Text[i].style.opacity = "0";
    }
  });

  box3.addEventListener("mouseleave", function () {
    page2.style.backgroundImage = `url() `;

    const box2Text = document.querySelectorAll("#box2>.movingIn");
    for (let i = 0; i < box2Text.length; i++) {
      box2Text[i].style.opacity = "1";
    }

    const box1Text = document.querySelectorAll("#box1>.movingIn");
    for (let i = 0; i < box1Text.length; i++) {
      box1Text[i].style.opacity = "1";
    }

    const box4Text = document.querySelectorAll("#box4>.movingIn");
    for (let i = 0; i < box4Text.length; i++) {
      box4Text[i].style.opacity = "1";
    }

    const box5Text = document.querySelectorAll("#box5>.movingIn");
    for (let i = 0; i < box5Text.length; i++) {
      box5Text[i].style.opacity = "1";
    }
  });

  // FOR BOX 4 BACKGROUND IMAGE
  box4.addEventListener("mouseenter", function () {
    var a = box4.getAttribute("data-image");
    page2.style.backgroundImage = `url(${a}) `;

    const box2Text = document.querySelectorAll("#box2>.movingIn");
    for (let i = 0; i < box2Text.length; i++) {
      box2Text[i].style.opacity = "0";
    }

    const box3Text = document.querySelectorAll("#box3>.movingIn");
    for (let i = 0; i < box3Text.length; i++) {
      box3Text[i].style.opacity = "0";
    }

    const box1Text = document.querySelectorAll("#box1>.movingIn");
    for (let i = 0; i < box1Text.length; i++) {
      box1Text[i].style.opacity = "0";
    }

    const box5Text = document.querySelectorAll("#box5>.movingIn");
    for (let i = 0; i < box5Text.length; i++) {
      box5Text[i].style.opacity = "0";
    }
  });

  box4.addEventListener("mouseleave", function () {
    page2.style.backgroundImage = `url() `;

    const box2Text = document.querySelectorAll("#box2>.movingIn");
    for (let i = 0; i < box2Text.length; i++) {
      box2Text[i].style.opacity = "1";
    }

    const box3Text = document.querySelectorAll("#box3>.movingIn");
    for (let i = 0; i < box3Text.length; i++) {
      box3Text[i].style.opacity = "1";
    }

    const box1Text = document.querySelectorAll("#box1>.movingIn");
    for (let i = 0; i < box1Text.length; i++) {
      box1Text[i].style.opacity = "1";
    }

    const box5Text = document.querySelectorAll("#box5>.movingIn");
    for (let i = 0; i < box5Text.length; i++) {
      box5Text[i].style.opacity = "1";
    }
  });

  // FOR BOX 5 BACKGROUND IMAGE
  box5.addEventListener("mouseenter", function () {
    var a = box5.getAttribute("data-image");
    page2.style.backgroundImage = `url(${a}) `;

    const box2Text = document.querySelectorAll("#box2>.movingIn");
    for (let i = 0; i < box2Text.length; i++) {
      box2Text[i].style.opacity = "0";
    }

    const box3Text = document.querySelectorAll("#box3>.movingIn");
    for (let i = 0; i < box3Text.length; i++) {
      box3Text[i].style.opacity = "0";
    }

    const box4Text = document.querySelectorAll("#box4>.movingIn");
    for (let i = 0; i < box4Text.length; i++) {
      box4Text[i].style.opacity = "0";
    }

    const box1Text = document.querySelectorAll("#box1>.movingIn");
    for (let i = 0; i < box1Text.length; i++) {
      box1Text[i].style.opacity = "0";
    }
  });

  box5.addEventListener("mouseleave", function () {
    page2.style.backgroundImage = `url() `;

    const box2Text = document.querySelectorAll("#box2>.movingIn");
    for (let i = 0; i < box2Text.length; i++) {
      box2Text[i].style.opacity = "1";
    }

    const box3Text = document.querySelectorAll("#box3>.movingIn");
    for (let i = 0; i < box3Text.length; i++) {
      box3Text[i].style.opacity = "1";
    }

    const box4Text = document.querySelectorAll("#box4>.movingIn");
    for (let i = 0; i < box4Text.length; i++) {
      box4Text[i].style.opacity = "1";
    }

    const box1Text = document.querySelectorAll("#box1>.movingIn");
    for (let i = 0; i < box1Text.length; i++) {
      box1Text[i].style.opacity = "1";
    }
  });
}
page2Animation();

gsap.from(".end", {
  y: 40,
  duration: 3,
  ease: Power2,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    start: `bottom 94%`,
    end: ` top 80%`,
    scrub: 2,
  },
});
