import styled from "@emotion/styled";

const ShowResult = styled.div`
    background-color: white;
    border-radius: 10px;
    border: none;
    margin-top: 20px;
    padding: 15px;
`

const Text = styled.p`
    color: black;
    font-size: 20px;
    font-weight: 900;
    margin: 10px auto 0px auto;
    font-family: "lato, Helvetica, sans-serif";
    font-size: 1.5rem
`

const Val = styled.span`
    color: rgb(38, 34, 230);
    font-family: "lato, Helvetica, sans-serif";
    font-size: 1.5rem
`

const Image =styled.img`
  width: 150px;
  aspect-ratio: 1/1;
  margin: 0 auto;
  display:block;
`

const Quoteresult = ({crytoData}) => {
    
    const {PRICE,LOWDAY, HIGHDAY, LASTUPDATE, IMAGEURL}  = crytoData;

    return (
    <ShowResult>
      <Image 
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="img-cryto" 
      />
      <Text>Crypto price:{''} <Val>{PRICE}</Val></Text>
      <Text>Crypto Lowest day value:{''} <Val>{LOWDAY}</Val></Text>
      <Text>Crypto Highest day value:{''} <Val>{HIGHDAY}</Val></Text>
      <Text>Last update:{''} <Val>{LASTUPDATE}</Val></Text>
    </ShowResult>
  )
}

export default Quoteresult
