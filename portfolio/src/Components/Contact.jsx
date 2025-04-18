import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ isDark }) => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          form.current.reset();
          setIsSent(true);
          setTimeout(() => setIsSent(false), 3000);
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-start justify-between w-full h-full gap-15 sm:px-50 px-5 sm:pt-25 pt-35 pb-10">
        <div className="flex flex-col items-start justify-center sm:w-2xl w-xs pb-8 border-b-1">
          <h1 className="sm:text-6xl text-4xl text-old-standard-tt">
            Contact Me
          </h1>
        </div>

        <div className="flex sm:flex-row flex-col items-start justify-between w-full h-full">
          <div className="flex flex-col items-start justify-between sm:w-[36%] w-full sm:h-[60%] h-[30%]">
            <h2 className="text-3xl text-old-standard-tt">Reach Out</h2>

            <p className="text-lg font-light text-rale-way">
              <span className="font-semibold">Email: </span>
              alishbni2026@gmail.com
            </p>

            <p className="text-lg font-light text-rale-way">
              <span className="font-semibold">Phone: </span>
              +98 901 914 4647
            </p>

            <p className="text-lg w-full font-light text-rale-way">
              Let's collaborate! Reach me via email or message @Alishbni_48 on
              Telegram for quick responses. I typically reply within 24 hours 📬
            </p>
          </div>

          <div className="sm:w-[58%] w-full sm:h-[90%] h-[60%]">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6"
            >
              <div className="flex sm:flex-row flex-col gap-6">
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Name"
                  required
                  className={`w-full p-3 bg-transparent border-1 outline-none text-base text-rale-way ${
                    isDark ? "border-white" : "border-black"
                  } focus:border-red-500`}
                />

                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Email"
                  required
                  className={`w-full p-3 bg-transparent border-1 outline-none text-base text-rale-way ${
                    isDark ? "border-white" : "border-black"
                  } focus:border-red-500`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  required
                  rows="6"
                  className={`w-full p-3 bg-transparent border-1 outline-none text-base text-rale-way resize-none ${
                    isDark ? "border-white" : "border-black"
                  } focus:border-red-500`}
                />
              </div>

              <button
                type="submit"
                className={`w-20 py-1 text-base text-rale-way border-2 ${
                  isSent
                    ? "bg-red text-white"
                    : isDark
                    ? "border-white hover:bg-white hover:text-black"
                    : "border-black hover:bg-black hover:text-white"
                } transition-colors duration-300 hover:cursor-pointer`}
              >
                {isSent ? "Sent!" : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
