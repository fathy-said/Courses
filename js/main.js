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

// ==========================================

// removeActive function
function removeActive(e) {
    e.parentElement.querySelector(".active").classList.remove("active");
    e.classList.add("active");
}
