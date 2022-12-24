import "./mailList.css"
import Swal from 'sweetalert2'

const MailList = () => {
  const handleEmailList = () => {
    Swal.fire({
      icon:'success',
      title: 'Successfully Added in our mailing list',
    })
  }
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="email" placeholder="Your Email" required />
        <button onClick={handleEmailList}>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList