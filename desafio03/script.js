function typingEffect(txt, elementId) {
    const typedTextSpan = document.getElementById(elementId);
    const textArray = txt;
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 1000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (textArrayIndex === 1) {
                typedTextSpan.innerHTML += `<span class="second-word">${textArray[textArrayIndex].charAt(charIndex)}</span>`;
            } else {
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            }
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
          
            textArrayIndex++;
            if (textArrayIndex < textArray.length) {
                typedTextSpan.textContent += ' '; 
                charIndex = 0;
                type();
            } else {
               
                setTimeout(erase, newTextDelay);
            }
        }
    }

    function erase() {
        if (typedTextSpan.textContent.length > 0) {
            let content = typedTextSpan.innerHTML;
            if (content.endsWith('</span>')) {
                content = content.substring(0, content.lastIndexOf('<span class="second-word">'));
            } else {
                content = content.slice(0, -1);
            }
            typedTextSpan.innerHTML = content;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex = 0;
            charIndex = 0;
            setTimeout(type, newTextDelay);
        }
    }

    if (textArray.length) setTimeout(type, newTextDelay + 250);
}