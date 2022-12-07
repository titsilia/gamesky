function game1() {
  function seasons(month) {
    if (month > 0 && month <= 2 || month == 12) {
      alert('Зима');
    } else if (month > 2 && month <= 5) {
      alert('Весна');
    } else if (month > 5 && month <= 8) {
      alert('Лето');
    } else if (month > 8 && month <= 11) {
      alert('Осень')
    } else {
      alert('Такого месяца нет')
    }
  }
  seasons(Number(prompt('Введите номер месяца')));
}

function game2() {
  let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  arr = arr.sort(() => Math.random() - 0.5);
  alert(arr);
  
  let wordFirst = prompt('Чему равнялся первый элемент?')
  let wordLast = prompt('Чему равнялся последний элемент?')
  
  if (wordFirst === arr[0] && wordLast === arr[arr.length - 1]) {
    alert('Поздравляем! Вы угадали!');
  } else if (wordFirst === arr[0] || wordLast === arr[arr.length - 1]) {
    alert('Вы были близки к поебеде');
  } else {
    alert('Неверно, попробуйте ещё раз :(');
  }
}

function game3 () {
  const game = {
    question: 'Сидит дед, кто его раздевает, тот слёзы проливает.',
    answer: '',
    answerList: 'лук',
    hints: ["Подсказка: это 'что'", 'Подсказка: это овощь', ],
    askQuestion() {
      this.answer = prompt(this.question).toLocaleLowerCase();
    },
    showHint() {
      alert(this.hints[0]);
      this.hints.shift();
      this.play();
    },
    play() {
      this.askQuestion();
      if (this.answerList.includes(this.answer)) {
        alert('Правильно');
      } else {
        if (this.hints.length > 0) {
          this.showHint();
        } else {
          alert('Вы проиграли');
        }
      }
    }
  }
  game.play();
}