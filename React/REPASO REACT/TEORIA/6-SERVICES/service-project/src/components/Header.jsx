import "./Header.css";
import { useAuth } from "../context/authContext";
import { NavLink } from "react-router-dom";

const Header = () => {
  //* Sacamos user y logOut del useAuth
  const { user, logOut } = useAuth();

  return (
    <>
      <header>
        <div className="titleFatherContainer">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1685704450/user-3296_rtszbc.png"
            alt="logo"
            className="logo"
          />
          <div className="titleContainer">
            <h3 className="titleHeader">USER PAGE</h3>
            <h3 className="titleHeaderBlack">USER PAGE</h3>
          </div>
        </div>
        <nav>
          {/** Si no hay user, lo llevamos al login */}
          {user == null && (
            <NavLink to="/login">
              <img
                src="https://res.cloudinary.com/dq186ej4c/image/upload/v1685705523/login_ljn9fb.png"
                alt=""
                className="iconNav"
              />
            </NavLink>
          )}
          {/** Si user es diferente de null, enlace al dashboard */}
          {user !== null ? (
            <NavLink to="/dashboard">
              <img
                src="https://res.cloudinary.com/dq186ej4c/image/upload/v1685705689/dashboard-statistics-5492_rnmxcl.png"
                alt=""
                className="iconNav iconDashBoard"
              />
            </NavLink>
          ) : null}
          <NavLink to="/">
            <img
              src="https://res.cloudinary.com/dq186ej4c/image/upload/v1685705455/home_circle_outline_icon_139029_xdnnt2.png"
              alt=""
              className="iconNav home"
            />
          </NavLink>
          {/** Si user es diferente de null, activamos la imagen con onclick de logOut */}
          {user !== null && (
            <img
              src="https://res.cloudinary.com/dq186ej4c/image/upload/v1685706203/9e3c325bca17c2147d249237c5a0906b_qhqifa.png"
              alt=""
              className="iconNav iconLogout"
              onClick={() => logOut()}
            />
          )}
          {/** Si user es diferente de null, imagen con enlace al profile */}
          {user !== null ? (
            <>
              <NavLink to="/profile">
                <img
                  className="profileCircle"
                  src={user.image}
                  alt={user.user}
                />
              </NavLink>
            </>
          ) : null}
        </nav>
      </header>
    </>
  );
};

export default Header;
