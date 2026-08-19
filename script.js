/* =====================================================
   DAILY NOTE
===================================================== */

const dailyNote = {

    date: "19 / 08 / 26",

    message:
        "first day of the site, dont forget that i love you."

};


/* =====================================================
   INTRO QUOTES
===================================================== */

const introQuotes = [

    "this place is just for you. ♡",

    "i wanted to make you something that meant more than flowers.",

    "you deserve little reminders",

    "some things are easier to write down",

    "I hope this makes you smile",

    "take your time",

    "there's something waiting for you",

    "i know you like corners.. so welcome to your little corner of the internet. ♡"

];


/* =====================================================
   INTRO ELEMENTS
===================================================== */

const intro =
    document.getElementById("intro");

const site =
    document.getElementById("site");

const quote =
    document.getElementById("intro-quote");

const progress =
    document.getElementById("loader-progress");

const status =
    document.getElementById("loader-status");


/* =====================================================
   INTRO STARFIELD
===================================================== */

function createStars(container, amount) {

    for (let i = 0; i < amount; i++) {

        const star =
            document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 4 + "s";

        star.style.animationDuration =
            2 + Math.random() * 5 + "s";

        container.appendChild(star);

    }

}


createStars(
    document.getElementById("intro-stars"),
    80
);

createStars(
    document.getElementById("stars"),
    90
);


/* =====================================================
   ROTATING INTRO QUOTES
===================================================== */

let quoteIndex = 0;

const quoteDuration = 2400;

const introDuration =
    introQuotes.length * quoteDuration;


/* Show next quote */

function nextQuote() {

    quote.classList.add("fade");

    setTimeout(() => {

        quoteIndex++;

        if (quoteIndex >= introQuotes.length) {

            quoteIndex = 0;

        }

        quote.textContent =
            introQuotes[quoteIndex];

        quote.classList.remove("fade");

    }, 800);

}


const quoteInterval =
    setInterval(
        nextQuote,
        quoteDuration
    );


/* =====================================================
   LOADING PROGRESS
===================================================== */

let startTime =
    performance.now();


function updateProgress(currentTime) {

    const elapsed =
        currentTime - startTime;

    const percentage =
        Math.min(
            elapsed / introDuration,
            1
        );

    progress.style.width =
        percentage * 100 + "%";


    if (percentage < 1) {

        requestAnimationFrame(
            updateProgress
        );

    }

}


requestAnimationFrame(
    updateProgress
);


/* =====================================================
   FINISH INTRO
===================================================== */

setTimeout(() => {

    clearInterval(quoteInterval);

    status.textContent =
        "just for you";


    progress.style.width =
        "100%";


    setTimeout(() => {

        intro.classList.add("hidden");

        site.classList.add("visible");

        document.body.style.overflow =
            "auto";

    }, 900);


}, introDuration);


/* =====================================================
   DAILY NOTE
===================================================== */

document.getElementById(
    "daily-date"
).textContent =
    dailyNote.date;


document.getElementById(
    "daily-message"
).textContent =
    dailyNote.message;


/* =====================================================
   OPEN WHEN LETTERS
===================================================== */

const envelopes =
    document.querySelectorAll(".envelope");

const modal =
    document.getElementById("message-modal");

const modalMessage =
    document.getElementById("modal-message");

const modalClose =
    document.getElementById("modal-close");


envelopes.forEach(envelope => {

    envelope.addEventListener(
        "click",
        () => {

            const message =
                envelope.dataset.message;

            modalMessage.textContent =
                message;

            modal.classList.add("active");

        }
    );

});


/* Close modal */

modalClose.addEventListener(
    "click",
    () => {

        modal.classList.remove(
            "active"
        );

    }
);


/* Click outside */

modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            modal.classList.remove(
                "active"
            );

        }

    }
);


/* Escape key */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            modal.classList.remove(
                "active"
            );

        }

    }
);
