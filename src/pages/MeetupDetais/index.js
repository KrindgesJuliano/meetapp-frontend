import React from 'react';
import { useSelector } from 'react-redux';
import { MdSystemUpdateAlt, MdViewHeadline } from 'react-icons/md';

import { Container, Details, EditButton, Cancelbutton } from './styles';

export default function MeetupDetais() {
  const meetup = useSelector(state => state.meetup.event);

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
        <img src={meetup.imagem.url} alt="" />
        <p>{meetup.description}</p>
        <footer>
          <time>{meetup.formattedDate}</time>
          <location>{meetup.location}</location>
        </footer>
      </Details>
    </Container>
  );
}
