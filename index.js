const options = {
    method: 'GET',
    headers: {
        Authorization: "Bearer 563492ad6f91700001000001dc7d4a6d9b764e8984998581ae133713"
    }
};

const loadPics = () => {

    fetch('https://api.pexels.com/v1/search?query=mountain', options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const grid = document.querySelector(".load-container > .load-row")

            for (let i = 0; i < data.photos.length; i++) {
                const pics = data.photos[i]

                const col = document.createElement("div")
                col.className = "col-sm-6 col-md-4 col-lg-3"

                col.innerHTML = `
                            <div class="card">
                                <img src=${pics.src.tiny} class="card-img-top" alt=${pics.id}>
                                <div class="card-body">
                                    <h5 class="card-title">${pics.photographer}</h5>
                                </div>
                            </div>
            `

                grid.appendChild(col)
            }
        })
        .catch(err => console.log(err))
}

const btn = document.getElementById("button-1")
btn.addEventListener("click", loadPics)



const loadSecondPics = () => {

    fetch('https://api.pexels.com/v1/search?query=city', options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const grid = document.querySelector(".secondary-container > .secondary-row")

            for (let i = 0; i < data.photos.length; i++) {
                const pics = data.photos[i]

                const col = document.createElement("div")
                col.className = "col-sm-6 col-md-4 col-lg-3"

                col.innerHTML = `
                            <div class="card">
                                <img src=${pics.src.tiny} class="card-img-top" alt=${pics.id}>
                                <div class="card-body">
                                    <h5 class="card-title">${pics.photographer}</h5>
                                </div>
                            </div>
            `

                grid.appendChild(col)
            }
        })
        .catch(err => console.log(err))
}

const btn2 = document.getElementById("button-2")
btn2.addEventListener("click", loadSecondPics)


