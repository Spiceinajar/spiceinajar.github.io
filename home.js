var x;
for (x in index) {
    document.body.insertAdjacentHTML("beforeend", `
    
    <div class="pad" style="width: 50%">


    <div style="display: flex;">
        <h1><a href="creation.html?id=${x}">${index[x]["name"]}</a></h1>
        <h1 style="font-weight: 50; padding-left:.5%;">(${index[x]["release_year"]})</h1>
    </div>


    <h2>
        ${index[x]["tagline"]}
    </h2>

    <img src=${index[x]["banner_link"]}>
    </div>

    <br>
    
    `);
}
