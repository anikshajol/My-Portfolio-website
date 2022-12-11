import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nkrci5c",
        "template_sygihgc",
        form.current,
        "vruLkl0vaHDSeuidB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="margin">
      <input
        type="text"
        name="user_name"
        placeholder="Name"
        className="input input-bordered border border-green-800 px-2 w-full max-w-xs"
      />
      <br />
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        className="input input-bordered border border-green-800 px-2 w-full max-w-xs my-8"
      />
      <br />
      <br />
      <textarea
        name="message"
        id="subject"
        placeholder="Write something.."
        className="h-[250px] w-full max-w-xs px-2 border border-green-800 "
      ></textarea>
      <br />
      <button
        type="submit"
        className="btn bg-green-600 px-2 text-white font-semibold py-2 rounded-md mt-4"
      >
        Button
      </button>
    </form>
  );
};

export default Contact;
