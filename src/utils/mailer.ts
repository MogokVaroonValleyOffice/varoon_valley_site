import emailjs from "@emailjs/browser";
const sendMail = (data) => {
	const templatePrams = {
		name: data.name,
		email: data.email,
		phone: data.phone,
		description: data.description,
	};
	emailjs
		.send(
			"service_cekrbgb",
			"template_6mpgakk",
			templatePrams,
			"L36M0C8GcRtJFUMRO"
		)
		.then(
			(response) => {
				console.log("SUCCESS!", response.status, response.text);
			},
			(err) => {
				console.log("FAILED...", err);
			}
		);
};
export default sendMail;
