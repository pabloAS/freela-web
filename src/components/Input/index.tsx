import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from "react";
import { useField } from "@unform/core";
import { IconBaseProps } from 'react-icons'
import { Container, ErrorTooltip } from './style'
import { FiAlertCircle } from "react-icons/fi";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...ress }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  //função para não perder os dados digitados dentro do input
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    //verificiar se o há algum tipo de alteração nos valores do input.
    setIsFilled(!!inputRef.current?.value)
  }, [])
  //função para não dar foco nos inputs
  const handleInputFocused = useCallback(() => {
    setIsFocused(true)
  }, [])

  //função para pegar os dados do input
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])
  return (
    <Container isErrors={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        {...ress}
        onFocus={handleInputFocused}
        onBlur={handleInputBlur}
      />
      {error && (
        <ErrorTooltip title={error} >
          <FiAlertCircle color="#D10000" size={20} />

        </ErrorTooltip>
      )}

    </Container>


  )
}


export default Input