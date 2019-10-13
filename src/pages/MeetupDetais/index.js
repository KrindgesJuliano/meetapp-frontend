import React, { useSelector } from 'react';
import { MdSystemUpdateAlt, MdViewHeadline } from 'react-icons/md';

import { Container, Details, EditButton, Cancelbutton } from './styles';

import Banner from '~/assets/banner.png';

export default function MeetupDetais() {
  const meetup = useSelector(state => state.event);

  console.tron.log(state => state.event);

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>
        <aside>
          <EditButton type="button">
            <MdViewHeadline />
            Editar
          </EditButton>
          <Cancelbutton type="button">
            <MdSystemUpdateAlt />
            Cancelar
          </Cancelbutton>
        </aside>
      </header>

      <Details>
        <img src={Banner} alt="" />
        <p>{meetup.description}</p>
        <footer>
          <time>{meetup.date}</time>
          <location>{meetup.location}</location>
        </footer>
      </Details>
    </Container>
  );
}
