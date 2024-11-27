function toggleAnswer(answerNumber) {
    var answer = document.getElementById('answer' + answerNumber);
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}

