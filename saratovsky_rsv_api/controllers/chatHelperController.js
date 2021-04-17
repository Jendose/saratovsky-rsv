const fs = require('fs');

const dataKnows = JSON.parse(fs.readFileSync('knowledgebase.json', 'utf-8'));

const getAnswer = (req, res) => {
  let answer = { data: 'Я не знаю' };
  console.log(req.body);
  for (let i = 0; i < dataKnows.length; i++) {
    for (let key in dataKnows[i]) {
      if (key === req.body.question) {
        console.log('find');
        answer = { data: dataKnows[i][key] };
        break;
      }
    }
  }
  res.send(answer);
};

module.exports = {
  getAnswer,
};
