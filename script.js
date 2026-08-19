/* =====================================================
   DAILY NOTE
===================================================== */

const dailyNote = {

    date: "20 / 08 / 26",

    message:
        "hey han. how are you today? i love you."

};


/* =====================================================
   INTRO QUOTES
===================================================== */

const introQuotes = [

    "this place is just for you ♡",

    "i wanted to make you something",

    "welcome to your little corner of the internet",

    "you deserve little reminders",

    "some things are easier to write down",

    "i hope this makes you smile",

    "take your time",

    "theres something waiting for you",

    "you made it here ♡",

    "a little piece of my thoughts, for you",

    "just a few things i wanted you to have",

    "for the days you need a reminder",

    "for the moments you need a smile",

    "you dont have to rush through this",

    "stay for a little while",

    "i made this with you in mind",

    "theres no particular reason to hurry",

    "a quiet little place for a very special person",

    "i hope you know how much you matter",

    "even the little things deserve to be remembered",

    "some memories deserve their own little place",

    "this is only the beginning",

    "theres always room for another little memory",

    "come back whenever you need a reminder",

    "maybe this will make today a little better",

    "i hope youre smiling right now",

    "youve got a whole little world waiting for you",

    "one little page at a time",

    "made slowly, with a lot of thought",

    "because sometimes a simple reminder is enough",

    "for good days, bad days, and everything between",

    "you are worth making something beautiful for",

    "if you needed a sign to smile, here it is",

    "somewhere in here is a little reminder of us",

    "theres more to this than the first page",

    "keep looking",

    "you might find something meant just for you",

    "the best things arent always the loudest",

    "sometimes the smallest things mean the most",

    "another little reminder that youre cared about",

    "this screen is temporary, but the thought behind it isnt",

    "i hope you feel at home here",

    "nothing complicated, just something made for you",

    "you deserve to have good things waiting for you",

    "a tiny corner of the internet, reserved for you",

    "before you see everything, just know this was made for you ♡",

    "i know you like corners.. so i made you a little corner of the internet.",

    "this took me way too long lmao",

    "you better smile when you see this",

    "idk what else to say so just look around",

    "youre stuck with this now",

    "welcome i guess",

    "alright lets do this",

    "this ones yours",

    "just for you",

    "because i wanted to",

    "because you deserve it",

    "i thought you might like this",

    "theres gonna be more here eventually",

    "come back tomorrow",

    "ill probably change something by then",

    "i have more planned",

    "dont leave yet",

    "okay maybe now you can look",

    "♡"

];


/* =====================================================
   ELEMENTS
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
    document.querySelector(
        ".loader-text span:last-child"
    );

const introContent =
    document.querySelector(".intro-content");

const nameReveal =
    document.getElementById(
        "name-reveal"
    );

document.body.style.overflow = "hidden";


/* =====================================================
   STARS
===================================================== */

function createStars(
    container,
    amount
) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

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
   SMART NON-REPEATING QUOTES
===================================================== */

let unusedQuotes =
    JSON.parse(
        localStorage.getItem(
            "unusedIntroQuotes"
        )
    );


if (
    !Array.isArray(unusedQuotes) ||
    unusedQuotes.length === 0
) {

    unusedQuotes =
        [...introQuotes];

}


function getNextQuote() {

    if (
        unusedQuotes.length === 0
    ) {

        unusedQuotes =
            [...introQuotes];

    }


    const randomIndex =
        Math.floor(
            Math.random() *
            unusedQuotes.length
        );


    const selectedQuote =
        unusedQuotes.splice(
            randomIndex,
            1
        )[0];


    localStorage.setItem(
        "unusedIntroQuotes",
        JSON.stringify(
            unusedQuotes
        )
    );


    return selectedQuote;

}


/* =====================================================
   INTRO TIMING
===================================================== */

const quoteDuration = 2200;

const numberOfIntroQuotes = 4;

const introQuoteTime =
    quoteDuration *
    numberOfIntroQuotes;


/* =====================================================
   SHOW QUOTES
===================================================== */

function showNextQuote() {

    quote.classList.add("fade");


    setTimeout(() => {

        quote.textContent =
            getNextQuote();

        quote.classList.remove(
            "fade"
        );

    }, 800);

}


quote.textContent =
    getNextQuote();


let quoteCount = 1;


