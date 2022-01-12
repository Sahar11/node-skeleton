//const twilio = require('twilio');
//require("dotenv").config();

const accountSid = "AC65fd451cf79057c262730059a0751e0d";
const authToken = "2d3f5aac107ffbe05f72bb68695665c9";
const twilio = require('twilio')(accountSid, authToken);
// let client = new twilio('AC65fd451cf79057c262730059a0751e0d', '2d3f5aac107ffbe05f72bb68695665c9');
//  const accountSid = process.env.TWILIO_ACCOUNT_SID;
//  const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);
// const client = require('twilio')(accountSid, authToken);
// This function sends via text the estimated time the order will be completed to the customer
$(document).ready(function() {

$(".sendMessage").click(function () {
  alert("clicked");
  twilio.messages.create({
    body: 'Hello from Twilio!',
    from: '+19592155802',
    to: '+14168715703',
  });
  // client.messages
  //   .create({
  //     body: `Thank you for your order #12345. Your total amount is $25. It will be ready for pick up in 20 minutes.`,
  //     from: "+15017122661",
  //     to: "+14168715703",
  //   })
  //   .then((message) => console.log(message.sid));
});
});
