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
  interest?: string[]
}

export async function sendEmail({ user, message, interest, type }: Props) {
  if (user) {
    let email;

    if(type === 'breakdown') {
      email = render(
        <BreakdownEmail
          url="https://simpleresearch.co"
          user={user}
          message={message}
        />
      );
    } else {
      email = render(
        <ContactEmail
          url="https://simpleresearch.co"
          user={user}
          message={message}
          interest={interest}
        />
      );
    }


    const options = {
      from: import.meta.env.REACT_APP_EMAIL,
      to: `${user.email}, ${import.meta.env.REACT_APP_EMAIL}`,
      subject:
        type === "breakdown"
          ? "Here's your survey price breakdown"
          : "Thank you for reaching out",
      html: email
    };

    await emailRequest(options);
  }
}
