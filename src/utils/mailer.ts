import emailjs from "@emailjs/browser";
const sendMail = (data) => {
	const mailServiceKey = "service_i4w5uyn";
	const templateKey = "template_ntl59i9";
	const publicKey = "ugTMtYuZOx3AcPO36";
	const templatePrams = {
		name: data.name,
		email: data.email,
		phone: data.phone,
		description: data.description,
	};
	emailjs.send(mailServiceKey, templateKey, templatePrams, publicKey).then(
		(response) => {
			console.log("SUCCESS!", response.status, response.text);
		},
		(err) => {
			console.log("FAILED...", err);
		}
	);
};
export default sendMail;
