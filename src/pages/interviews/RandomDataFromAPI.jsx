import { stringify } from 'postcss';
import React from 'react'
import {useState, useEffect} from "react"

const RandomDataFromAPI = () => {


    let [counter,setCounter] = useState(0);
    let [data, setData] = useState({})


    useEffect ( () => {
        const url = "https://randomuser.me/api"
        const getData = async () => {
            try {
                const response = await fetch(url)
                const answer = await response.json()
                setData(answer)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[])


    useEffect ( () => { 
        console.log(data)}
    ,[data])


    function addNumber () {
        setCounter(counter + 1)
    }

  return (
    <div>

        <div>
            <h2>First Question</h2>
            <p>Creat a counter buttom</p>

            <button onClick={  addNumber }>ADD Number</button>
            <p>{counter}</p>

        </div>

        <div>
            <h2>Seccond question</h2>
            <p>Connect to an API and display the data</p>

        </div>
      
    </div>
  )
}

export default RandomDataFromAPI
