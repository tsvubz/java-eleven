let message1 = 'I love JavaScript';
let message2 = "I'm a great programmer";

function info(message1, message2){
  return `${message1}. ${message2}.`;
}

let sms = info(message1, message2);

console.log(sms);