//Key up listener for input field
var nameInput = document.getElementById('name');
nameInput.addEventListener('keyup', nameChangeHandler);

/**
 * Change attribute so web component will do some magic updating content
 *
 * @param e
 */
function nameChangeHandler(e)
{
    var awesomeFooter = document.getElementById('awesome-footer');
    awesomeFooter.setAttribute('name', nameInput.value);
}
