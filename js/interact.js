import interact from 'interactjs';

const home = interact('.H');
const project = interact('.P');
const about = interact('.A');
const blog = interact('.B');

const dragThings = (thing) => {
    const position = { x: 0, y: 0 }
    thing
    .draggable({
        listeners: {
          start (event) {
            console.log(event.type, event.target)
          },
          move (event) {
            position.x += event.dx
            position.y += event.dy
      
            event.target.style.transform =
              `translate(${position.x}px, ${position.y}px)`
          },
          inertia: true,
        }
      })
      .on('tap', function (event) {
        if(event){

        }
    }) 
}

dragThings(home);
dragThings(project);
dragThings(about);
dragThings(blog);
