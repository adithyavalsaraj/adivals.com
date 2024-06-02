import React from "react";

const Contact: React.FC = () => (
  <div>
    <h2>Contact</h2>
    <form>
      <div>
        <label>Name:</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
);

export default Contact;
