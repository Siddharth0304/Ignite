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
