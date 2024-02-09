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
logo.addEventListener('click',()=>{demo()})

// });  FOR LOGO ON CLICK

window.addEventListener("load",()=>{
    let p1=document.querySelector(".para1");
    let p2=document.querySelector(".para2");
    let p3=document.querySelector(".para3");
    let p4=document.querySelector(".para4");
    p1.classList.add("trans");
    p1.classList.remove("hidden");
    p1.classList.add("show");
    setTimeout(()=>{p2.classList.add("trans");
                    p2.classList.remove("hidden");
                    p2.classList.add("show");
    },1000);
    setTimeout(()=>{p3.classList.add("trans");
                    p3.classList.remove("hidden");
                    p3.classList.add("show");
    },2000);
    setTimeout(()=>{p4.classList.add("trans");
                    p4.classList.remove("hidden");
                    p4.classList.add("show");
    },3000);
    let pic2=document.querySelector(".pic2");
    pic2.classList.remove("hidden");
    pic2.classList.add("pics2");
    let pic3=document.querySelector(".pic3");
    pic3.classList.remove("hidden");
    pic3.classList.add("pics3")
})

let url='https://api.quotable.io/random';
async function demo(){
    try{
        let res=await axios.get(url);
        document.querySelector("h4").innerText=res.data.content;
    }
    catch(e){
        console.log("hello");
    }
}