import React from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ContactSection = () => {
  const [ContactForm, setContactForm] = React.useState({
    Name: "",
    MailId: "",
    Subject: "",
    Message: "",
  });

  const NameHandler = (e) => {
    setContactForm({
      ...ContactForm,
      Name: e.target.value,
    });
  };
  const MailHandler = (e) => {
    setContactForm({
      ...ContactForm,
      MailId: e.target.value,
    });
  };
  const SubjectHandler = (e) => {
    setContactForm({
      ...ContactForm,
      Subject: e.target.value,
    });
  };
  const MessageHandler = (e) => {
    setContactForm({
      ...ContactForm,
      Message: e.target.value,
    });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    let validForm = true;
    Object.values(ContactForm).forEach((value) => {
      if (value.length === 0 && validForm === true) {
        toast.error(`Fill the Form Detail`);
        validForm = false;
        return;
      }
    });
    try {
      if (validForm) {
        const response = await axios.post(
          "https://formspree.io/f/mjvndyar",
          ContactForm
        );
        if (response.status === 200) {
          toast.success("I will contact you Shortly..");
        }
        setContactForm({ Name: "", MailId: "", Subject: "", Message: "" });
      }
    } catch (err) {
      toast.error("Something Went Wrong");
      console.log(err);
    }
  };

  return (
    <section className="ContactSection page-section">
      <div className="ContactFlex" id="5">
        <div className="ContactContent">
          <div>
            <p>Let’s Work Together</p>
            <h1>Contact me</h1>
            <p>
              I love collaborating with others, solving problems methodically,
              and challenging myself to grow everyday.
            </p>
            <div className="ContactLocationFlex">
              <div>
                <svg
                  width="14"
                  height="20"
                  viewBox="0 0 14 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <p>Avinashi, Tiruppur, India.</p>
              </div>
            </div>
            <div className="ContactLocationFlex">
              <div>
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <p>durgadevishanmugam99@gmail.com</p>
              </div>
            </div>
            <div className="ContactLocationFlex">
              <div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.01 12.38C15.78 12.38 14.59 12.18 13.48 11.82C13.13 11.7 12.74 11.79 12.47 12.06L10.9 14.03C8.07 12.68 5.42 10.13 4.01 7.2L5.96 5.54C6.23 5.26 6.31 4.87 6.2 4.52C5.83 3.41 5.64 2.22 5.64 0.99C5.64 0.45 5.19 0 4.65 0H1.19C0.65 0 0 0.24 0 0.99C0 10.28 7.73 18 17.01 18C17.72 18 18 17.37 18 16.82V13.37C18 12.83 17.55 12.38 17.01 12.38Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <p>+91 9361591574</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ContactForm">
          <Toaster></Toaster>
          <div className="ContactGetInTouch">
            <h1>Get In Touch</h1>
          </div>
          <form action="" onSubmit={SubmitHandler} autoComplete="off">
            <div>
              <input
                type="text"
                name=""
                value={ContactForm.Name}
                id="Name"
                placeholder="Your Name"
                onChange={NameHandler}
                minLength={3}
                maxLength={20}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="mail id"
                value={ContactForm.MailId}
                id="EmailId"
                placeholder="Email Address"
                onChange={MailHandler}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                value={ContactForm.Subject}
                id="Subject"
                placeholder="Subject"
                maxLength={50}
                onChange={SubjectHandler}
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={ContactForm.Message}
                placeholder="Message"
                id="Message"
                onChange={MessageHandler}
                required
                maxLength={200}
              ></textarea>
            </div>
            <div className="ContactSubmitBtn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
