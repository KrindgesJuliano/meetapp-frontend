import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { MdLoyalty } from 'react-icons/md';
import { Container } from './styles';

export default function MeetupEdit() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup);

  return (
    <Container>
      <Form>
        <Input type="text" name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <Input type="text" name="date" placeholder="Data do Meetup" />
        <Input type="text" name="location" placeholder="Localização" />
        <button type="submit">
          <MdLoyalty size={20} color="#fff" /> Salvar Meetup
        </button>
      </Form>
    </Container>
  );
}
