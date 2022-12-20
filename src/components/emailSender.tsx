import { render } from "@react-email/render";
import { emailRequest } from "../utilities/mailRequest";
import { ContactEmail } from "./contactEmail";

interface Props {
  user: {
    name: string;
    email: string;
    company: string;
  };
  message: string;
}

export async function sendEmail({ user, message }: Props) {
  if (user) {
    const emailHtml = render(
      <ContactEmail
        url="https://simpleresearch.co"
        user={user}
        message={message}
      />
    );

    const options = {
      from: import.meta.env.REACT_APP_EMAIL,
      to: `${user.email}, ${import.meta.env.REACT_APP_EMAIL}`,
      subject: "Thank you for reaching out",
      html: emailHtml,
    };

    await emailRequest(options);
  }
}
