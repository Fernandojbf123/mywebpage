import "../styles/WackHeader.css"
import ImgHero from "../files/background.png"


const Heading = ({score, totalMolesUp, setDificulty, setGameStart, timeLeft}) => {

    function handleStart () {
        setGameStart(true)
    }

    function handleChange (e) {
        setDificulty(e.target.value)
    }


  return (

    <div className='wackheader'>

        <div className="wackheader-left">
            <button className="wackstartBtn" id="start" onClick={handleStart}>Start</button>
            <label htmlFor="">Level</label>
            <select onChange={e => handleChange(e)}>
                <option value={1}>easy</option>
                <option value={2}>normal</option>
                <option value={3}>hard</option>
                <option value={4}>pro</option>
            </select>
        </div>

        <div className="wackheader-center">
            <h1>WACK A MOLE</h1>
            <img src={ImgHero} alt="wack a mole game logo" />
            
        </div>

        <div className="wackheader-right">
            <p>Score: <span>{score} / {totalMolesUp}</span></p>
            <p>Time: <span>{timeLeft}</span> segs</p>
        </div>
          
    </div>
  )
}

export default Heading