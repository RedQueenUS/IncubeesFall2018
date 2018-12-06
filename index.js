const dan_duleone = require('./dd');

const team = [
  dan_duleone
]

team.forEach((incubee) => {
  const {reportIn, funFact} = incubee;
  reportIn(funFact());
});