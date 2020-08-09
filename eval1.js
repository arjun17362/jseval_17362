document.write(navigator.userAgent);

document.body.onmouseover=function(){mouseOver()};
document.body.onmouseout=function(){mouseOut()};


function mouseOver(){
	document.body.style.background="skyblue";

}

function mouseOut(){
	document.body.style.background="lightgreen";

}


function sort(labels){
	return labels.sort();
}

function left()
    {
        document.getElementById("popup").innerText="Left Side of Logo"
    }
    
    function right() {
        document.getElementById("popup").innerText = "Right side of Logo"
    }

    out()
    {
        document.getElementById("popup").innerText= "place cursor on image"
    }
    function imageClick()
    {
        window.open("enlarge.html")
    }

var p=prompt("enter the principle\n");
var n=prompt("enter the no of years\n");
var r=prompt("enter the rate\n");
var result=(p*n*r)/100
var labels=prompt("enter the names\n").split(",");


console.log("simple interest is ",result);
console.log("sorted order of the names are",sort(labels));



var i=1;
var n=prompt("enter the no of terms\n");
var t1=0;
var t2=1;
var nextterm;

console.log("fibbinocci series is")

for (i = 1; i <= n; ++i) {
        console.log(t1);
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
    }







