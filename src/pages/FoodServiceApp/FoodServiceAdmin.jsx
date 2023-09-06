
const FoodServiceAdmin = () => {

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    
  return (
    <div>
        <iframe
            width={windowWidth}
            height={windowHeight}
            src="https://foodserviceapp-production.up.railway.app/admin">
        </iframe>
    </div>
  )
}

export default FoodServiceAdmin


