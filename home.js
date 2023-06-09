var x;
for (x in index) {
    document.body.insertAdjacentHTML("beforeend", `
    
    <div class="pad" style="width: 50%">
    <h1><a href="https://spiceinajar.github.io/creation.html?id=${x}">${index[x]["name"]}</a></h1>

    <h2>
        ${index[x]["tagline"]}
    </h2>

    <img src=${index[x]["banner_link"]}>
    </div>

    <br>
    
    `);
}

document.body.insertAdjacentHTML("beforeend", `<h1>...And more stuff coming soon :)</h1>`);