
function renderNametags(nametags) {
    var body = '';

    body = '';
    for (x=0;x<nametags.length;x++)
    {   
        body += renderNametag(nametags[x]);
    }

    return body;
}

function renderNametag(name)
{
    return `
        <div class="text-center mt-5">
        <code>${JSON.stringify(name)}</code>
        </div>
        <div class="nametags">
        //nametags.nametagsAbstraction
        </div>
    `
}

function renderNametags(nametags) {
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(nametags)}</code>
        </div>
    `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]
    
    content.innerHTML += renderNametags(nametagsAbstraction);
}