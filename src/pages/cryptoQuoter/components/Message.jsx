import styled from "@emotion/styled"


const Msg = styled.div`
    color: white;
    background-color: rgb(168, 34, 34);
    padding: 15px;
    font-size: 22px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    font-family: "lato, Helvetica, sans-serif";
    font-size: 1.5rem
`
const Message = ({children}) => {
  return (
    <Msg>
        {children}
    </Msg> 
  )
}

export default Message