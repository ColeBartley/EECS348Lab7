function change_p_color(){
    //document.getElementById("test").innerHTML = document.getElementById("bR").value;
    let borderR = document.getElementById("bR").value;
    let borderG = document.getElementById("bG").value;
    let borderB = document.getElementById("bB").value;
    let borderwidth = document.getElementById("width").value;
    let backgroundR = document.getElementById("backR").value;
    let backgroundG = document.getElementById("backG").value;
    let backgroundB = document.getElementById("backB").value;

    document.getElementById("test").style.border = borderwidth + 'px solid '+ 'rgb(' + borderR + ',' + borderG + ',' + borderB + ')';
    document.getElementById("myDiv").style.backgroundColor = 'rgb(' + backgroundR + ',' + backgroundG + ',' + backgroundB + ')';
}