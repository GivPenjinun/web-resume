import "./Contact.css";

function Contact() {
  const alertInput = (e) => {
    e.preventDefault();

    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const input4 = document.getElementById("input4");
    const input5 = document.getElementById("input5");

    if (
      !input1.value ||
      !input2.value ||
      !input3.value ||
      !input4.value ||
      !input5.value
    ) {
      alert("please, fill in the blank");
    } else {
      alert("Email sent");
      input1.value = "";
      input2.value = "";
      input3.value = "";
      input4.value = "";
      input5.value = "";
    }
  };

  return (
    <>
      <section className="contact" id="contact">
        <h1>Contact Me</h1>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Full Name" id="input1" />
            <input type="email" placeholder="Your Email" id="input2" />
          </div>

          <div className="input-box">
            <input type="text" placeholder="Email Title" id="input3" />
            <input type="number" placeholder="Mobile Phone" id="input4" />
          </div>
          <div className="textarea">
            <textarea
              name=""
              id="input5"
              cols={30}
              rows={10}
              placeholder="Enter Your Message"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send Email"
            className="contact-btn"
            onClick={alertInput}
          />
        </form>
      </section>
    </>
  );
}

export default Contact;
