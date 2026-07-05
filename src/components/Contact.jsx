// const Contact = () => {
//   return (
//     <section className="contact" id="contact">
//       <p><strong>Address:</strong><br />
//         H.No: 7-15/41,<br />
//         Sector 2D, Puppala Guda,<br />
//         Alkapoor Township, Manikonda, Hyderabad.
//       </p>

//       <p><strong>Email:</strong> contact@inspirationsms.com</p>
//       <p><strong>Phone:</strong> +91-8074075537</p>
//     </section>
//   );
// };

// export default Contact;

import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    school: "",
    phone: "",
    email: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // API call can be added here

    alert("Form submitted successfully!");

    setFormData({
      name: "",
      school: "",
      phone: "",
      email: "",
      comments: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-info">
        <p>
          <strong>Address:</strong>
          <br />
          H.No: 7-15/41,
          <br />
          Sector 2D, Puppala Guda,
          <br />
          Alkapoor Township, Manikonda, Hyderabad.
        </p>

        <p>
          <strong>Email:</strong> contact@inspirationsms.com
        </p>

        <p>
          <strong>Phone:</strong> +91-8074075537
        </p>
      </div>

      <div className="form-container">
        <h2>Request Information</h2>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>School Name</label>
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Comments</label>
          <textarea
            rows="5"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
