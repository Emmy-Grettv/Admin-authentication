import { useState } from "react";
import { message } from "antd";
import { useAuth } from "../contexts/AuthContext.jsx"

const useSignup = () => {
    const {login } = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null)

    const registerUser = async ({ values }) => {
        if(values.password !== values.passwordCofirm){
            return setError('Passwords are not the same!');
        }

        try {
            setError(null);
            setLoading(false);
            const res = await fetch('http://locahost:3000/auth/signup', {
                method: 'POSt',
                body: JSON.stringify(values),
            });

            const data = await res.json();
            if(res.status === 201){
                message.success(data.message);
                login(data.toke, data.user);
            }else if(res.status === 4000){
                setError(data.message)
            }else{
                message.error('Registration failed!');
            }

        } catch (error) {
            message.error(error)
        }finally{
            setLoading(false)
        }
    }

  return { loading, error, registerUser };
}

export default useSignup