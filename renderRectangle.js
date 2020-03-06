
function renderRectangle(rectangle) {
    var boldText = function(){
        return "some bold text";
    }
    
    var blah = "some italics text";
        return `<i>${blah}</i>`;
    //return `
        //<div class="text-center mt-5">
            //<code>${JSON.stringify(rectangle)}</code>
        //</div>
    
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: 100,
        height: 200,
        color: "#FF00FF"
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);// setting inner HTML to the result of the renderRectangle function"A rectangle will go here"

}