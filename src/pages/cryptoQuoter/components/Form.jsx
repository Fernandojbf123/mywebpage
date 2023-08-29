import {useEffect, useState} from 'react'
import styled from "@emotion/styled"
import useSelectCurrenctOrCrypto from '../hooks/useSelectCurrenctOrCrypto'
import { currencies } from '../data/currencies'
import Message from './Message'


const InputSubmit = styled.input`
    width: 100%;
    background-color: rgb(10,10,250);
    border-radius: 8px;
    border: none;
    display: block;
    color: white;
    padding: 10px;
    font-weight: 700;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-top: 10px;
    margin-bottom: 30px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover{
        
        background-color: rgb(125, 125, 173);
    }
`

const Form = ({setCurrencyAndCripto}) => {
  
    const [message, setMessage] = useState('');
    const [error, setError]     = useState(false);

    //This is where the result of the API request stores the data
    const [cryptos, setCryptos] = useState([]);

    // PERSONAL HOOK THAT MAKES THE OPTION LIST
    const [currency, SelectCurrency] = useSelectCurrenctOrCrypto('Choose your currency', currencies);
    const [crypto, SelectCrypto] = useSelectCurrenctOrCrypto('Choose your crypto', cryptos);

     
    useEffect ( () => {
        
        const requestAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const answer = await fetch(url)
            const result = await answer.json();
            
            const arrayCryptos = result.Data.map ( icrypto => {
                const objCrypto = {
                    id:   icrypto.CoinInfo.Name,
                    name: icrypto.CoinInfo.FullName,
                }
                return objCrypto
            })
            
            setCryptos(arrayCryptos)
        }
        requestAPI();
    },[])

    
    // Form validation
    const handleSubmit = (e) => {
        e.preventDefault();

        if ([crypto, currency].includes('')) {
            setMessage('All fields are mandatory');
            setError(true)
            return;
        }
        setMessage('');
        setError(false);

        setCurrencyAndCripto({
            currency,
            crypto,
        })
    }


    return (
        <>
            {error && <Message>{message}</Message>}      

            <form
                onSubmit={handleSubmit}
            >
            
            <SelectCurrency />

            <SelectCrypto />
            

            <InputSubmit 
                type="submit" 
                value="Quote Crypto"
                />
            </form>
        </>
    )
}

export default Form
