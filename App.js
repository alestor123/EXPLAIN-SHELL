var ray = require('x-ray')();
module.exports = async cmd => {
if(!cmd) throw new Error('Please enter the command')
return await ray('https://explainshell.com/explain?'+new URLSearchParams({'cmd':cmd}).toString(),'body',{description:'pre',link:'small a@href'}).then(res => res) 
}
