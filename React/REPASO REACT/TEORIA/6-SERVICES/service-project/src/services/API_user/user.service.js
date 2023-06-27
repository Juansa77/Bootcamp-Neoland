import { APIuser } from "./serviceApiUser.config";
import { updateToken } from "../../utils/updateToken";

export const registerUser = async (formData) => {
  const updatedToken = updateToken();
  const headers = {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${updatedToken}`
  };

  return APIuser.post("http://localhost:8095/api/v1/users/register", formData, { headers })
    .then((res) => res)
    .then(console.log(formData))
    .catch((error) => error);
};

//?------------------------------------------------------
//*-----------------CHECKCODE-------------------------
//?------------------------------------------------------

export const checkCodeConfirmationUser = async (formData) => {
  return APIuser.post("/users/check", formData)
    .then((res) => res)
    .catch((error) => error);
};


//?------------------------------------------------------
//*-----------------LOGIN-------------------------
//?------------------------------------------------------

export const loginUser = async (formData) => {
  return APIuser.post("/users/login", formData)
    .then((res) => res)
    .catch((error) => error);
};



//?------------------------------------------------------
//*-----------------AUTO LOGIN-------------------------
//?------------------------------------------------------

export const autoLoginUser = async (formData) => {
  return APIuser.post("/users/login/autologin", formData)
    .then((res) => res)
    .catch((error) => error);
};




//?------------------------------------------------------
//*-----------------FORGOT PASSWORD-------------------------
//?------------------------------------------------------

export const forgotPassword = async (formData) => {
  return APIuser.patch("/users/forgotpassword", formData)
    .then((res) => res)
    .catch((error) => error);
};


//?------------------------------------------------------
//*-----------------CHANGE PASSWORD-------------------------
//?------------------------------------------------------

export const changePassword = async (formData) => {
  return APIuser.patch("/users/changepassword", formData)
    .then((res) => res)
    .catch((error) => error);
};
