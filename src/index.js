import _ from 'lodash';
import printMe from './print.js';

function component() {
    let element = document.createElement('div');
    var btn = document.createElement('button');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['ok', 'sahil'], ' ');

    btn.innerHTML = 'Click me and check the console!';
       btn.onclick = printMe;
    
      element.appendChild(btn);
  
    return element;
  }
  
  // document.body.appendChild(component());
 let element = component(); // Store the element to re-render on print.js changes
 document.body.appendChild(element);

  if (module.hot) {
      module.hot.accept('./print.js', function() {
         console.log('Accepting the updated printMe module!');
        //  printMe();
        document.body.removeChild(element);
             element = component(); // Re-render the "component" to update the click handler
             document.body.appendChild(element);
       })
     }
  