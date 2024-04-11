let buttons = document.querySelectorAll('.survey_button');

let array = [];
let poiner = 1;

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        let selectedOption = this.textContent.trim();

        array += 'Варіант ' + poiner + ' - ' + selectedOption + '\n';
        poiner++
    });
});

function getAnswers(){
    console.log(array);
}
