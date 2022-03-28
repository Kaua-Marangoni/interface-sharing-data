import styled from "styled-components"

export const Container = styled.div`
  background-color: #8fbc8f;
  max-width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: row;
  gap: 70px;
  align-items: center;
  justify-content: center;

  @media (max-width: 970px) {
    flex-direction: column;
    justify-content: normal;
    gap: 0;
  }
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ul {
    overflow: auto;
    height: 80vh;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    display: flex;

    @media (max-width: 970px) {
      height: 77vh;
    }
  }
`

export const Header = styled.header`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  .fa-arrow-left {
    margin-left: 15px;
    cursor: pointer;
    font-size: 20px;
    padding: 5px;
    background-color: #8fbc8f;
  }

  .fa-arrow-left:hover {
    opacity: 0.7;
  }
`

export const DivSearch = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 15px;

  .fa-search {
    height: 100%;
    background: #ffffff99;
    color: #8b8b8b;
    padding: 10px;
    border-radius: 14px 0 0 14px;
    display: flex;
    align-items: center;
  }
`

export const FieldSearch = styled.div`
  background: #ffffff99;
  height: 40px;
  display: flex;
  border-radius: 14px;
  align-items: center;

  @media (max-width: 970px) {
    display: none;
  }
`

export const FieldSearchMobile = styled.div`
  display: none;

  .fa-search {
    height: 100%;
    background: #ffffff99;
    color: #8b8b8b;
    padding: 10px;
    border-radius: 14px 0 0 14px;
    display: flex;
    align-items: center;
  }

  @media (max-width: 970px) {
    background: #ffffff99;
    height: 40px;
    width: 240px;
    margin: 0 auto 10px auto;
    display: flex;
    border-radius: 14px;
    align-items: center;
  }
`

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  text-align: center;

  color: #000000;

  @media (max-width: 970px) {
    flex-direction: column;
  }
`

export const Input = styled.input`
  width: 160px;
  height: 40px;

  padding-left: 10px;

  background: none;
  border-radius: 0 14px 14px 0;
  border: none;
  outline: none;

  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`

export const NumberUsers = styled.p`
  margin: 5px 0 50px 0;
  text-align: center;
  font-weight: 300;
  font-size: 17px;
`

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 0 5px 18px 5px;
  padding: 0 25px;

  background: #ffffff99;
  border-radius: 14px;

  width: 342px;
  height: 101px;

  .icons {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .fa-pencil-alt {
    font-size: 20px;
    cursor: pointer;
  }

  .fa-trash-alt {
    font-size: 25px;
    cursor: pointer;
  }
`

export const Data = styled.div`
  display: flex;
  flex-direction: column;
`

export const NameUser = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
`

export const Number = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  margin: 5px 0 15px 0;

  color: #000000;
`

export const CriationDate = styled.p`
  font-size: 14px;
`

export const Loading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const I = styled.i`
  position: absolute;
  padding: 5px;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
`

export const InputModal = styled.input`
  width: 100%;
  height: 58px;

  display: block;
  padding-left: 15px;
  margin-bottom: 15px;

  background: #ffffff99;
  border-radius: 14px;
  border: 1px solid #000;
  outline: none;

  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`

export const ButtonLogin = styled.button`
  background: #27ac59;
  color: #ffffff;

  transition: all 0.1s;

  float: right;
  margin-bottom: 10px;
  width: 80px;
  height: 50px;

  border-radius: 14px;
  border: none;
  outline: none;

  font-weight: 900;
  font-size: 17px;
  line-height: 2px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

export const Label = styled.p`
  margin-top: 20px;
  margin-left: 10px;
`

export const ButtonGoHome = styled.button`
  background: #ac8f27;
  color: #ffffff;

  margin: 15px 0 30px 0;

  transition: all 0.1s;

  width: 100%;
  height: 68px;

  border-radius: 14px;
  border: none;
  outline: none;

  font-weight: 900;
  font-size: 17px;
  line-height: 2px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
