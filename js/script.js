var heightW = window.innerHeight;
const project1 = document.querySelector('.project1');
const project2 = document.querySelector('.project2');
const project3 = document.querySelector('.project3');
const project4 = document.querySelector('.project4');
const height1 =  project1.clientHeight;
const height2 =  project2.clientHeight;
const height3 =  project3.clientHeight;
const height4 =  project4.clientHeight;
const effect1 = document.querySelector('effectProject1');
const effect2 = document.querySelector('effectProject2');
const effect3 = document.querySelector('effectProject3');
const effect4 = document.querySelector('effectProject4');

const RevealOnScroll = (element, heightElement, effectElement) => {
    window.addEventListener('scroll', () => {
    if(scrollY - heightElement/3 >=  element.getBoundingClientRect().top - window.innerHeight + scrollY) {
        element.style.opacity = '1';
        element.style.transition = '1s cubic-bezier(.12,1.08,.19,1.01)';
        element.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25), -20px 40px 0px rgba(0, 0, 0, 0.25), 20px 40px 0px 10px rgba(0, 0, 0, 0.25)';
        element.style.transform = 'width';
        element.style.transform = 'translateX(0px)';
        element.style.transformOrigin = "left";
        element.style.width = "100%"
        effectElement.style.transform = 'width';
        effectElement.style.transformOrigin = "right";
        effectElement.style.width = "0%"
        effectElement.style.transition = '1s cubic-bezier(.12,1.08,.19,1.01)';
        effectElement.style.transitionDelay = "250ms";
        effectElement.style.transform = 'translateX(300px)';
        console.log('ok');
    }
    })
}

RevealOnScroll(project1, height1, effect1);
RevealOnScroll(project2, height2, effect2);
RevealOnScroll(project3, height3, effect3);
RevealOnScroll(project4, height4, effect4);


console.log(scrollY);
console.log(project1.getBoundingClientRect().bottom);

//scrollY >= element.getBoundingClientRect().top + scrollY