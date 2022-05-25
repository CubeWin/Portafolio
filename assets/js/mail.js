const inputEmail = document.getElementById("emailSend");
const respSend = document.getElementById("validSend");
const URL = "https://cubewin.sempeperusac.com/assets/php/index.php";

const validEmail = (w) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(w);

function inputKeyup(correo = "") {
    let valEmail = this.value ?? correo;
    // console.log(`${this.value} || ${valEmail}`);
    if (!validEmail(valEmail)) {
        respSend.style.color = "#FF6188";
        respSend.innerText = "El correo ingresado no tiene un formato valido.";
        return false;
    }
    respSend.style.color = "#A9DC62";
    respSend.innerText = "";
    return true;
}
// console.log(`${inputKeyup("mail")} <=`);
// console.log('    sd    gd       d   '.replace(/ /g,''));

inputEmail.addEventListener("keyup", inputKeyup);

const sendContact = async function (mySubmit) {
    let formdata = new FormData();
    mySubmit.setAttribute("disabled", true);
    mySubmit.innerHTML = "Enviando...";
    formdata.append("email", inputEmail.value);
    try {
        if (!inputKeyup(inputEmail.value)) {
            throw new Error(
                `El "${inputEmail.value}" no cumple con el formato.`
            );
        }
        const response = await fetch(URL, {
            method: "POST",
            body: formdata,
        });
        console.log(response);
        if (!response) {
            throw new Error("No se pudo enviar el mensaje");
        }
        mySubmit.removeAttribute("disabled");
        mySubmit.innerHTML = '<i class="fa fa-send"></i> Enviar';
        respSend.style.color = "#A9DC62";
        respSend.innerText = "Mensaje enviado correctamente";
        inputEmail.value = ''
    } catch (error) {
        mySubmit.removeAttribute("disabled");
        respSend.style.color = "#FF6188";
        respSend.innerText = `=> ${error}`;
        mySubmit.innerHTML = '<i class="fa fa-send"></i> Enviar';
        console.error(`fallo en el mensajer => ${error}`);
    }
};
