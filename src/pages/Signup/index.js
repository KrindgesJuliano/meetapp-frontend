import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um email valido')
    .required('O e-mail é obrigatorio'),
  password: Yup.string()
    .min(6, 'A senha precisa de ao menos 6 caracteres')
    .required('A senha é obrigatoria'),
});

export default function Signup() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={Logo} alt="Meetapp" size={41} />

      <Form onSubmit={handleSubmit} schema={schema}>
        <Input placeholder="Nome Completo" name="name" />
        <Input type="email" name="email" id="" placeholder="Seu e-mail" />
        <Input type="password" name="password" placeholder="Sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login </Link>
      </Form>
    </>
  );
}
