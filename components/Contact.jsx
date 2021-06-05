import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const Contact = ({ contactRef }) => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [text, setText] = useState("");
  emailjs.init(process.env.NEXT_PUBLIC_USER_KEY);
  useEffect(() => {
    window.onload = function () {
      document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          setName("");
          setEmail("");
          setText("");
          // generate a five digit number for the contact_number variable
          this.contact_number.value = (Math.random() * 100000) | 0;
          // these IDs from the previous steps
          emailjs.sendForm("contact_service", "contact_form", this).then(
            function () {
              let all = document.querySelector(".all-cont");
              let el = document.createElement("p");
              el.classList.add("text-green-400");
              el.classList.add("text-2xl");
              el.classList.add("w-6/12");
              el.classList.add("mt-20");
              el.classList.add("text-center");
              el.innerHTML =
                "Thank you very much!. I will be in contact with you soon.";
              all.removeChild(document.getElementById("contact-form"));
              all.appendChild(el);
            },
            function (error) {
              let all = document.querySelector(".all-cont");
              let el = document.createElement("p");
              el.classList.add("text-green-400");
              el.classList.add("text-2xl");
              el.classList.add("w-6/12");
              el.classList.add("mt-20");
              el.classList.add("text-center");
              el.innerHTML =
                "Unable to send your message please check your email and internet connection";
              all.appendChild(el);
            }
          );
        });
    };
  }, []);

  return (
    <div
      ref={contactRef}
      className="h-screen w-full flex flex-col justify-baseline items-center mt-20 all-cont"
    >
      <h1 className="text-3xl text-white">Contact_Me</h1>
      <form
        className="flex flex-col justify-center items-center w-9/12 h-5/6"
        id="contact-form"
      >
        <input
          className="py-5 border-2 border-solid border-green-300"
          type="hidden"
          name="contact_number"
        />
        <div className="w-80 flex flex-wrap justify-center items-center">
          <div className="w-full flex justify-center items-center mt-5 inline">
            <label className="text-base text-white font-bold mr-3">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Name"
              className="outline-none rounded bg-transparent py-2 border-2 border-solid border-green-300 px-2 w-72 text-white"
              type="text"
              name="user_name"
            />
          </div>
          <div className="w-full flex justify-center items-center mt-5 inline">
            <label className="text-base text-white font-bold mr-3">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              className="outline-none rounded bg-transparent py-2 border-2 border-solid border-green-300 px-2 w-72 text-white"
              type="email"
              name="user_email"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full lg:w-9/12 h-4/6">
          <textarea
            onChange={(e) => setText(e.target.value)}
            required
            placeholder="Type you message here"
            className="bg-transparent px-2 py-2 rounded border-2 border-solid border-green-300 w-full lg:w-8/12 h-4/6 text-white"
            name="message"
          ></textarea>
          <input
            className="mt-3 mb-5 bg-gray-700 w-24 cursor-pointer py-2 border-2 border-solid border-green-300 text-white hover:bg-green-400 rounded"
            type="submit"
            value="Send"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
