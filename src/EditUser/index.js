import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"

import api from "../services/api"
import {
  Container,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
  ButtonGoNumbers
} from "./styles"

const App = () => {
  const navigate = useNavigate()

  const { id } = useParams()

  const { register, handleSubmit, reset } = useForm({})

  const addNewUser = async data => {
    if (data.name <= 0 || data.number <= 0) {
      toast.warn("Os campos são obrigatórios")
    } else {
      await toast.promise(api.put(`/numbers/${id}`, data), {
        pending: "Atualizando",
        success: "Dados atualizados",
        error: "Falha no sistema, por favor tente novamente!"
      })

      navigate("/private18")
    }
  }

  useEffect(() => {
    api.get(`numbers/${id}`).then(response => {
      reset(response.data)
    })
  }, [id, reset])

  const goPagePrivateUsers = () => {
    navigate("/private18")
  }

  return (
    <Container>
      <ContainerItens>
        <i onClick={goPagePrivateUsers} className="fas fa-arrow-left"></i>

        <H1>Editar Usúario</H1>

        <form onSubmit={handleSubmit(addNewUser)}>
          <InputLabel>Nome</InputLabel>
          <Input {...register("name")} />

          <InputLabel>Número</InputLabel>
          <Input {...register("number")} />

          <Button type="submit">Atualizar</Button>
          <ButtonGoNumbers onClick={() => navigate("/private18")}>
            Voltar
          </ButtonGoNumbers>
        </form>
      </ContainerItens>
    </Container>
  )
}

export default App
