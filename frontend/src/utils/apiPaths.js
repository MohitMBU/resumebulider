export const BASE_URL = "https://resumexpert-backend.onrender.com/api";

//utils/apiPath.js
export const API_PATHS = {

    AUTH: {
        REGISTER: BASE_URL + "/auth/register",
        LOGIN: BASE_URL + "/auth/login",
        GET_PROFILE: BASE_URL + "/auth/profile",
    },
    RESUME: {
        CREATE: BASE_URL + "/resume",
        GET_ALL: BASE_URL + "/resume",
        GET_BY_ID: (id) => BASE_URL + `/resume/${id}`,
        UPDATE: (id) => BASE_URL + `/resume/${id}`,
        DELETE: (id) => BASE_URL + `/resume/${id}`,
        UPLOAD_IMAGES: (id) => BASE_URL + `/resume/${id}/upload-images`,
    },
    image: {
        UPLOAD_IMAGE: BASE_URL + "/auth/upload-image",
    },
};