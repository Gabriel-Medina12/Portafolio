
import { useState } from "react";
import Button from "../../src/components/auth/Button"

const Login = ()=>{
    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');

    const loginFunction = async(e)=>{
        e.preventDefault();


        fetch('http://localhost:3000/auth/login',{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: {}
        })
        .then(response => response.json())
        .then(data =>{
            alert(data.message)
        })
    }
    setEmail('pepe@example.com')
    console.log(email, password)
    return(
        <>
        <div className="container container-auth">
            <div className="row w-100">
                <div className="col-4 ms-auto me-auto card p-4">
                    <h1>Login</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <form action="" onSubmit={loginFunction}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password"/>
                        </div>
                        <Button text='Login' color='info'></Button>

                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login