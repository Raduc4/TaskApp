var mailgun = require('mailgun-js')({
	apiKey: process.env.apiKey,
	domain: process.env.DOMAIN
});

const sendWelcomeEmail = (email, name) => {
	mailgun.messages().send({
		from: 'cazacuraduic@gmail.com',
		to: email,
		subject: 'Welcome',
		text: `Welcome to the app, ${name}. Let me know you get along with the app.`

	})
}

const sendCancelEmail = (email, name) => {
	mailgun.messages().send({
		to: email,
		from: 'cazacuraduic@gmail.com',
		subject: 'Sorry to see you go!',
		text: `Goodbye, ${name}`
	})
}


module.exports = {
	sendWelcomeEmail: sendWelcomeEmail,
	sendCancelEmail: sendCancelEmail
}