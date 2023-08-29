import { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: white;
    display: block;
    font-family: "lato, Helvetica, sans-serif";
    font-size: 1.5rem;
    font-weight: 700;
    margin: 15px 0;
`

const Select = styled.select`
    width: 100%;
    padding: 14px;
    border-radius: 10px;
    text-align: center;
    font-family: "lato, Helvetica, sans-serif";
    font-size: 1.5rem;
    font-weight: 700;
`


const useSelectCurrenctOrCrypto = ( label, options ) => {

    const [state, setState] = useState('');


      const SelectCurrencyOrCrypto = () => (
        <>
            <Label>{label}</Label>

            <Select
                value={state}
                onChange={e => setState(e.target.value) }
            >

                <option className="text3" value=''>-- Select a currency --</option>
                
                {options.map( ioption => (
                <option 
                    className="text3"
                    key={ioption.id}
                    value={ioption.id}   
                >{ioption.name}
                </option>
                
                ))}

            </Select>

        </>
    )

    return [ state , SelectCurrencyOrCrypto ];
 
}
export default useSelectCurrenctOrCrypto


           