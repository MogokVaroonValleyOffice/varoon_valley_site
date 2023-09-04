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
	return emailjs.send(mailServiceKey, templateKey, templatePrams, publicKey);
};
export default sendMail;
