var heightW = window.innerHeight;
const project1 = document.querySelector('.project1');
const project2 = document.querySelector('.project2');
const project3 = document.querySelector('.project3');
const project4 = document.querySelector('.project4');
const height1 =  project1.clientHeight;
const height2 =  project2.clientHeight;
const height3 =  project3.clientHeight;
const height4 =  project4.clientHeight;
const effect1 = document.querySelector('.effectProject1')
const effect2 = document.querySelector('.effectProject2');
const effect3 = document.querySelector('.effectProject3');
const effect4 = document.querySelector('.effectProject4');

const RevealOnScroll = (element, heightElement, effectElement) => {
    window.addEventListener('scroll', () => {
    if(scrollY - heightElement >=  element.getBoundingClientRect().top - window.innerHeight + scrollY) {
        element.style.transition = '0.5s';
      //  element.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25), -20px 40px 0px rgba(0, 0, 0, 0.25), 20px 40px 0px 10px rgba(0, 0, 0, 0.25)';
        element.style.transform = 'width';
        element.style.width = '100%'
        effectElement.style.transition = '0.5s';
        effectElement.style.transitionDelay = '500ms';
        effectElement.style.transform = 'scaleX(0)'
    //    setTimeout(effectElement.style.opacity = '0', 100000);
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

const container = document.querySelector('.container');
window.addEventListener('scroll', () => {
  container.style.backgroundPositionX = window.scrollY / 7 + "px";
  console.log('yeees');
})
