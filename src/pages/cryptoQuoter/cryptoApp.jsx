import React, { useState, useEffect } from "react"
import Form from "./components/Form"

import "./cryptoApp.css"

import styled from "@emotion/styled"
import ImgCryto from "/cryptofiles/ImgCrypto.png"
import Quoteresult from "./components/Quoteresult"
import Spinner from "./components/Spinner"



const Container = styled.div`
  max-width:900px;
  margin: 0 auto;
  width: 90%;
    
  @media (min-width: 992px) {
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Image =styled.img`
  max-width: 400px;
  width: 80%;
  padding-top: 50px;
  margin: 0 auto;
  display:block;
`

const Heading = styled.h1`
  color: #FFF;
  font-weight: 700px;
  font-family: "lato, Helvetica, sans-serif";
  font-size: 2.3rem;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 50px;

  &::after{
    content:'';
    width:100px;
    height: 6px;
    background-color:rgb(20,20,80);
    display:block;
    margin: 10px auto 0 auto;
  }
`

function CryptoApp() {

  const [crytoData, setCryptoData] = useState({}); //Where the data of the crypto is stored after request.
  const [currencyAndCrypto, setCurrencyAndCripto] = useState({});
  const [loading, setLoading] = useState (false);

  useEffect ( () => {
    if (Object.keys(currencyAndCrypto).length>0){
      
      const {currency, crypto} = currencyAndCrypto;  
      const requestAPI = async () => {
        setLoading(true)
        setCryptoData({});
        const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`
        const answer = await fetch(url);
        const result = await answer.json();

        setCryptoData(result.DISPLAY[crypto][currency])
        setLoading(false)
      }
      requestAPI();
    }
  },[currencyAndCrypto])
  

  return (

<div className="cryptobody" >
    <Container>
    <Image
        src={ImgCryto} 
        alt="img-cryto" 
      />

      <div>
        <Heading>Quote Cryto currency in real time</Heading>
        
        <Form 
          setCurrencyAndCripto={setCurrencyAndCripto}
        />



        {loading && 
          <Spinner />
        }
        
        {Object.keys(crytoData).length>0 
        && 
        <Quoteresult 
          crytoData = {crytoData}
        />}
        

      </div>
    </Container>
</div>
  )
}

export default CryptoApp