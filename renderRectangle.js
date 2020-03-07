
function renderRectangle(rectangle) {//the parameter rectangle is 
    console.log(rectangle.width)
    return (
        `<div class="text-center mt-5">
        <div style = "width:${rectangle.width}px; height:${rectangle.height}px; background-color:${rectangle.color}">
        </div>
        </div>`)
    
}

function rectangle() {
    var content = document.getElementById('content');//grabbing the content div from the HTML file
    var rectangleAbstraction = {
        width: 100,
        height: 200,
        color: "#FF00FF"
    };

    content.innerHTML = renderRectangle(rectangleAbstraction);// setting inner HTML to the result of the renderRectangle function

}

rectangle();