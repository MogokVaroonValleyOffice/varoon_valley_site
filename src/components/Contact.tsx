import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	Heading,
	Image,
	Input,
	SimpleGrid,
	Text,
	Textarea,
} from "@chakra-ui/react";
import { message } from "../assets/images";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { phoneRegex } from "../utils/validator";
import { btnText, cardWhite, text } from "../theme/colors";
import sendMail from "../utils/mailer";

const schema = z
	.object({
		name: z
			.string({ invalid_type_error: "Name is required." })
			.min(3, { message: "Name must be at least 3 characters." }),
		email: z
			.string({ invalid_type_error: "Email is required" })
			.email("Please enter a valid email."),
		phone: z.string().regex(phoneRegex, "Please enter a valid number."),
		description: z
			.string({ invalid_type_error: "Description is required." })
			.min(50, {
				message: "Description must be at least 50 characters.",
			}),
	})
	.partial();

type FormData = z.infer<typeof schema>;

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	function onSubmit(data: FieldValues) {
		sendMail(data);
		reset();
	}

	return (
		<>
			<Heading as={"h2"} fontSize={"3xl"} textAlign={"center"}>
				CONTACT US
			</Heading>
			<Box
				className="custom-box-shadow"
				data-aos="zoom-in"
				background={cardWhite()}
				margin={"auto"}
				marginTop={5}
				padding={5}
				borderRadius={10}
				maxWidth={"900px"}
			>
				<SimpleGrid columns={{ sm: 2 }} spacing={5}>
					<Box>
						<Text color={text()} fontSize={16}>
							We are excited to hear your idea and we are always
							open to discuss it! Tell us a bit more about you and
							the project you have in mind.
						</Text>
						<Image
							src={message}
							alt="message"
							width={300}
							height={300}
							objectFit={"cover"}
						/>
						<Text color={text()} fontSize={16}>
							Send us your request for a proposal, and we'll reply
							with the estimate.
						</Text>
					</Box>
					<Box>
						<form onSubmit={handleSubmit(onSubmit)}>
							<FormControl
								isInvalid={errors.name ? true : false}
								marginBottom={5}
							>
								<Input
									id="username"
									placeholder="Your Name*"
									{...register("name")}
								/>
								<FormErrorMessage>
									{errors.name && errors.name.message}
								</FormErrorMessage>
							</FormControl>
							<FormControl
								isInvalid={errors.email ? true : false}
								marginY={5}
							>
								<Input
									id="email"
									placeholder="Email*"
									{...register("email")}
								/>
								<FormErrorMessage>
									{errors.email && errors.email.message}
								</FormErrorMessage>
							</FormControl>
							<FormControl
								isInvalid={errors.phone ? true : false}
								marginY={5}
							>
								<Input
									id="phone"
									placeholder="Phone"
									{...register("phone")}
									onKeyDown={(e) =>
										!/[0-9]/.test(e.key) &&
										!/[+]/.test(e.key) &&
										e.key !== "Backspace" &&
										e.preventDefault()
									}
								/>
								<FormErrorMessage>
									{errors.phone && errors.phone.message}
								</FormErrorMessage>
							</FormControl>
							<FormControl
								isInvalid={errors.description ? true : false}
								marginY={5}
							>
								<Textarea
									id="description"
									placeholder="Description*"
									{...register("description")}
								/>
								<FormErrorMessage>
									{errors.description &&
										errors.description.message}
								</FormErrorMessage>
							</FormControl>
							<Button
								colorScheme=""
								background={"green.300"}
								color={btnText()}
								marginY={2}
								isLoading={isSubmitting}
								type="submit"
							>
								Send
							</Button>
						</form>
					</Box>
				</SimpleGrid>
			</Box>
		</>
	);
};

export default Contact;
