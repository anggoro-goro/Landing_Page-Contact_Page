function ContactPage() {
    return (
      <div style={{ padding: '2rem' }}>
        <h1>Contact Us</h1>
        <form>
          <input type="text" placeholder="Your Name" /><br /><br />
          <input type="email" placeholder="Your Email" /><br /><br />
          <textarea placeholder="Your Message" rows="5" cols="30" /><br /><br />
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
  
  export default ContactPage
  