import Cookies from "js-cookie";
import { jwtDecode  } from 'jwt-decode';

export const getUserId = () => {
    const token = Cookies.get("accessToken");
    if(token){
        const decodedToken = jwtDecode(token);
        return decodedToken.userId
    } else return 0
}
