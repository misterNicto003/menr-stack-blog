import React from "react";
import "../auth.scss";
import { Button, Heading, Input } from "../../../components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <div className="auth_box">
        <Heading>Войти</Heading>

        <form className="auth_box_form">
          <Input value="" name="UserName" placeholder="UserName" required />
          <Input value="" name="Password" placeholder="Password" required />
          <p className="auth_text fs-12">
            
            <Link to="/forgot">
              Забыли пароль ?
            </Link>
          </p>

          <Button fullWidth type="submit">
            Войти
          </Button>
        </form>
        <p className="auth_text fs-12">
          Нет аккаунта?
            
            <Link to="/register">
              Создать аккаунт
            </Link>
          </p>
      </div>
    </div>
  );
};

export default Login;
