import emailjs from "@emailjs/browser";
const sendMail = (data) => {
	const mailServiceKey = "service_cekrbgb";
	const templateKey = "template_6mpgakk";
	const publicKey = "L36M0C8GcRtJFUMRO";
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
