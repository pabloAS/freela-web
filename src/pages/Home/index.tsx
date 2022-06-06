import React, { useRef, useState } from "react";
import { FiSearch } from 'react-icons/fi'
import Modal from "../../components/Modal/ModalLogin";
import Logo from '../../assets/images/lg/vector.svg'
import Card from "../../components/Card";
import Input from "../../components/Input";
import { Container, Content, NavContainer, Title } from "./styles";
import { Form } from "@unform/web";
const Home: React.FC = () => {
  const formRef = useRef(null)
  const [showModal, setShowModal] = useState(false);
  const toggle = () => {
    setShowModal(visibleModal => !visibleModal)
  }

  function handleSubmit() { }

  return (
    <Container>
      <NavContainer>
        <div className="NavBar">
          <div className="NavLogoContainer">
            <img src={Logo} alt="Logo da aplicação" className="NavLogo" />
            <h1 className="TittleApp">Freela</h1>
          </div>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              onSubmit={handleSubmit}
              name="seach"
              icon={FiSearch}
              placeholder="Pesquisar"
              style={{ fontSize: 13, color: '#004788' }}
            />

          </Form>
          <button className="BtnEntrar" onClick={toggle}>Entrar</button>

        </div >
      </NavContainer >
      <Modal isModalVisible={showModal} onBackdropClick={toggle} />
      <Content>
        <Title>
          Profissionais Anunciados
        </Title >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </Content>
    </Container >
  )
}

export default Home;