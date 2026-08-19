/* =====================================================
   DAILY NOTE
===================================================== */

const dailyNote = {

    date: "19 / 08 / 26",

    message:
        "first day of the site, made it especially for you. love you."

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
   STARFIELD
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
   SMART RANDOM QUOTE SYSTEM
===================================================== */

let unusedQuotes =
    JSON.parse(
        localStorage.getItem("unusedIntroQuotes")
    );


/*
    if there is no saved quote pool,
    create one from the full list
*/

if (
    !Array.isArray(unusedQuotes) ||
    unusedQuotes.length === 0
) {

    unusedQuotes =
        [...introQuotes];

}


/* get the next random unused quote */

function getNextQuote() {

    /*
        if every quote has been seen,
        start a completely new cycle
    */

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


    /*
        remember which quotes
        are still unused
    */

    localStorage.setItem(
        "unusedIntroQuotes",
        JSON.stringify(
            unusedQuotes
        )
    );


    return selectedQuote;

}


/* =====================================================
   QUOTE TRANSITIONS
===================================================== */

const quoteDuration = 2400;


/* show first quote */

quote.textContent =
    getNextQuote();


/* change quote */

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


const quoteInterval =
    setInterval(
        showNextQuote,
        quoteDuration
    );


/* =====================================================
   INTRO LOADING PROGRESS
===================================================== */

const introDuration =
    introQuotes.length *
    quoteDuration;


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
            introDuration,
            1
        );


    progress.style.width =
        percentage * 100 +
        "%";


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


    status.textContent =
        "just for you";


    progress.style.width =
        "100%";


    setTimeout(() => {

        intro.classList.add(
            "hidden"
        );


        site.classList.add(
            "visible"
        );


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

                const message =
                    envelope.dataset.message;


                modalMessage.textContent =
                    message;


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


/* close when clicking outside */

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


/* close with escape */

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
