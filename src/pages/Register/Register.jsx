import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { getAuth, updateProfile } from "firebase/auth";
const auth = getAuth();


const Register = () => {
    const [regError, setRegError] = useState('')
    const [passError, setPassError]= useState('')
    const [specialCharError, setSpecialCharError]= useState('')
    const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    const capital= /[A-Z]/;
    const { createUser } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault()
        setRegError('')
        setPassError('')
        setSpecialCharError('')
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        const displayName= form.get('displayName')
        const photoURL= form.get('photoURL')
        console.log(email, password)
        if(password.length<6)
        {
            setPassError('password must be longer than 6')
            return;
        }
        if(!specialChars.test(password))
        {
            setSpecialCharError("Password must contain a special character ")
            return;
        }
        if(!capital.test(password))
        {
            setSpecialCharError("Password must contain a capital character ")
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user)

                updateProfile(auth.currentUser, {
                    displayName: displayName , photoURL: photoURL
                  }).then((result) => {
                    console.log(result)
                  }).catch((error) => {
                    console.log(error)
                  });

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Registration Complete',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            )
            .catch(err => {
                console.error(err)
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: err.message,
                    showConfirmButton: false,
                    timer: 1500
                })
                setRegError(err.message)
            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-4">
                        <p className="font-bold text-2xl">Get Registered Now!</p>
                        <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="displayName" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photoURL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
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
                                <button className="btn btn-primary">Register</button>
                            </div>

                        </form>
                        {
                            regError && <p className="text-red-600 text-center">{regError}</p>
                        }
                        {
                            passError && <p className="text-red-600 text-center">{passError}</p>
                        }
                        {
                            specialCharError && <p className="text-red-600 text-center">{specialCharError}</p>
                        }

                        <p className="text-center">Already have a account? <Link to="/login" className="text-blue-700">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;