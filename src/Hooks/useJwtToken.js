import axios from "axios";
import { useEffect, useState } from "react"

const useJwtToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {

        const gettingToken = async () => {

            const email = user.email;
            if (email) {
                const { data } = await axios.post('http://localhost:5000/login', { email });
                setToken(data.accessToken)
                localStorage.setItem('accessToken', data.accessToken);
            }
        }
        gettingToken();

    }, [user]);
    return [token];
}

export default useJwtToken;