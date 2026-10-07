// =========================
// BUKA UNDANGAN
// =========================

function openInvitation() {

    const cover = document.getElementById("cover");
    const main = document.getElementById("main");
    const music = document.getElementById("music");

    cover.style.display = "none";

    main.classList.remove("hidden");

    window.scrollTo(0, 0);

    music.play().catch(() => {
        console.log("Musik belum dapat dimainkan.");
    });
}


// =========================
// MUSIK
// =========================

function toggleMusic() {

    const music = document.getElementById("music");

    if (music.paused) {

        music.play();

    } else {

        music.pause();

    }
}


// =========================
// COUNTDOWN
// =========================

// Ubah tanggal di sini
const weddingDate =
    new Date("November 21, 2028 08:00:00").getTime();


function countdown() {

    const now =
        new Date().getTime();

    const distance =
        weddingDate - now;


    if (distance <= 0) {

        document.getElementById("days").textContent = "00";

        document.getElementById("hours").textContent = "00";

        document.getElementById("minutes").textContent = "00";

        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
            (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
            (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
            (1000 * 60)) /
            1000
        );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}


setInterval(countdown, 1000);

countdown();


// =========================
// RSVP
// =========================

document
    .getElementById("rsvpForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value;


            const attendance =
                document.getElementById("attendance").value;


            document.getElementById("result").innerHTML =
                `
                Terima kasih,
                <strong>${name}</strong> ❤️
                <br>
                Konfirmasi:
                <strong>${attendance}</strong>
                `;


            this.reset();

        }
    );


// =========================
// COPY REKENING
// =========================

function copyAccount() {

    const accountNumber =
        "1234567890";


    navigator.clipboard
        .writeText(accountNumber)
        .then(() => {

            alert(
                "Nomor rekening berhasil disalin!"
            );

        })
        .catch(() => {

            alert(
                "Gagal menyalin nomor rekening."
            );

        });

}