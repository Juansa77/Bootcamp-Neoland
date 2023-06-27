/* eslint-disable react-hooks/rules-of-hooks */
import "./Register.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import Uploadfile from "../components/Uploadfile";
import { registerUser } from "../services/API_user/user.service";
import Spinner from "../components/Spinner";
import useRegisterError from "../hooks/useRegisterError";


const Register = () => {
  //* MÉTODOS DE REACT HOOK FORM
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  //? Para setear cuando se llama al servicio y cuando termina la llamada
  const [send, setSend] = useState(false);
  //* Estados para manejar que la respuesta es exitosa
  const [okRegister, setOkRegister] = useState(false);

  //! ------------------------------------------------------------------------------
  //? 1) funcion que se encarga del formulario - de la data del formulario
  //! ------------------------------------------------------------------------------

  const formSubmit = async (formData) => {
    //?Apuntamos al input file por ID
    const inputFile = document.getElementById("file-upload").files;
    //?Si hay archivo, creamos un objeto con una copia de formData y le metemos el archivo
    if (inputFile.length !== 0) {
      // cuando me han hayan puesto una imagen por el input

      const custonFormData = {
        ...formData,
        image: inputFile[0],
      };

      //* Setsend pone el botón en disabled y activa el spinner de loading

      setSend(true);
      //* registerUser accede al endpoint que hemos definido en el servicio 
      setRes(await registerUser(custonFormData));
      setSend(false);

      //* me llamo al servicio
    } else {
      const custonFormData = {
        ...formData,
      };

      setSend(true);
      setRes(await registerUser(custonFormData));
      setSend(false);

      ///* me llamo al servicio
    }
  };


  //! ------------------------------------------------------------------------------
  //? 2) funcion que se encarga del formulario- de la data del formulario
  //! ------------------------------------------------------------------------------
  useEffect(() => {
    useRegisterError(res, setOkRegister, setRes)
  }, [res]);
  //! ------------------------------------------------------------------------------
  //? 3) Estados de navegacion ----PENDIENTE
  //! ------------------------------------------------------------------------------

  if (okRegister) {
    console.log("res", res);
    console.log("registro correcto ya puedes navegar");
  }
  return (
    <>
      <div className="form-wrap">
        <h1>Sign Up</h1>
        <p>It’s free and only takes a minute.</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <input
              className="input_user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("name", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              username
            </label>
          </div>
          <div className="password_container form-group">
            <input
              className="input_user"
              type="password"
              id="password"
              name="password"
              autoComplete="false"
              {...register("password", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              password
            </label>
          </div>
          <div className="email_container form-group">
            <input
              className="input_user"
              type="email"
              id="email"
              name="email"
              autoComplete="false"
              {...register("email", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              email
            </label>
          </div>
          <div className="sexo">
            <input
              type="radio"
              name="sexo"
              id="hombre"
              value="hombre"
              {...register("gender")}
            />
            <label htmlFor="hombre" className="label-radio hombre">
              Hombre
            </label>
            <input
              type="radio"
              name="sexo"
              id="mujer"
              value="mujer"
              {...register("gender")}
            />
            <label htmlFor="mujer" className="label-radio mujer">
              Mujer
            </label>
          </div>

          <Uploadfile />

          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
            {/* SI SEND ESTÁ EN TRUE, CARGAMOS EL SPINNER DE LOADING*/} 
              {send ? <Spinner /> : "Register"}
            </button>
          </div>
          <p className="bottom-text">
            <small>
              By clicking the Sign Up button, you agree to our{" "}
              <a href="#">Terms & Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </small>
          </p>
        </form>
      </div>
      <div className="account-reminder">
        <p>
          Already have an account? <a href="#">Login Here</a>
        </p>
      </div>
    </>
  );
};

export default Register;
