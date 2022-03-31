var bEnviar = false;

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('formcontacto').addEventListener('submit',
        manejadorValidacion)
});

function manejadorValidacion(e) {
    e.preventDefault();

    if (validarCampoNombre() && validarCampoEmail() && validarCampoAsunto() && validarCampoMensaje()) {
       // document.getElementById("btnenviar").removeAttribute ("disabled");
        bEnviar = true;
    }
}

document.getElementById("btnenviar").addEventListener('click', function (e) {
    if (bEnviar) {
        alert("En cuanto pueda te estaré respondiendo, Gracias!");
        this.submit();
    }
});


function validarCampoNombre() {
    let msglabel = document.getElementById('lbnombre');
    let campo = document.querySelector('[name=nombre]');
    let validado = true;

    if (campo.value == '') {
        msglabel.innerText = "El campo está vacío, debes escribir tu nombre";
        msglabel.classList.add("lblformerror");
        campo.focus();
        validado = false;
    } else {
        if (campo.value.length > 50) {
            msglabel.innerText = "El campo solo admite 50 caracteres";
            campo.value = campo.value.slice(0, 49) + '.';
        }
        campo.value = campo.value.toUpperCase();
        return validado;
    }
}

function validarCampoEmail() {
    let msglabel = document.getElementById('lbemail');
    let campo = document.querySelector('[name=email]');
    let validado = true;

    if (campo.value == '') {
        msglabel.innerText = "El campo está vacío, debes escribir tu correo";
        msglabel.classList.add("lblformerror");
        campo.focus();
        validado = false;
    } else {
        if (!validarEmail(campo.value)) {
            msglabel.innerText = "El correo no cumple con la forma correo@dominio.com";
            msglabel.classList.add("lblformerror");
            campo.focus();
            validado = false;
        } else {
            return validado;
        }
    }
}

function validarEmail(email) {
    let lcorreo = email.toLowerCase();
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    /*return re.test(lcorreo);*/
    return lcorreo.match(re);
}


function validarCampoAsunto() {
    let msglabel = document.getElementById('lbasunto');
    let campo = document.querySelector('[name=asunto]');
    let validado = true;

    if (campo.value == '') {
        msglabel.innerText = "El campo está vacío, debes escribir el asunto";
        msglabel.classList.add("lblformerror");
        campo.focus();
        validado = false;
    } else {
        if (campo.value.length > 50) {
            msglabel.innerText = "El campo solo admite 50 caracteres";
            campo.value = campo.value.slice(0, 49) + '.';
        }
        campo.value = campo.value.toUpperCase();
        return validado;
    }
}

function validarCampoMensaje() {
    let msglabel = document.getElementById('lbmensaje');
    let campo = document.querySelector('[name=mensaje]');
    let validado = true;

    if (campo.value.length == 0) {
        msglabel.innerText = "El campo está vacío, debes escribir un mensaje";
        msglabel.classList.add("lblformerror");
        campo.focus();
        validado = false;
    } else {
        campo.value = campo.value.toUpperCase();
        return validado;
    }
}


const mensaje = document.getElementById('areamensaje');
const contador = document.getElementById('contador');

mensaje.addEventListener('input', function (e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});


function checkform(txt) {

    var inputs = document.getElementsByTagName('input');  
    var txtarea = document.getElementById('areamensaje');
    var bt = document.getElementById('btnenviar');
    var binputsok = false;

    // recorremos cada uno de los elementos
    for (i = 0; i < inputs.length; i++) {

        // revisamos el tipo de elemento
        if (inputs[i].type == 'text' && inputs[i].value == '') {
            bt.disabled = true;    // Deshabilitar el boton
            return false;
        }
        else {
          //  Todas las cajas input estan llenas
          binputsok= true;
        }
    }
  
  if (binputsok){
    if (txtarea.value == ''){
      bt.disabled = true;  
            return false;
    }else{
      bt.disabled = false;  
    }
  }
    // credits: https://www.encodedna.com/
}