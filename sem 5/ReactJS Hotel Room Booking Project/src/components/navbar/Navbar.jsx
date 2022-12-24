import "./navbar.css"
import logoMain from '../../images/logo-vrsec-3.png'
import Swal from 'sweetalert2'

const Navbar = () => {
  const handleSignUp = () => {
    Swal.fire({
      title: 'Register',
      html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
      <input type="password" id="password" class="swal2-input" placeholder="Password">
      <input type="password" id="cpassword" class="swal2-input" placeholder="Conform Password">`,
      confirmButtonText: 'Sign Up',
      focusConfirm: false,
      preConfirm: () => {
        const login = Swal.getPopup().querySelector('#login').value
        const password = Swal.getPopup().querySelector('#password').value
        const cpassword = Swal.getPopup().querySelector('#cpassword').value
        if (!login) {
          Swal.showValidationMessage(`Please enter username`)
        }
        if (!password || !cpassword) {
          Swal.showValidationMessage(`Please enter Password`)
        }

        if(password !== cpassword){
          Swal.showValidationMessage(`Passwords didn't match please check`)
        }
        return { login: login, password: password }
      }
    }).then((result) => {
      Swal.fire({
        text:`Successfully created account for ${result.value.login}`
      })
    })

  }

  const handleSignIn = () => {
    Swal.fire({
      title: 'Login',
      html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
      <input type="password" id="password" class="swal2-input" placeholder="Password">`,
      confirmButtonText: 'Sign in',
      focusConfirm: false,
      preConfirm: () => {
        const login = Swal.getPopup().querySelector('#login').value
        const password = Swal.getPopup().querySelector('#password').value
        if (!login || !password) {
          Swal.showValidationMessage(`Please enter login and password`)
        }
        return { login: login, password: password }
      }
    }).then((result) => {
      Swal.fire({
        text:`Successfully Logined as ${result.value.login}`
      })
    })

  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <img src={logoMain} alt="" />
        </span>
        <div className="navItems">
          <button className="navButton navRegister" onClick={handleSignUp}>Register</button>
          <button className="navButton" onClick={handleSignIn}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar