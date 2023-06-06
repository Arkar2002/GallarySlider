let getimgs = document.querySelectorAll('.img'),
    getmodal = document.querySelector('.modal'),
    getbtnclose = document.querySelector('.btn-close'),
    getviews = document.querySelectorAll('.view'),
    getnoactives = document.querySelectorAll('.noactive'),
    getcaption = document.getElementById('caption'),
    getcounter = document.getElementById('counter'),
    getprevbtn = document.getElementById('prev'),
    getnextbtn = document.getElementById('next');

let curslide = 1;

getbtnclose.addEventListener("click",closemodal);

getnextbtn.addEventListener("click",()=>{
    curslide++;
    imageshow();
});

getprevbtn.onclick = () => {
    curslide -= 1;
    imageshow();
}

window.onclick = (e) => {
    if(e.target === getmodal){
        closemodal();
    }
}

getimgs.forEach(getimg => {
    getimg.addEventListener("click",(e) => {
        let getalt = e.target.alt.split("").filter(empty => empty.trim() !== "");
        curslide = Number(getalt[getalt.length - 1]);
        showmodal();
        imageshow();
    })
})

function currentview(index) {
    curslide = +index;
    imageshow();
}

function showmodal() {
    getmodal.style.display = "block";
}

function imageshow() {
    getviews.forEach(getview => {
        getview.style.display = "none";
    })

    for(let x = 0; x < getnoactives.length; x++) {
        getnoactives[x].classList.remove("active");
    }

    if (curslide < 1) {
        curslide = getimgs.length;
    }else if (curslide > getimgs.length){
        curslide = 1;
    }

    getviews[curslide - 1].style.display = "block";
    getnoactives[curslide - 1].classList.add("active");
    getcounter.textContent = `${curslide}/${getimgs.length}`;
    getcaption.innerText = getimgs[curslide - 1].alt;
}

function closemodal() {
    getmodal.style.display = "none";
}
