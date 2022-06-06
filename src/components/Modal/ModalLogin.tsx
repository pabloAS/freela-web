import React, { useState, useRef, useCallback } from "react";
import { Form } from "@unform/web";
import ReactDOM from "react-dom";
import * as Yup from 'yup'
import { FiMail, FiLock, FiUser, FiPhone, FiMapPin, FiUserPlus, FiArrowLeft } from 'react-icons/fi'
import { ModalBg, ModalBodyLogin, GoToCadastro, ModalBodyCadastro, GoBack } from './styles'

import Logo from '../../assets/images/lg/vector.svg'
import Input from "../Input";
import { FormHandles, SubmitHandler } from "@unform/core";
import getValidationErrors from "../../utils/getValidationErrors";


interface ModalProps {
  onBackdropClick: () => void
  isModalVisible: boolean;
}

const Modal: React.FC<ModalProps> = ({ onBackdropClick, isModalVisible }) => {
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef<FormHandles>(null)


  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        password: Yup.string().required().min(6, 'No minimo 6 digitios'),
        email: Yup.string().email('Digite um email válido').required('Email é obrigatório'),
        nome: Yup.string().required('Nome é obrigatório'),
        telefone: Yup.string().required('Telefone é obrigatório'),
        estado: Yup.string().required('UF é obrigatório'),
        cidade: Yup.string().required('A cidade é obrigatório'),
        senha: Yup.string().min(6, 'No minimo 6 digitios'),

      })
      await schema.validate(data, { abortEarly: false })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)
      }
    }
  }, [])
  if (!isModalVisible) {
    return null
  }

  return ReactDOM.createPortal(

    <>

      <ModalBg onClick={onBackdropClick}>

        {!showModal && <ModalBodyLogin onClick={e => e.stopPropagation()}>

          <img src={Logo} alt="Logo da aplicação" />
          <h1 className="TitleLogin">Fazer Login</h1>
          <Form ref={formRef} onSubmit={handleSubmit}   >
            <Input
              type="mail"
              name="email"
              icon={FiMail}
              placeholder="E-mail"
              style={{ fontSize: 13, color: '#004788' }}
            />
            <Input
              type="password"
              name="password"
              icon={FiLock}
              placeholder="Senha"
              style={{ fontSize: 13 }}
            />
            <button >Entrar</button>
          </Form>
          <GoToCadastro>
            <FiUserPlus size={20} style={{ marginRight: 10 }} />
            <a onClick={() => setShowModal(true)} >
              Realizar o cadastro
            </a>
          </GoToCadastro>
        </ModalBodyLogin >}
        {showModal && <ModalBodyCadastro onClick={e => e.stopPropagation()}>
          <GoBack>
            <FiArrowLeft size={20} onClick={() => setShowModal(false)} />
          </GoBack>
          <img src={Logo} alt="Logo da aplicação" />
          <h1 className="TitleCadastro">Cadastrar</h1>
          <Form ref={formRef} onSubmit={handleSubmit} >
            <Input
              type="text"
              name="nome"
              icon={FiUser}
              placeholder="Digite o seu nome "
              style={{ fontSize: 13, color: '#004788', }}
            />
            <Input
              type="text"
              name="telefone"
              icon={FiPhone}
              placeholder="Digite o seu numero "
              style={{ fontSize: 13, color: '#004788' }}
            />
            <Input
              type="text"
              name="cidade"
              icon={FiMapPin}
              placeholder="Digite a sua cidade "
              style={{ fontSize: 13, color: '#004788' }}
            />
            <Input
              type="text"
              name="estado"
              icon={FiMapPin}
              placeholder="Digite o seu estado "
              style={{ fontSize: 13, color: '#004788' }}
            />
            <Input
              type="mail"
              name="email"
              icon={FiMail}
              placeholder="Digite um e-mail valido"
              style={{ fontSize: 13, color: '#004788' }}
            />
            <Input
              type="password"
              name="senha" icon={FiLock}
              placeholder="Digite uma senha no minimo 6 dititos"
              style={{ fontSize: 13 }}
            />
            <button className="BtnCadastro">Criar</button>
          </Form >
        </ModalBodyCadastro>}




      </ModalBg >

    </>

    , document.getElementById("modal-root")!
  )
}

export default Modal



