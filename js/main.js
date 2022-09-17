// Start-header

let menuClose = document.querySelector(".header .nav-box .close");
let menuActive = document.querySelector(".header .nav-box .menu");
let menuUl = document.querySelector(".header .nav-box ul");

// stopPropagation-the-menuUl
menuUl.onclick = function (e) {
    e.stopPropagation();
};

window.addEventListener("click", (e) => {
    //
    // show - menu
    menuActive.addEventListener("click", (ac) => {
        // stopPropagation-the-Active
        ac.stopPropagation();
        menuUl.classList.add("active");
    });
    //
    // hiding - menu
    menuClose.addEventListener("click", (as) => {
        menuUl.classList.remove("active");
    });
    if (
        !e.target.classList.contains("menu-item") &&
        !e.target.classList.contains("menu")
    ) {
        if (menuUl.classList.contains("active")) {
            menuUl.classList.remove("active");
        }
    }
});
// ==========
// show - the - small - menu;
let menuItemSmall = document.querySelectorAll(".nav-box .small");

// End-header
//
// start-feedback
{
    let feedbackImg = document.querySelector(".feedback .box-img img");
    let Sliders = document.querySelectorAll(".feedback .swiper-slide");
    let feedbackContainer = document.querySelector(".feedback .container");
    if (feedbackContainer !== null) {
        feedbackContainer.addEventListener("touchend", (e) => {
            sliderActive();
        });
        feedbackContainer.addEventListener("click", (e) => {
            sliderActive();
        });
        feedbackContainer.addEventListener("mousemove", (e) => {
            sliderActive();
        });
    }

    // loop-Sliders
    function sliderActive() {
        Sliders.forEach((sl) => {
            if (sl.classList.contains("swiper-slide-active")) {
                feedbackImg.src = sl.dataset.img;
            }
        });
    }
    //

    var swiper = new Swiper(".feedback .all", {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

// end-feedback
// ================
/* start-section-courses */

let titleCourses = document.querySelectorAll(".courses .all .box button");
let rowCourses = document.querySelectorAll(".courses .row");

// loop - on - the - titleCourses
//
if (titleCourses !== null) {
    titleCourses.forEach((bu) => {
        bu.addEventListener("click", (e) => {
            removeActive(bu);

            // loop - on - the - rowCourses
            rowCourses.forEach((ro) => {
                // remove - active - to - all-row
                ro.classList.remove("active");
                //

                // add - active - to -target-row
                if (ro.dataset.name == bu.dataset.name) {
                    ro.classList.add("active");
                }
            });
        });
    });
}

/* end-section-courses */

/* start-section-beginners */
let beginNers = document.querySelector(".beginners");
if (beginNers !== null) {
    {
        let openVideo = document.querySelector(".beginners .box-video .icon");
        let closeVideo = document.querySelector(
            ".beginners .video-container .close"
        );
        let videoBox = document.querySelector(".beginners .video-container");
        let beginnerHeaderBox = document.querySelectorAll(
            ".beginners .box-header .part"
        );
        if (openVideo !== null) {
            //  openVideo-onclick

            openVideo.addEventListener("click", (e) => {
                //  videoBox-add=active

                videoBox.classList.add("active");
            });
            closeVideo.addEventListener("click", (e) => {
                //  videoBox-remove=active
                videoBox.classList.remove("active");
                //

                // stop-the-video
                let video = videoBox.querySelector("video");

                video.defaultMuted = true;
                video.load();
            });
        }

        ///
        let titleBeginner = document.querySelectorAll(
            ".beginners .title-beginner .box button"
        );
        // loop - on - the - titleBeginner
        //
        if (titleBeginner !== null) {
            titleBeginner.forEach((bu) => {
                bu.addEventListener("click", (e) => {
                    removeActive(bu);
                    // loop - on - the - beginnerHeaderBox
                    beginnerHeaderBox.forEach((part) => {
                        part.classList.remove("active");
                        if (bu.dataset.name == part.dataset.name) {
                            part.classList.add("active");
                        }
                        //
                        //   if-part-dataset.name==All
                        if (bu.dataset.name == "All") {
                            part.parentElement
                                .querySelectorAll(".part")
                                .forEach((e) => {
                                    e.classList.add("active");
                                });
                        }
                    });
                });
            });
        }

        //
        /////
        let titleContent = document.querySelectorAll(
            ".beginners  .all-content .box-title"
        );
        // loop - on - the - titleBeginner
        if (titleContent !== null) {
            titleContent.forEach((ti) => {
                ti.addEventListener("click", (e) => {
                    ti.parentElement
                        .querySelector("ul")
                        .classList.toggle("active");
                    ti.querySelector(".title svg").classList.toggle("active");
                    ti.classList.toggle("active");
                });
            });
        }
        // ====
        //
        // fill-all-span-width
        let reviewsBox = document.querySelector(".reviews ");
        let reviewsSpan = document.querySelectorAll(
            ".reviews .content-star .content .info span"
        );
        if (reviewsBox !== null) {
            window.addEventListener("scroll", (sr) => {
                if (this.scrollY >= reviewsBox.offsetTop - 200) {
                    // loop-in-the-reviewsSpan
                    reviewsSpan.forEach((span) => {
                        span.style.width = span.parentElement.dataset.width;
                    });
                } else {
                    reviewsSpan.forEach((span) => {
                        span.style.width = "0";
                    });
                }
            });
        }

        // =====
    }
}

/* end-section-beginners */
/* start-switcherSection */

let switcherSection = document.querySelector(".switcher");
let switcherBoxLeft = document.querySelector(".switcher .box-left");
let switcherBoxRight = document.querySelector(".switcher .box-right");
let switcherColors = document.querySelectorAll(".switcher .icon");
let switcherDark = document.querySelector(".switcher .dark .form-check input");
////

// localStorage-color-option
let darkOptionLocal = localStorage.getItem("mood-option");

if (darkOptionLocal !== null) {
    if (darkOptionLocal == "#2c2d36") {
        document.documentElement.style.setProperty(
            "--body-bg-color",
            darkOptionLocal
        );
        document.documentElement.style.setProperty("--white", "#30323d");
        document.documentElement.style.setProperty("--black", "#fff");
        document.documentElement.style.setProperty(
            "--border-color-1",
            "rgb(62, 62, 62)"
        );
        switcherDark.setAttribute("checked", "");
        switcherDark.classList.add("active");
    }

    // ===
    else {
        document.documentElement.style.setProperty(
            "--body-bg-color",
            " hsl(var(--hue-value-1), 63%, 97%)"
        );
        document.documentElement.style.setProperty("--white", "#fff");
        document.documentElement.style.setProperty("--black", "#000");
        document.documentElement.style.setProperty(
            "--border-color-1",
            "hsl(0, 0%, 90%)"
        );
    }
}
///

switcherDark.addEventListener("click", (dr) => {
    switcherDark.classList.toggle("active");

    // dark-mood

    if (switcherDark.classList.contains("active")) {
        document.documentElement.style.setProperty(
            "--body-bg-color",
            "#2c2d36"
        );
        document.documentElement.style.setProperty("--white", "#30323d");
        document.documentElement.style.setProperty("--black", "#fff");
        document.documentElement.style.setProperty(
            "--border-color-1",
            "rgb(62, 62, 62)"
        );
        //    localStorage-append
        localStorage.setItem("mood-option", "#2c2d36");
    }
    // dark-mood
    else {
        document.documentElement.style.setProperty(
            "--body-bg-color",
            " hsl(var(--hue-value-1), 63%, 97%)"
        );
        document.documentElement.style.setProperty("--white", "#fff");
        document.documentElement.style.setProperty("--black", "#000");
        document.documentElement.style.setProperty(
            "--border-color-1",
            "hsl(0, 0%, 90%)"
        );
        //    localStorage-append
        localStorage.setItem(
            "mood-option",
            "hsl(var(--hue-value-1), 63%, 97%)"
        );
        localStorage.setItem(
            "white-option",
            "hsl(var(--hue-value-1), 63%, 97%)"
        );
    }
});
////

// show-switcherSection
switcherBoxLeft.addEventListener("click", (e) => {
    switcherSection.classList.add("active");
    switcherBoxLeft.style.display = "none";
    switcherBoxRight.style.display = "flex";
});
// hide-switcherSection
switcherBoxRight.addEventListener("click", (e) => {
    switcherSection.classList.remove("active");
    switcherBoxLeft.style.display = "flex";
    switcherBoxRight.style.display = "none";
});
////

// localStorage-color-option
let colorOptionLocal = localStorage.getItem("color-option");

if (colorOptionLocal !== null) {
    document.documentElement.style.setProperty(
        "--hue-value-1",
        colorOptionLocal
    );
    switcherColors.forEach((ic) => {
        ic.classList.remove("active");
        if (ic.dataset.color == colorOptionLocal) {
            ic.classList.add("active");
        }
    });
}

//
// loop-in-the-switcherColors
switcherColors.forEach((ic) => {
    ic.addEventListener("click", (cl) => {
        ic.parentElement.querySelector(".active").classList.remove("active");
        ic.classList.add("active");
        document.documentElement.style.setProperty(
            "--hue-value-1",
            ic.dataset.color
        );
        localStorage.setItem("color-option", ic.dataset.color);
    });
});

/* end-switcherSection */

// ==========================================

// removeActive function
function removeActive(e) {
    e.parentElement.querySelector(".active").classList.remove("active");
    e.classList.add("active");
}
