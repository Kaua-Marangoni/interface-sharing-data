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
export const Image = styled.img`
  width: 550px;

  @media (max-width: 970px) {
    width: 100%;
    max-width: 470px;
  }
`

export const P = styled.p`
  position: absolute;
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
  width: 342px;
  display: flex;
  flex-direction: column;

  .input {
    width: 100%;
    height: 58px;

    padding-left: 15px;
    margin-bottom: 25px;

    background: #ffffff99;
    border-radius: 14px;
    border: none;
    outline: none;

    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;

    color: #000000;

    &::placeholder {
      color: #626262;
    }
  }

  @media (max-width: 370px) {
    width: 90%;
  }
`

export const H1 = styled.h1`
  margin-bottom: 50px;

  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  text-align: center;

  color: #000000;
`

export const InputLabel = styled.p`
  margin-left: 15px;

  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  letter-spacing: -0.408px;

  color: #000000;
`

export const Input = styled.input`
  width: 100%;
  height: 58px;

  padding-left: 15px;
  margin-bottom: 25px;

  background: #ffffff99;
  border-radius: 14px;
  border: none;
  outline: none;

  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #000000;

  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  &::placeholder {
    color: #626262;
  }
`

export const Button = styled.button`
  background: #27ac59;
  color: #ffffff;

  margin-top: 30px;

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

export const ButtonGoNumbers = styled.button`
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
