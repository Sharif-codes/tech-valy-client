import { useContext} from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { getAuth } from "firebase/auth";
import Swal from 'sweetalert2'



const Login = () => {
    // const [googleSignError, setGoogleSignError] = useState('')
    const { logIn } = useContext(AuthContext)
    const location = useLocation()
    const naviGate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        // setGoogleSignError('')
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)
        logIn(email, password)
            .then(res => {
                console.log(res)
                naviGate(location?.state ? location.state : '/')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully Logged in!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(err => {
                console.log(err)
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: err.message,
                    showConfirmButton: false,
                    timer: 1500
                })
                // setGoogleSignError(err.message)
                
            })
            


    }
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider(app);

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result)
                naviGate(location?.state ? location.state : '/')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login with Google Successful!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(err => {
                console.log(err)
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: err.message,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='mt-3'>Do not have any account? <Link to="/register" className='text-blue-700'>Register</Link> </p>
                        </form>
                        
                        <p className="text-center">or <br /> Login with </p>
                        <button onClick={handleGoogleLogin} className="btn btn-outline mx-auto w-1/2 mb-4">
                            <FaGoogle></FaGoogle>
                            Google
                        </button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Login;