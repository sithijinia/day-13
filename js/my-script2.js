/**
 * Created by Web App Develop-PHP on 12/14/2017.
 */

function demo () {

    var newHeadingElement = document.createElement('h1');
    var newParagraphElement = document.createElement('p');

    newHeadingElement.innerHTML = 'This is a heading.';
    newParagraphElement.innerHTML = 'This is a paraghraph.';

    document.getElementById('div').appendChild(newHeadingElement);
    document.getElementById('div').appendChild(newParagraphElement);


}
document.getElementById('btn').onclick=function () {
    demo();
}