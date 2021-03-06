import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';

import { MdLoyalty } from 'react-icons/md';
import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Endereco de email" />
        <hr />
        <Input type="password" name="oldPassword" placeholder="Senha atual" />
        <Input type="password" name="password" placeholder="Nova senha" />\
        <Input
          type="password"
          name="confirmPass"
          placeholder="Cofirmacao a senha"
        />
        <button type="submit">
          <MdLoyalty size={20} color="#fff" />
          Atualizar perfil
        </button>
      </Form>
    </Container>
  );
}
