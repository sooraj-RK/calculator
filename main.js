function display_data(data) {
    result.value += data

}
function Allclear() {
    result.value = " "

}

function equal() {
    result.value = eval(result.value)

}

function backspace() {
    data = result.value
    result.value = data.slice(0, -1)

}

document.addEventListener("keydown", function (event) {
    keypress(event.key)
})

function keypress(key) {
    switch (key) {

        case "1":
            display_data(1)
            break;
        case "2":
            display_data(2)
            break;
        case "3":
            display_data(3)
            break;
        case "4":
            display_data(4)
            break;
        case "5":
            display_data(5)
            break;
        case "6":
            display_data(6)
            break;
        case "7":
            display_data(7)
            break;
        case "8":
            display_data(8)
            break;
        case "9":
            display_data(9)
            break;

        case "0":
            display_data(0)
            break;
            

           
    }
}