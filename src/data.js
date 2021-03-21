'use strict';

export const data = {
  timing: null,
  seconds: 0,
  minutes: 0,
  displaySeconds: 0,
  displayMinutes: 0,
};

export const quizData = {
  quiz: {
    // how many questions has the user answered?
    //  you can calculate this value by iterating through the questions
    //  is selected === null?
    answered: 0,
    // how many correct answers has the user submitted?
    //  you can calculate this value by iterating through the questions
    //  is selected === correct?
    correct: 0,
  },
  // the questions in the quiz
  questions: [
    {
      text: 'What are the different ways to declare a JS variable?',
      answers: {
        a: 'constant, let, variable',
        b: 'var, const, let, function',
        c: 'var, let, const',
        d: 'All of the mentioned',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
      ],
    },
    {
      text: 'The return type of getElementsByClassName() is..',
      answers: {
        a: 'DOM',
        b: 'Document',
        c: 'Node',
        d: 'NodeList',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href:
            'https://www.examveda.com/javascript/practice-mcq-question-on-document-object-model-and-event-handling/?page=10',
        },
      ],
    },
    {
      text: 'The most popular programing language in 2020 is?',
      answers: {
        a: 'Java',
        b: 'Python',
        c: 'C',
        d: 'JavaScript',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://fossbytes.com/most-popular-programming-languages/',
        },
      ],
    },
    {
      text: 'Which one of the following is correct?',
      answers: {
        a: 'i =+ 1',
        b: 'i += 1',
        c: 'i = i++1',
        d: '+i+',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://www.w3docs.com/quiz/javascript-basic',
        },
      ],
    },
    {
      text: 'Which of the following are examples of closures?',
      answers: {
        a: 'Objects',
        b: 'Variables',
        c: 'Functions',
        d: 'All of the mentioned',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href:
            'https://www.examveda.com/javascript/practice-mcq-question-on-document-object-model-and-event-handling/?page=10',
        },
      ],
    },
   {
      text: 'Inside which element do you put JavaScript?',
      answers: {
        a: '<script>',
        b: '<section>',
        c: '<span>',
        d: '<code>',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://www.w3docs.com/quiz/javascript-basic',
        },
      ],
    },
    {
      text:
        'Which is the function that calls another function after a time interval?',
      answers: {
        a: 'setTimeout()',
        b: 'setTime()',
        c: 'callAfter()',
        d: 'None of the mentioned',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://study2online.com/javascript/animation/english/1/',
        },
      ],
    },
    {
      text: 'Which array method sorts the elements of an array?',
      answers: {
        a: 'sort()',
        b: 'changeOrder(order)',
        c: 'order()',
        d: 'None of the above methods',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://www.w3docs.com/quiz/javascript-basic',
        },
      ],
    },
    {
      text: 'Which of the following is NOT JavaScript Data Types?',
      answers: {
        a: 'String',
        b: 'Number',
        c: 'Boolean',
        d: 'Float',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href:
            'https://letsfindcourse.com/technical-questions/javascript-mcq/javascript-mcq-questions',
        },
      ],
    },
    {
      text: 'Which of them is not the looping structures in JavaScript?',
      answers: {
        a: 'for',
        b: 'forwhich',
        c: 'while',
        d: 'dowhile',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href:
            'https://letsfindcourse.com/technical-questions/javascript-mcq/javascript-mcq-questions-1',
        },
      ],
    },
    {
      text:
        'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
      answers: {
        a: 'if i <> 5',
        b: 'if (i != 5)',
        c: 'if (i => 5)',
        d: 'if i =! 5 then',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS',
        },
      ],
    },
    {
      text: 'Which of the following is a CSS events?',
      answers: {
        a: 'keydown',
        b: 'mouseout',
        c: 'DOMContentLoaded',
        d: 'transitionend',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/introduction-browser-events',
        },
      ],
    },
    {
      text: 'What is the correct syntax for adding comments in JavaScript?',
      answers: {
        a: '<!–This is a comment',
        b: '//This is a comment',
        c: '–This is a comment',
        d: '**This is a comment**',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://www.geeksforgeeks.org/javascript-quiz-set-2/',
        },
      ],
    },
    {
      text:
        'The method used to remove the whitespace at the beginning and end of any string..',
      answers: {
        a: 'strip()',
        b: 'trim()',
        c: 'stripped()',
        d: 'trimmed()',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://www.geeksforgeeks.org/javascript-quiz-set-2/',
        },
      ],
    },
    {
      text: 'what is the correct file extension for Javascript files?',
      answers: {
        a: '.js',
        b: '.java',
        c: '.javascript',
        d: '.script',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href:
            'https://www.topzenith.com/2020/04/javascript-quiz-with-questions-and-answers.html',
        },
      ],
    },
    {
      text:
        'Which of the following function of Array object removes last element from an array and returns it?',
      answers: {
        a: 'push()',
        b: 'delete()',
        c: 'link()',
        d: 'pop()',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href:
            'https://tutorialslink.com/mcq-quiz/java-script-mcq-quiz-multiple-choice-questions-and-answers?page=2',
        },
      ],
    },
    {
      text: 'Original Name of Javascript is..',
      answers: {
        a: 'Mocha',
        b: 'LiveScript',
        c: 'Escript',
        d: 'Javascript',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href:
            'https://tutorialslink.com/mcq-quiz/java-script-mcq-quiz-multiple-choice-questions-and-answers?page=2',
        },
      ],
    },
    {
      text: 'How do you find the minimum of x and y using JavaScript?',
      answers: {
        a: 'min(x,y)',
        b: 'Math.min(xy)',
        c: 'Math.min(x,y)',
        d: 'minimum(xy)',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://data-flair.training/blogs/javascript-quiz/',
        },
      ],
    },
    {
      text:
        'Which of the following use to get a character from a string at a specified index?',
      answers: {
        a: '.get()',
        b: '.indexOf()',
        c: '.character()',
        d: '.charAt()',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://www.jshero.net/en/koans/stringcharat.html',
        },
      ],
    },
    {
      text: 'How does a FOR loop start?',
      answers: {
        a: 'for (i = 0; i<= 5)',
        b: 'for i = 1 to 5',
        c: 'for (i = 0; i<= 5; i++)',
        d: 'for (i <= 5 ; i++)',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS',
        },
      ],
    },
  ],
};
