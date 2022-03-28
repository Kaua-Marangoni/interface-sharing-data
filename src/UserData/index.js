import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import Loader from "react-spinners/ClipLoader"
import { toast } from "react-toastify"

import ImageHeader from "../assets/header-image.png"
import UsersLoading from "../Components/OrderLoading"
import api from "../services/api"
import {
  Container,
  Image,
  ContainerItens,
  H1,
  NumberUsers,
  DivSearch,
  InputSearch,
  Loading,
  FieldSearch,
  Data,
  User,
  NameUser,
  Number,
  ButtonGoHome
} from "./styles"

const App = () => {
  const [users, setUsers] = useState([])
  const [skeletonLoading, setSkeletonLoading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  const goBackPage = () => navigate("/")

  useEffect(() => {
    const fetchUsers = async () => {
      setSkeletonLoading(true)
      const allUsers =
        JSON.parse(localStorage.getItem("sharing-data:my-users")) || []

      setUsers(allUsers)
      setSkeletonLoading(false)
    }

    fetchUsers()
  }, [])

  const goPageEdit = userId => {
    navigate({ pathname: `/edit-my-user/${userId}` })
  }

  const deleteUser = async userId => {
    try {
      setLoading(true)

      await api.delete(`numbers/${userId}`)

      const newUsers = users.filter(user => user.id !== userId)

      const dataUserLocalStorage =
        JSON.parse(localStorage.getItem("sharing-data:my-users")) || []

      const index = dataUserLocalStorage.findIndex(user => user.id === userId)

      dataUserLocalStorage.splice(index, 1)

      localStorage.setItem(
        "sharing-data:my-users",
        JSON.stringify(dataUserLocalStorage)
      )

      setLoading(false)
      setUsers(newUsers)
      toast.success("Deletado!")
    } catch (err) {
      const errorText = err.toString()
      if (errorText.includes(404)) {
        const newUsers = users.filter(user => user.id !== userId)

        const dataUserLocalStorage =
          JSON.parse(localStorage.getItem("sharing-data:my-users")) || []

        const index = dataUserLocalStorage.findIndex(user => user.id === userId)

        dataUserLocalStorage.splice(index, 1)

        localStorage.setItem(
          "sharing-data:my-users",
          JSON.stringify(dataUserLocalStorage)
        )

        setUsers(newUsers)
        setLoading(false)
      }
    }
  }

  const numberOfUsers = () => {
    const number = users.length

    if (!skeletonLoading) {
      switch (number) {
        case 0:
          return (
            <NumberUsers className="number-peoples-registered">
              Nenhum Número Cadastrado
            </NumberUsers>
          )

        case 1:
          return (
            <NumberUsers className="number-peoples-registered">
              1 Número Cadastrado
            </NumberUsers>
          )

        default:
          return (
            <NumberUsers className="number-peoples-registered">
              {number} Números Cadastrados
            </NumberUsers>
          )
      }
    } else {
      return (
        <NumberUsers className="number-peoples-registered">
          N° Números Cadastrados
        </NumberUsers>
      )
    }
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
      <i onClick={goBackPage} className="fas fa-arrow-left"></i>
      <Image src={ImageHeader} alt="Imagem Inicial" />

      <ContainerItens>
        <H1>Meus Cadastros</H1>

        {numberOfUsers()}

        {skeletonLoading && (
          <>
            <UsersLoading />
            <UsersLoading />
            <UsersLoading />
            <UsersLoading />
          </>
        )}

        {!skeletonLoading && (
          <>
            <DivSearch>
              <FieldSearch>
                <i className="fas fa-search"></i>
                <InputSearch
                  type="text"
                  placeholder="Busca"
                  value={search}
                  onChange={event => setSearch(event.target.value)}
                />
              </FieldSearch>
            </DivSearch>

            <Loading>
              {loading && <Loader loading={loading} size={50} />}
            </Loading>

            <ul>
              {usersFiltered.map(user => {
                return (
                  <User key={user.id}>
                    <Data>
                      <NameUser>{titleize(user.name)}</NameUser>
                      <Number>{user.number}</Number>
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
              <ButtonGoHome onClick={goBackPage}>Voltar</ButtonGoHome>
            </ul>
          </>
        )}
      </ContainerItens>
    </Container>
  )
}

export default App
