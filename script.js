const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const siteNav = document.getElementById("siteNav");

menuBtn.addEventListener("click", function () {
    siteNav.classList.add("open");
    document.body.classList.add("no-scroll");
    menuBtn.setAttribute("aria-expanded", "true");
});

closeBtn.addEventListener("click", function () {
    siteNav.classList.remove("open");
    document.body.classList.remove("no-scroll");
    menuBtn.setAttribute("aria-expanded", "false");
});

/* ==========================================
   Contact Form Enhancements
========================================== */

const nameInput = document.getElementById("first-last-name");
const emailInput = document.getElementById("email-address");
const phoneInput = document.getElementById("phone-number");
const questionInput = document.getElementById("question-concern");

/* ---------- Name ---------- */

if (nameInput) {

    nameInput.addEventListener("input", function () {

        // Allow only letters, spaces, apostrophes, and hyphens
        let value = this.value.replace(/[^a-zA-Z\s'-]/g, "");

        // Remove extra spaces
        value = value.replace(/\s{2,}/g, " ");

        // Capitalize each word
        value = value.replace(/\b\w/g, function(letter) {
            return letter.toUpperCase();
        });

        this.value = value;

    });

}

/* ---------- Email ---------- */

if (emailInput) {

    emailInput.addEventListener("input", function () {

        this.value = this.value
            .replace(/\s/g, "")
            .toLowerCase();

    });

}

/* ---------- Phone ---------- */

if (phoneInput) {

    phoneInput.addEventListener("input", function () {

        let numbers = this.value.replace(/\D/g, "");

        numbers = numbers.substring(0, 10);

        if (numbers.length > 6) {

            this.value =
                numbers.substring(0, 3) + "-" +
                numbers.substring(3, 6) + "-" +
                numbers.substring(6);

        }
        else if (numbers.length > 3) {

            this.value =
                numbers.substring(0, 3) + "-" +
                numbers.substring(3);

        }
        else {

            this.value = numbers;

        }

    });

}

/* ---------- Question ---------- */

if (questionInput) {

    questionInput.addEventListener("input", function () {

        // Prevent multiple consecutive spaces
        this.value = this.value.replace(/\s{2,}/g, " ");

    });

}

/* ==========================================
   Navigation Hover Behavior
========================================== */

const siteNavLinks = document.querySelectorAll("#siteNav a");
const currentPageLink = document.querySelector('#siteNav a[aria-current="page"]');

if (currentPageLink) {

    siteNav.addEventListener("mouseenter", function () {
        currentPageLink.classList.add("current-inactive");
    });

    siteNav.addEventListener("mouseleave", function () {
        currentPageLink.classList.remove("current-inactive");
    });

}