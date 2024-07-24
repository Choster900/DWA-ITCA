
const condition = document.getElementsByName("operar")

function onClick() {

    let elementoActivo = document.querySelector('input[name="operar"]:checked');

    const num1 = document.getElementById("num1")
    const num2 = document.getElementById("num2")

    let restul = 0


    switch (elementoActivo.id) {
        case "sumar":

            restul = parseFloat(num1.value) + parseFloat(num2.value)

            console.log(restul);
            break;
        case "restar":

            restul = parseFloat(num1.value) - parseFloat(num2.value)
            console.log(restul);


            break;
        case "multiplicar":
            restul = parseFloat(num1.value) * parseFloat(num2.value)
            console.log(restul);


            break;
        case "dividir":
            restul = parseFloat(num1.value) / parseFloat(num2.value)
            console.log(restul);
            break;
        default:
            break;
    }

    let res = document.getElementById("result")

    res.innerHTML = restul
    
    console.log();
}
