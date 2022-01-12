const accountSid = "AC65fd451cf79057c262730059a0751e0d";
const authToken = "2d3f5aac107ffbe05f72bb68695665c9";

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

$(document).ready(function() {

$(".sendMessage").click(function () {
  alert("clicked");
  client.messages.create({
    body: 'Hello from Twilio!',
    from: '+19592155802',
    to: '+14168715703',
  })
  .then((message) => console.log(message.sid));
});
});
