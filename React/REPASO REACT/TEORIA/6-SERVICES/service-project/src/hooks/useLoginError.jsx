import Swal from "sweetalert2/dist/sweetalert2.all.js";


const useLoginError = (res, setLoginOk, userLogin) => {
  //? si la respuesta es ok = res.status
  //? si la respuesta no esta ok= res.response.status
  //* ------------------ 200 : todo ok
  console.log(res.status)
  if (res?.status == 200) {
    const dataCustom = {
      token: res.data.token,
      user: res.data.user.name,
      email: res.data.user.email,
      _id: res.data.user._id,
      image: res.data.user.image,
      check: res.data.user.check,
    };

    const dataString = JSON.stringify(dataCustom);
    userLogin(dataString);
    setLoginOk(() => true);
    Swal.fire({
      icon: "success",
      title: "Welcome to my Page",
      text: "Login ok",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  //! ------------------- 404: 'password dont match'

  //! ------------------- 404: 'User no register'

  //! --------------------500: INTERNAL SERVER ERROR
};
export default useLoginError;
