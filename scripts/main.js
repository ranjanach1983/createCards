var listNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

 

// Shuffle Functionality

function shuffleArray(array) {

    for (var i = array.length - 1; i > 0; i--) {

        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];

        array[i] = array[j];

        array[j] = temp;

    }

    createCards(array);

    return array;

}

 

// Sorting Functionality

function sortArray(array) {

    // Sort the arrays

    array.sort(function (a, b) { return a - b; });

    createCards(array);

}

 

// Creating the Number Cards

function createCards(array) {

    document.getElementById("main_ul").innerHTML = "";

    for (var i = 0; i < array.length; i++) {

        var li = document.createElement("li");

        var span = document.createElement("span");

        var colorSpan = document.createElement("span");

        colorSpan.innerHTML = 'T';

        var t = document.createTextNode(array[i]);

        span.appendChild(t);

        li.appendChild(span);

        li.appendChild(colorSpan);

        document.getElementById("main_ul").appendChild(li);

    }

}

 

createCards(listNumber);