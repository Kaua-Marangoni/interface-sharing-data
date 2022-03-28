import React, { useState } from "react"
import { useForm } from "react-hook-form"
import InputMask from "react-input-mask"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import ImageHeader from "../assets/header-image.png"
import api from "../services/api"
import {
  Container,
  Image,
  P,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
  ButtonGoNumbers
} from "./styles"

const App = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm({})

  const onSubmit = async clientData => {
    const onlyNumbers = str => str.replace(/[^0-9]/g, "")
    if (clientData.name <= 0 || onlyNumbers(clientData.number).length <= 10) {
      toast.warning("Os campos são obrigatórios!")
    } else {
      const { data: newUser } = await toast.promise(
        api.post("numbers", {
          name: clientData.name,
          number: clientData.number
        }),
        {
          pending: "Enviando Dados",
          success: "Dados Cadastrados",
          error: "Número já cadastrado ou erro no sistema!"
        }
      )

      const dataUserLocalStorage =
        JSON.parse(localStorage.getItem("sharing-data:my-users")) || []

      localStorage.setItem(
        "sharing-data:my-users",
        JSON.stringify([...dataUserLocalStorage, newUser])
      )

      setUsers([...users, newUser])
      navigate("/users")
    }
  }

  return (
    <Container>
      <Image src={ImageHeader} alt="Imagem Inicial" />

      <P onClick={() => navigate("/my-data")}>Meus Números</P>

      <ContainerItens>
        <H1>Conecte-se</H1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputLabel>Nome</InputLabel>
          <Input
            type="text"
            placeholder="Ex: João da Silva"
            {...register("name")}
          />

          <InputLabel>Número</InputLabel>
          <InputMask
            mask="(99) 99999-9999"
            className="input"
            placeholder="Ex: (xx) xxxxx-xxxx"
            {...register("number")}
          />

          <Button type="submit">Adicionar</Button>

          <ButtonGoNumbers onClick={() => navigate("/users")}>
            Ver Números
          </ButtonGoNumbers>
        </form>
      </ContainerItens>
    </Container>
  )
}

export default App
