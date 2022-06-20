import React from "react"
import { useNavigate} from "react-router-dom";

const Login = () => {
    const[email,setEmail]= React.useState("")
    const[password,setPassword]= React.useState("")
    const navigate = useNavigate();

    const handleLogin = () => {
        const payload = { email,password};
        fetch (`https://reqres.in/api/login`, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => res.json())
        .then ((res) => {
            if(res.token) {
                navigate("/")
            }
        })
        .catch((err) => {
            console.log(err)
        })
    };

    return (
        <div> 
            <h2> LOGIN</h2>
            <label> EMAIL <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </label>

        <label> Password <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </label>
        <button onClick = { handleLogin}> Login</button>
        </div>
    )
};

export default Login;