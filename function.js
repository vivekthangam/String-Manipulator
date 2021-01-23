var des = document.getElementById("des");
console.log(1)

var ConverString = (src, des, callback) =>
    callback(src, des)

var getDocAndConvert = (desStr, callback) => {
    var src = document.getElementById("str");
    var des = document.getElementById(desStr.toLowerCase());
    ConverString(src, des, callback);
}


var toLowerCase = (src, des) => {
    console.log(src);
    des.value = src.value.toLowerCase();
}


var toCamelCase = (src, des) => {
    var str = src.value;
    des.value = str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}


var toCamelCaseToNormal = (src, des) => {
    var str = src.value;
    des.value = str
        .replace(/([A-Z])/g, ' $1')
        // uppercase the first character
        .replace(/^./, function(str) { return str.toUpperCase(); })
}

var toUpperCase = (src, des) => {
    des.value = src.value.toUpperCase();
    console.log(des)
}


document.getElementById("loan-form").addEventListener("submit", function(e) {
    document.getElementById("result").style.display = "block";
});

function convertTo(e) {

    if (e == "LowerCase") {
        getDocAndConvert(e, toLowerCase)
    } else if (e == "UpperCase") {
        getDocAndConvert(e, toUpperCase)
    } else if (e == "CamelCase") {
        getDocAndConvert(e, toCamelCase)
    } else if (e == "Normal") {
        getDocAndConvert(e, toCamelCaseToNormal)

    }


    // Show Results
    document.getElementById("result").style.display = "block";

    // Hide Loader
    document.getElementById("loading").style.display = "none";
}


// Code By Webdevtrick ( https://webdevtrick.com )
// Listen for Submit
document.getElementById("loan-form").addEventListener("submit", function(e) {
    console.log(e.submitter.value);
    // Hide Results
    document.getElementById("result").style.display = "none";

    // Show Loader
    document.getElementById("loading").style.display = "block";
    setTimeout(convertTo(e.submitter.id), 2000);

    e.preventDefault();
});