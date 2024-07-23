const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const specificTitles = {
    "what does the this keyword mean?": "What Does The This Keyword Mean?",
    'What is the Constructor OO pattern?': 'What Is The Constructor OO Pattern?',
    'implementing Blockchain Web API': 'Implementing Blockchain Web API',
    'What is NaN and how Can we Check for it': 'What Is NaN And How Can We Check For It',
    'What is the difference between stopPropagation and preventDefault?': 'What Is The Difference Between StopPropagation And PreventDefault?',
    "Immutable State and Pure Functions" : "Immutable State And Pure Functions",
    "what is the difference between == and ===?": "What Is The Difference Between == And ===?",
    "what is the difference between event capturing and bubbling?":"What Is The Difference Between Event Capturing And Bubbling?",
    'what is JSONP?': 'What Is JSONP?'
  };

  const titleCasedTutorials = tutorials.map(title => {
    if (specificTitles[title]) {
      return specificTitles[title];
    } else {
      return title; // Return title unchanged
    }
  });

  return titleCasedTutorials;
}
