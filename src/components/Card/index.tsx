import React, { useState, useEffect } from "react";
import api from '../../services/api'

import Perfil from '../../assets/images/profile/perfil1.png'

import { Container, ContainerCard, CardImg, ContainerIfo, TitleText, SubTitleText, EnderecoText } from "./styles";
import { FiBriefcase, FiMapPin, FiUser } from "react-icons/fi";

const Card: React.FC = () => {
  const [user, setUser] = useState();
  /* useEffect(() => {
    api
      .get("/usuario/:name")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []); */
  return (
    <Container>

      <ContainerCard >
        <CardImg>
          <img src={Perfil} />
        </CardImg>
        <ContainerIfo>
          <TitleText>
            <FiBriefcase size={28} style={{ paddingRight: 10, paddingTop: 10 }} />
            Mecanico
          </TitleText>
          <SubTitleText>
            <FiUser size={28} style={{ paddingRight: 10, paddingTop: 10 }} />
            Pablo Almeida
          </SubTitleText>
          <EnderecoText>
            <FiMapPin size={28} style={{ paddingRight: 10, paddingTop: 10 }} />
            Canoas - Rio Grande Do Sul
          </EnderecoText>
        </ContainerIfo>
      </ContainerCard>

    </Container>
  )
}

export default Card;