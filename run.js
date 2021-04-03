var explain = require('./App');
(async () => {
var data = await explain(process.argv[2])
console.log(`
What is it : ${data.description}
Manual : ${data.link}
`)
})();
