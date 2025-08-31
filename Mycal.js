    function press(value) {
    let out = document.getElementById("result");
    out.innerHTML +=value

    if(value === "+"){
        console.log("Это плюс")
    }
};

function Result() {
    let p  = document.getElementById('result').innerHTML;
    let sum = eval(p);
    document.getElementById('result').innerHTML = sum;
}

function Clear() {
    document.getElementById("result").innerHTML = "";
}
