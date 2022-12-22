import { render } from "@react-email/render";
import { emailRequest } from "../utilities/mailRequest";
import { ContactEmail } from "./contactEmail";
import { BreakdownEmail } from "./breakdownEmail";

interface Props {
  user: {
    name: string;
    email: string;
    company: string;
  };
  message: any;
  type?: string;
}

export async function sendEmail({ user, message, type }: Props) {
  if (user) {
    const emailHtml = render(
      <ContactEmail
        url="https://simpleresearch.co"
        user={user}
        message={message}
      />
    );

    const BreakdownHtml = render(
      <BreakdownEmail
        url="https://simpleresearch.co"
        user={user}
        message={message}
      />
    );

    const options = {
      from: import.meta.env.REACT_APP_EMAIL,
      to: `${user.email}, ${import.meta.env.REACT_APP_EMAIL}`,
      subject:
        type === "breakdown"
          ? "Here's your survey price breakdown"
          : "Thank you for reaching out",
      html: type === "breakdown" ? BreakdownHtml : emailHtml,
    };

    await emailRequest(options);
  }
}
