var api_key = 'a6f971f5acfa1f799c1adcbabbce5722-a83a87a9-9f969bb9';
var domain = 'sandbox09fba168011f47f3b4cf96752ec3a44f.mailgun.org';
var mailgun = require('mailgun-js')({
	apiKey: process.env.apiKey,
	domain: process.env.DOMAIN
});

const sendWelcomeEmail = (email, name) => {
	mailgun.messages().send({
		to: email,
		from: 'cazacuraduic@gmail.com',
		subject: 'Welcome',
		text: `Welcome to the app, ${name}. Let me know you get along with the app.`

	}, (error, response) => {
		console.log(response);
	})
}

const sendCancelEmail = (email, name) => {
	mailgun.messages().send({
		to: email,
		from: 'cazacuraduic@gmail.com',
		subject: 'Sorry to see you go!',
		text: `Goodbye, ${name}`
	}, (error, response) => {
		console.log(response);
	})
}


module.exports = {
	sendWelcomeEmail: sendWelcomeEmail,
	sendCancelEmail: sendCancelEmail
}