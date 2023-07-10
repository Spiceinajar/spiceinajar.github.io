var x;
for (x in index) {
    document.body.insertAdjacentHTML("beforeend", `
    
    <div class="pad">


    <div style="display: flex;">
        <h1><a href="creation.html?id=${x}">${index[x]["name"]}</a></h1>
        <h1 style="font-weight: 50; padding-left:.5%;">(${index[x]["release_year"]})</h1>
    </div>


    <h2>
        ${index[x]["tagline"]}
    </h2>

    <img class="card" src=${index[x]["banner_link"]}>
    </div>

    <br>
    
    `);
}

document.body.insertAdjacentHTML("beforeend", `<h1 class="txt" style="text-align: center;">...And more stuff coming in the future :)</h1>`);