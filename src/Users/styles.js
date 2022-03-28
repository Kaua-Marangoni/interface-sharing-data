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

  .fa-arrow-left {
    position: fixed;
    cursor: pointer;
    font-size: 20px;
    padding: 5px;
    left: 15px;
    top: 15px;
    background-color: #8fbc8f;
  }

  .fa-arrow-left:hover {
    opacity: 0.7;
  }

  @media (max-width: 970px) {
    flex-direction: column;
    justify-content: normal;
    gap: 0;
  }
`

export const I = styled.i`
  position: absolute;
  padding: 5px;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
`

export const Input = styled.input`
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

export const Image = styled.img`
  width: 550px;
  margin: 20px 0;

  @media (max-width: 970px) {
    width: 100%;
    max-width: 400px;
  }
`

export const P = styled.p`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export const PMyData = styled.p`
  position: fixed;
  color: #fff;
  padding: 5px 15px;
  border-radius: 8px;
  background: #ac8f27;
  bottom: 15px;
  right: 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export const ContainerItens = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  ul {
    overflow: auto;
    height: 78vh;
    width: 383px;
    padding-right: 5px;

    @media (max-width: 970px) {
      height: 50vh;
      width: 90%;
      padding: 0;
    }
  }
`

export const H1 = styled.h1`
  margin-top: 10px;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  text-align: center;

  color: #000000;

  @media (max-width: 970px) {
    margin-top: 0;
  }
`

export const DivSearch = styled.div`
  display: flex;
  margin-bottom: 10px;

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
`

export const InputSearch = styled.input`
  width: 100%;
  height: 100%;

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

  margin-bottom: 18px;
  padding: 0 25px;

  background: #ffffff99;
  border-radius: 14px;

  height: 101px;
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

export const ButtonGoHome = styled.button`
  background: #ac8f27;
  color: #ffffff;

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

  @media (max-width: 970px) {
    width: 100%;
    margin-bottom: 70px;
  }
`
