import { useRef, useState } from "react";
import TextareaWithCounter from "../components/TextareaWithCounter";
import emailjs from "@emailjs/browser";
import { IoIosSend } from "react-icons/io";
import socialLinks from "../data/socialLinks";
import InputField from "../components/InputField";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const publicKey = "c6lpaqCkPTWZBs4BH";
  const serviceId = "service_n50s9tg";
  const templatesId = "template_v749usg";

  const [formKey, setFormKey] = useState(0);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSending(true);

    if (form.current) {
      emailjs
        .sendForm(serviceId, templatesId, form.current, publicKey)
        .then(() => {
          alert("Email sent successfully!");
          form.current?.reset();
          setFormKey((prevKey) => prevKey + 1);
          setIsSending(false);
        })
        .catch((error) => {
          console.error("Email sending failed:", error);
          alert("Failed to send email. Please try again.");
        });
    } else {
      console.error("Form reference is null.");
      alert("Failed to send email. Please try again.");
    }
  };

  return (
    <section id="contact" className="p-4 mt-24 md:px-[10%]">
      <h2 className="text-gray-700 text-3xl mb-4 text-center md:text-start">
        <span className="border-b-2 border-pink-100 font-semibold">
          CONTACT
        </span>
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="flex md:flex-1 md:order-2 md:pl-8 flex-col">
          <form ref={form} onSubmit={sendEmail}>
            <InputField
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="flex w-full my-2"
              required
            />
            <InputField
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="flex w-full my-2"
              required
            />
            <InputField
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject (Optional)"
              className="flex w-full my-2"
            />
            <TextareaWithCounter
              key={formKey}
              className="my-2"
              name={"message"}
              id={"message"}
            />
            <button
              type="submit"
              className="flex w-full my-2 bg-pink-600 hover:bg-pink-400 text-white py-2 px-6 rounded-md mb-6 transition duration-300"
              disabled={isSending}
            >
              <span className="flex mx-auto">
                <IoIosSend className="text-[1.8rem] mr-1 pb-1" />
                {isSending ? "Sending..." : "Send Message"}
              </span>
            </button>
          </form>
        </div>
        <div className="flex md:order-1 md:flex-1 flex-col">
          <div className="text-center md:text-start my-8">
            <h1 className="text-2xl">Get in Touch</h1>
            <p className="my-2 text-gray-500">
              I would love to hear from you! If you have suggestion or feedback
              feel free to reach out through my contact form or social media
              channels
            </p>
            <p className="text-gray-500">+63 976 319 9300</p>
            <a
              href="mailto:johnaaronapayong@gmail.com"
              className="hover:underline text-gray-500"
            >
              johnaaronapayong@gmail.com
            </a>
          </div>
          <div>
            {/* Social Media Links */}
            <div className="flex space-x-4 md:justify-around justify-center p-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${link.link} profile`}
                  className="text-2xl text-gray-400 hover:text-pink-600 transition-colors duration-300"
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
