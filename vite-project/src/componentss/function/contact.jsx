const Contact = () => {
  function handleclick() {
    alert("you visiting this page..");
  }
  const handleclick1=()=>{
    alert("Send the message successfully..")
  }
  return (
    <section>
      <h1>This is Contact page.</h1>
      <button
        className="button"
        onClick={handleclick}
        style={{ textAlign: "center" }}
      >
        {" "}
        click me
      </button>
      <footer className="foot">
        <p>
          <label><strong>
            Name: <input type="text" placeholder="Enter your name" />
          </strong></label>
        </p>
        <p>
          <label><strong>
            Email: <input type="text" placeholder="Enter your email" />
            </strong> </label>
        </p>
        <p>
          <label><strong>
            Message: <input type="text" placeholder="Enter your Message" />
            </strong> </label>
        </p>
        <button
        className="button1"
        onClick={handleclick1}
        style={{ textAlign: "center" }}
      >
        {" "}
        Send 
      </button>
      </footer>
    </section>
  );
};
export default Contact;
