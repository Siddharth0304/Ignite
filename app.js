const textElement = document.getElementById('text');
const texts = ['Ignite', 'We Light Up The World']; // Add your desired strings here
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentString = texts[textIndex];
    const currentText = textElement.textContent;

    if (isDeleting) {
        textElement.textContent = currentString.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;

            // Optionally, you can add a delay before starting to type the next string
            setTimeout(() => {
                isDeleting = false;
            }, 100); // Adjust the delay if needed
        }
    } else {
        textElement.textContent = currentString.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentString.length) {
            isDeleting = true;
            // Optionally, you can add a delay before starting to delete the text
            setTimeout(() => {
                isDeleting = true;
            }, 100); // Adjust the delay if needed
        }
    }
}

setInterval(type, 150); // Adjust the typing speed if needed


let logo=document.querySelector('.logo');
logo.addEventListener('click',()=>{
    window.scrollTo(0,0);
})


window.addEventListener("load",()=>{
    setTimeout(()=>{
    let pic1=document.querySelector("#page1pic1");
    pic1.classList.add("trans");
    pic1.classList.remove("hidden");
    pic1.classList.add("show");
    setTimeout(()=>{
        let pic2=document.querySelector("#page1pic2");
        pic2.classList.add("trans");
        pic2.classList.remove("hidden");
        pic2.classList.add("show");
    },300)
    
    },700);
    
})

document.querySelector(".kno").addEventListener('click',()=>{
    document.querySelector(".info").classList.remove("disk");
    let p1=document.querySelector(".para1");
    let p2=document.querySelector(".para2");
    let p3=document.querySelector(".para3");
    let p4=document.querySelector(".para4");
    p1.classList.add("fade");
    p1.classList.remove("hidden");
    p1.classList.add("show");
    setTimeout(()=>{
        p2.classList.add("fade");
        p2.classList.remove("hidden");
        p2.classList.add("show");
    },750);
    setTimeout(()=>{p3.classList.add("fade");
                    p3.classList.remove("hidden");
                    p3.classList.add("show");
    },1500);
    setTimeout(()=>{p4.classList.add("fade");
                    p4.classList.remove("hidden");
                    p4.classList.add("show");
    },2250);
    let pic2=document.querySelector(".pic2");
    pic2.classList.remove("hidden");
    pic2.classList.add("pics2");
    let pic3=document.querySelector(".pic3");
    pic3.classList.remove("hidden");
    pic3.classList.add("pics3");
    setTimeout(()=>{
        let butx=document.querySelector(".svsc");
        butx.classList.remove("hidden");
        butx.classList.add("fade");
        let but=document.querySelector("#spyder");
        but.classList.remove("hidden");
        but.classList.add("fade");
    },3000)
    
})
