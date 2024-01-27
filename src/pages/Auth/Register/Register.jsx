import React from 'react'
import "../auth.scss";
import { Button, Heading, Input } from "../../../components";
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className="auth">
      <div className="auth_box">
        <Heading>Регистрация</Heading>

        <form className="auth_box_form">
          <Input value="" name="UserName" placeholder="UserName" required />
          <Input value="" name="Password" placeholder="Password" required />
          <Input value="" name="Confirm Password" placeholder="Confirm Password" required />
          

          <Button fullWidth type="submit">
          Регистрация
          </Button>

          
        </form>
        <p className="auth_text fs-12">
            Есть аккаунт?
            <Link to="/login">
              Войти
            </Link>
          </p>
      </div>
    </div>
  );
}

export default Register