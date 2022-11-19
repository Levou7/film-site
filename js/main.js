let elWrapper = document.querySelector('.wrapper')
let elpage = document.querySelector('.my__page')

const data = movies.slice(0,100)

mapper(data.slice(0, 10))

function mapper(mapData) {
    elWrapper.innerHTML = ''
    mapData.forEach((e, i)=>{
        let newLi = document.createElement('li')
        newLi.innerHTML = `
        <div class="card" style="width: 18rem;">
    <img src="https://i.ytimg.com/vi/${e.ytid}/hqdefault.jpg?" class="card-img-top img" alt="...">
    <div class="card-body">
        <h5 class="card-title">${e.Title}</h5>
        <p class="card-text">${e.fulltitle}</p>
        <p class="card-text">${e.Categories}</p>
        <a href=https://www.youtube.com/watch?v=${e.ytid} target="_blank" class="btn btn-primary">Watch film</a>
    </div>
    </div>`
        elWrapper.appendChild(newLi)
})
}

let leng = data.length / 10

for (let i = 2; i <= leng; i++) {
    elpage.innerHTML += `<li class="page-item"><button class="page-link btn__page" href="#">${i}</button></li>`
    

}

let elBtn = document.querySelectorAll('.btn__page')

elBtn.forEach((e)=>{
    e.addEventListener('click',()=>{
        let num = e.textContent
        let dataPage = data.slice((num * 10) - 10, num * 10)
        mapper(dataPage)
        // e.style.transform = 'translateX(-100px)'
    })
})
