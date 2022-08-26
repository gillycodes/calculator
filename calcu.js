let display = document.querySelector("#display");

let buttons = Array.from(document.querySelectorAll("#btns"));
buttons.map( button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText){
            case 'C':
                display.value = " ";
                break;
                case "Del":
                    display.value = display.value.slice(0, -1);
                    break;
                    case "=":
                        try{
                            display.value = eval(display.value);
                        } catch {
                            display.value = 'Error!';
                        }
                        break;
                default:
                    display.value += e.target.innerText;
        }
    })
}) 

function sin(){
    display.value = Math.sin(display.value);
}

function tan(){
    display.value = Math.tan(display.value);
}

function cos(){
    display.value = Math.cos(display.value);
}

function pow(){
    display.value = Math.pow(display.value,2);
}

function pows(){
    display.value = Math.pow(display.value,3);
}

function sqrt(){
    display.value = Math.sqrt(display.value,1/2);
}

function sqrts(){
    display.value = Math.sqrt(display.value,1/3);
}

function log(){
    display.value = Math.log(display.value);
}

function pi(){
    display.value = 3.14159265359 * display.value;
}

function e(){
    display.value = 2.71828182846 * display.value;
}

function fact() {
    let i, num, f;
    f=1;
    num= display.value;
    for(i=1; i<=num; i++){
        f=f*i;
    }
    i=i-1;
    display.value=f;
}
