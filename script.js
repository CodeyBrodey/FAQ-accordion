// vars
const questions = document.querySelectorAll('.question');
const questionsArray = Array.from(questions);

// functions
const expander = (event) => {
    const on = event.target.parentNode;
    const off = questionsArray.filter(question => {
        return question !== on
    })
    if(on.classList.contains('active')){
        on.classList.remove('active')
    } else {
        on.classList.add('active');
        off.forEach(element => element.classList.remove('active'))
    }
    console.log()
}

// event listeners
questions.forEach(question => {
    question.addEventListener('click', expander);
})

console.log();