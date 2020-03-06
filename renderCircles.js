
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    for (var i=0; i < circles.length; i++){

    }
    var circlesString = [];
    `<div style = radius:${circles.radius}; color:${circles.background-color};</div>`
    circlesString.push(circlesAbstraction); 
    
    
    console.log(circlesString);
    
    return `
        <div class="text-center mt-5">
        <div style = radius:${circles.radius}; color:${circles.background-color};
            <code>${circles.[i].radius}</code>
        </div>
    `
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}