import React from "react";
import emailjs from "emailjs-com";

const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kiqwmpa",
        "template_lwo935u",
        e.target,
        "user_rQcSrqu2UAQtEHCLMDNzr"
      )
      .then((res) => {
        console.log(res);
        if (res) {
          alert("Thanks For your Message");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div
      className="container rounded text-light"
      style={{
        // marginTop: "100px",
        // padding: "20px 10px",
        minWidth: "350px",
        // maxWidth: "50%",
        // backgroundImage: `url('https://t4.ftcdn.net/jpg/02/69/27/55/360_F_269275503_fL3Dx8hgvCDgrnuvbm8XLPHJ461QIM4o.jpg')`,
        // backgroundPosition: "center",
        // backgroundSize: "cover",
      }}
    >
      {/* <h2 style={{ marginTop: "30px", textAlign: "center" }}>Contact Form</h2> */}
      <form className="row" style={{ marginX: "auto", color:'black' }} onSubmit={sendEmail}>
        {/* <label>Name</label> */}
        <input
        // style={{width:'300px'}}
          type="text"
          name="name"
          placeholder="Your Name"
          id=""
          className="form-control text-success mb-4"
          required
        />
        {/* <label>Email</label> */}
        <input
        // style={{width:'300px'}}
          type="email"
          name="user_email"
          id=""
          placeholder="Your Email"
          className="form-control mb-4"
          required
        />
        {/* <label>Message</label> */}
        <textarea
        // style={{width:'300px'}}
          name="message"
          rows="4"
          placeholder="Your Message.."
          className="form-control"
          required
        ></textarea>
        <input
          style={{ marginTop: "50px", width:"150px" }}
          type="submit"
          value="Send"
          className="form-control btn btn-success fw-bold mb-4"
        />
      </form>
    </div>
  );
};

export default Mailer;
