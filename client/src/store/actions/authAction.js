import {instanceJava, instanceNodeJs} from "../../config/axiosConfig";
import {
    loginRequest,
    loginUserSuccess,
    loginAdminSuccess,
    loginFailure,
    logoutAdminSuccess,
    logoutUserSuccess
} from "../reducers/authReducer";

export const loginUser = (formData) => async (dispatch) => {
    try {
        dispatch(loginRequest());
        const {data} = await instanceNodeJs.post("/auth/login", formData);
        dispatch(loginUserSuccess());
    } catch (error) {
        dispatch(loginFailure(error.response?.data.message || error.message));
    }
};

export const loginAdmin = (formData) => async (dispatch) => {
    try {
        dispatch(loginRequest());
        // const { data } = await axios.post("/auth/admin/login", formData);
        dispatch(loginAdminSuccess());
    } catch (error) {
        dispatch(loginFailure(error.response?.data.message || error.message));
    }
};

export const loginGG = () => async (dispatch) => {
    try {
        dispatch(loginRequest());
        window.location.href = "http://localhost:8000/auth/google"; // Redirect to Google OAuth
    } catch (error) {
        dispatch(loginFailure(error.response?.data.message || error.message));
    }
};

export const logoutUser = () => async (dispatch) => {
    try {
        await instanceNodeJs.get("/logout"); // Đảm bảo endpoint đúng
        dispatch(logoutUserSuccess()); // Cập nhật trạng thái đăng xuất trong Redux
    } catch (error) {
        console.error("Logout error:", error); // Hiển thị lỗi
    }
};

export const logoutAdmin = () => async (dispatch) => {
    try {
        // await instanceNodeJs.get("/logout"); // Đảm bảo endpoint đúng
        dispatch(logoutAdminSuccess()); // Cập nhật trạng thái đăng xuất trong Redux
    } catch (error) {
        console.error("Logout error:", error); // Hiển thị lỗi
    }
};