const quoteInterval =
    setInterval(() => {

        if (
            quoteCount >=
            numberOfIntroQuotes
        ) {

            clearInterval(
                quoteInterval
            );

            return;

        }


        showNextQuote();

        quoteCount++;

    }, quoteDuration);


/* =====================================================
   LOADING PROGRESS
===================================================== */

const startTime =
    performance.now();


function updateProgress(
    currentTime
) {

    const elapsed =
        currentTime -
        startTime;


    const percentage =
        Math.min(
            elapsed /
            introQuoteTime,
            1
        );


    progress.style.width =
        percentage * 100 + "%";


    if (
        percentage < 1
    ) {

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

    clearInterval(
        quoteInterval
    );


    progress.style.width =
        "100%";


    status.textContent =
        "just for you";


    introContent.style.opacity =
        "0";


    setTimeout(() => {

        nameReveal.classList.add(
            "active"
        );

    }, 700);


    setTimeout(() => {

        nameReveal.classList.remove(
            "active"
        );


        setTimeout(() => {

            intro.classList.add(
                "hidden"
            );


            site.classList.add(
                "visible"
            );


            document.body.style.overflow = "auto";


        }, 1000);


    }, 3200);


}, introQuoteTime);


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
    document.querySelectorAll(
        ".envelope"
    );


const modal =
    document.getElementById(
        "message-modal"
    );


const modalMessage =
    document.getElementById(
        "modal-message"
    );


const modalClose =
    document.getElementById(
        "modal-close"
    );


envelopes.forEach(
    envelope => {

        envelope.addEventListener(
            "click",
            () => {

                modalMessage.textContent =
                    envelope.dataset.message;

                modal.classList.add(
                    "active"
                );

            }
        );

    }
);


/* =====================================================
   CLOSE MODAL
===================================================== */

modalClose.addEventListener(
    "click",
    () => {

        modal.classList.remove(
            "active"
        );

    }
);


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


/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop =
    document.getElementById(
        "back-to-top"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            backToTop.classList.add(
                "visible"
            );

        } else {

            backToTop.classList.remove(
                "visible"
            );

        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);





const secretLines =
    document.querySelectorAll(
        ".secret-line, .secret-final, .secret-last"
    );



/* =====================================================
   SECRET HEART
===================================================== */

const secretHeart = document.getElementById("secret-heart");
const secretPage = document.getElementById("secret-page");
const secretClose = document.getElementById("secret-close");

let heartClicks = 0;
let clickTimer = null;
let secretOpened = false;


/* =========================
   HEART CLICK
========================= */

if (secretHeart && secretPage) {

    secretHeart.addEventListener("click", function () {

        if (secretOpened) return;

        heartClicks++;

        secretHeart.classList.add("secret-found");

        setTimeout(() => {
            secretHeart.classList.remove("secret-found");
        }, 500);

        clearTimeout(clickTimer);

        clickTimer = setTimeout(() => {
            heartClicks = 0;
        }, 1200);

        if (heartClicks >= 3) {

            clearTimeout(clickTimer);

            heartClicks = 0;

            openSecret();

        }

    });

}

/* =========================
   OPEN SECRET
========================= */

function openSecret() {

    if (secretOpened) return;

    secretOpened = true;

    secretPage.classList.add("active");

    secretPage.setAttribute(
        "aria-hidden",
        "false"
    );

    startSecretReveal();

}


/* =========================
   REVEAL
========================= */

function startSecretReveal() {

    const lines = document.querySelectorAll(
        "#secret-page .secret-line, #secret-page .secret-final, #secret-page .secret-last"
    );

    lines.forEach(line => {

        const delay = Number(
            line.dataset.delay || 0
        );

        setTimeout(() => {

            line.classList.add("show");

        }, delay);

    });

    if (secretClose) {

        setTimeout(() => {

            secretClose.classList.add("show");

        }, 31500);

    }

}


/* =========================
   CLOSE SECRET
========================= */

if (secretClose) {

    secretClose.addEventListener("click", function () {

        secretPage.classList.remove("active");

        secretPage.setAttribute(
            "aria-hidden",
            "true"
        );

        const lines = document.querySelectorAll(
            "#secret-page .secret-line, #secret-page .secret-final, #secret-page .secret-last"
        );

        lines.forEach(line => {
            line.classList.remove("show");
        });

        if (secretClose) {
            secretClose.classList.remove("show");
        }

        secretOpened = false;

    });

}
