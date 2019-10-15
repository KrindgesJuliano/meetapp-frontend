import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { MdLoyalty } from 'react-icons/md';
import { createNewMeetup } from '~/store/modules/meetup/actions';

import BannerInput from './BannerInput';
import Datepicker from '~/components/Datepicker';

import { Container } from './styles';

export default function MeetupEdit() {
  const meetup = useSelector(state => state.meetup.event);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(createNewMeetup(data));
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <BannerInput name="banner" />
        <Input type="text" name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <Datepicker
          type="text"
          value="prayer"
          name="date"
          placeholder="Data do Meetup"
        />
        <Input type="text" name="location" placeholder="Localização" />
        <button type="submit">
          <MdLoyalty size={20} color="#fff" /> Salvar Meetup
        </button>
      </Form>
    </Container>
  );
}
