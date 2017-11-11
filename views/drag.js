interact('.draggable')
    .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        restrict: {
            restriction: "parent",
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        // enable autoScroll
        autoScroll: true,

        // call this function on every dragmove event
        onmove: dragMoveListener,
        // call this function on every dragend event
        onend: function(event) {
            var textEl = event.target.querySelector('p');

            textEl && (textEl.textContent =
                'moved a distance of ' +
                (Math.sqrt(event.dx * event.dx +
                    event.dy * event.dy) | 0) + 'px');
        }
    });

function dragMoveListener(event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;

interact('.dropzone').dropzone({
    // only accept elements matching this CSS selector
    accept: '#yes-drop',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,

    // listen for drop related events:

    ondropactivate: function(event) {
        console.log("A");
        //when clicked
        // add active dropzone feedback
        event.target.classList.add('drop-active');
    },
    ondragenter: function(event) {
        console.log("B");
        //when hover over
        var draggableElement = event.relatedTarget,
            dropzoneElement = event.target;


        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target');
        draggableElement.classList.add('can-drop');


        //if element has "can drop", then run route
    },
    ondragleave: function(event) {
        console.log("C");
        //when hover off
        // remove the drop feedback style

        event.target.classList.remove('drop-target');
        event.relatedTarget.classList.remove('can-drop');
    },
    ondrop: function(event) {
        // event.relatedTarget.textContent = 'Dropped';
        console.log("dropped");
        var updateStatus = {
            name: $(event.relatedTarget).text(),
            status: event.target.id
        }
        console.log(updateStatus);
        $.get("/getchildID/" + updateStatus.name, function(event) {
                console.log("getting an ID");
                console.log(event);
                var childID = event[0]['id'];
                updateStatus.childID = childID;
                console.log(updateStatus);
                 $.post("/updateStatus", updateStatus, function(data) {
                    console.log(data);
                 });
            });


       
        

    },
    ondropdeactivate: function(event) {
        console.log("D");
        //when dropped
        // remove active dropzone feedback
        var draggableElement = event.relatedTarget;
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');


    }
});





// if($("#yes-drop").hasClass("step1") && $("#yes-drop").hasClass("step2")){
//   console.log("this one");
// }