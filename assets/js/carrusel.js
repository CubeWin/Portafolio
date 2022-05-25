const pjt01 = document.querySelector("#project01");
const pjt02 = document.querySelector("#project02");
const pjt03 = document.querySelector("#project03");

pjt01.addEventListener("click", () => {
    rezi(pjt01);
});

pjt02.addEventListener("click", () => {
    rezi(pjt02);
});

pjt03.addEventListener("click", () => {
    rezi(pjt03);
});

const rezi = async (a) => {
    const myKey = a.getAttribute("mykey");
    if (!a.classList.contains("active--content")) {
        pjt01.classList.remove("active--content");
        pjt02.classList.remove("active--content");
        pjt03.classList.remove("active--content");

        pjt01.classList.remove("active--01");
        pjt02.classList.remove("active--01");
        pjt03.classList.remove("active--01");

        pjt01.classList.remove("active--02");
        pjt02.classList.remove("active--02");
        pjt03.classList.remove("active--02");

        const dp1 = document.querySelector("#description--project01");
        const dp2 = document.querySelector("#description--project02");
        const dp3 = document.querySelector("#description--project03");

        // pjt02.classList.add("active--01");

        switch (myKey) {
            case "1":
                pjt02.classList.add("active--01");
                pjt03.classList.add("active--02");
                dp1.classList.remove("opacity--00");
                dp2.classList.add("opacity--00");
                dp3.classList.add("opacity--00");
                break;
            case "2":
                pjt03.classList.add("active--01");
                pjt01.classList.add("active--02");
                dp2.classList.remove("opacity--00");
                dp3.classList.add("opacity--00");
                dp1.classList.add("opacity--00");
                break;
            case "3":
                pjt01.classList.add("active--01");
                pjt02.classList.add("active--02");
                dp3.classList.remove("opacity--00");
                dp1.classList.add("opacity--00");
                dp2.classList.add("opacity--00");
                break;
            default:
                break;
        }
        a.classList.add("active--content");
    }
};

const nextPag = () => {
    if (pjt01.classList.contains("active--content")) {
        pjt02.click();
    } else if (pjt02.classList.contains("active--content")) {
        pjt03.click();
    } else if (pjt03.classList.contains("active--content")) {
        pjt01.click();
    }
};

const prevPag = () => {
    if (pjt01.classList.contains("active--content")) {
        pjt03.click();
    } else if (pjt02.classList.contains("active--content")) {
        pjt01.click();
    } else if (pjt03.classList.contains("active--content")) {
        pjt02.click();
    }
};

const goTo = (a) => {
    const element = a.getAttribute("goelement");
    document.getElementById(element).scrollIntoView();
};
