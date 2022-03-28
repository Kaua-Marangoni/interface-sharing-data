import { format } from "date-fns"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Loader from "react-spinners/ClipLoader"
import { toast } from "react-toastify"

import api from "../services/api"
import {
  Container,
  ContainerItens,
  H1,
  Header,
  DivSearch,
  FieldSearch,
  FieldSearchMobile,
  Input,
  NumberUsers,
  Data,
  User,
  NameUser,
  Number,
  CriationDate,
  Loading
} from "./styles"

const App = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  const goBackPage = () => navigate("/users")

  useEffect(() => {
    setLoading(true)

    const fetchUsers = async () => {
      const { data: allUsers } = await api.get("numbers")

      setUsers(allUsers)
      setLoading(false)
    }

    fetchUsers()
  }, [])

  const numberOfUsers = () => {
    const number = users.length

    if (!loading) {
      switch (number) {
        case 0:
          return (
            <NumberUsers className="number-peoples-registered">
              Nenhuma Pessoa Cadastrada
            </NumberUsers>
          )

        case 1:
          return (
            <NumberUsers className="number-peoples-registered">
              1 Pessoa Cadastrada
            </NumberUsers>
          )

        default:
          return (
            <NumberUsers className="number-peoples-registered">
              {number} Pessoas Cadastradas
            </NumberUsers>
          )
      }
    } else {
      return (
        <NumberUsers className="number-peoples-registered">
          N° Pessoas Cadastradas
        </NumberUsers>
      )
    }
  }

  const goPageEdit = userId => {
    navigate({ pathname: `/edit-user/${userId}` })
  }

  const deleteUser = async userId => {
    setLoading(true)
    await api.delete(`numbers/${userId}`)

    const newUsers = users.filter(user => user.id !== userId)
    setLoading(false)
    setUsers(newUsers)
    toast.success("Deletado!")
  }

  const lowerSearch = search.toLowerCase()
  const onlyNumbers = str => str.replace(/[^0-9]/g, "")

  const usersFiltered = users.filter(
    user =>
      user.name.toLowerCase().includes(lowerSearch) ||
      onlyNumbers(user.number).includes(lowerSearch)
  )

  const titleize = text => {
    const loweredText = text.toLowerCase()
    const words = loweredText.split(" ")
    for (let a = 0; a < words.length; a++) {
      let w = words[a]

      const firstLetter = w[0]
      w = firstLetter.toUpperCase() + w.slice(1)

      words[a] = w
    }
    return words.join(" ")
  }

  return (
    <Container>
      <ContainerItens>
        <Header>
          <span>
            <i onClick={goBackPage} className="fas fa-arrow-left"></i>
          </span>
          <H1>Privado</H1>

          <DivSearch>
            <FieldSearch>
              <i className="fas fa-search"></i>
              <Input
                type="text"
                placeholder="Busca"
                value={search}
                onChange={event => setSearch(event.target.value)}
              />
            </FieldSearch>
          </DivSearch>
        </Header>

        {numberOfUsers()}

        <FieldSearchMobile>
          <i className="fas fa-search"></i>
          <Input
            type="text"
            placeholder="Busca"
            value={search}
            onChange={event => setSearch(event.target.value)}
          />
        </FieldSearchMobile>

        <Loading>{loading && <Loader loading={loading} size={50} />}</Loading>

        <ul>
          {usersFiltered.map(user => {
            const dateFormatted = format(
              new Date(user.createdAt),
              "dd/MM/yyyy - HH:mm"
            )

            return (
              <User key={user.id}>
                <Data>
                  <NameUser>{titleize(user.name)}</NameUser>
                  <Number>{user.number}</Number>
                  <CriationDate>Adicionado em {dateFormatted}</CriationDate>
                </Data>
                <div className="icons">
                  <i
                    onClick={() => goPageEdit(user.id)}
                    className="fas fa-pencil-alt"
                  ></i>
                  <i
                    onClick={() => deleteUser(user.id)}
                    className="far fa-trash-alt"
                  ></i>
                </div>
              </User>
            )
          })}
        </ul>
      </ContainerItens>
    </Container>
  )
}

export default App
