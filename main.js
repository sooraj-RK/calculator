function display_data(data) {
    result.value+=data
    
}
function Allclear() {
    result.value=" "
    
}

function equal() {
    result.value=eval(result.value)
    
}

function backspace() {
    data=result.value
    result.value=data.slice(0,-1)
    
}