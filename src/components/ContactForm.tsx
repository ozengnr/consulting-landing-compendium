import React, { FC } from "react";

const ContactForm: FC = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify
      className="flex flex-col gap-4 max-w-md mx-auto"
    >
      {/* Hidden field for Netlify */}
      <input type="hidden" name="form-name" value="contact" />

      <label>
        Name:
        <input
          type="text"
          name="name"
          required
          className="border p-2 w-full"
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          required
          className="border p-2 w-full"
        />
      </label>

      <label>
        Message:
        <textarea
          name="message"
          required
          className="border p-2 w-full"
        />
      </label>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
