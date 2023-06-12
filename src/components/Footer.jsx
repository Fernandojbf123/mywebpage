import ImgGmail from "/gmail-logo.png"
import ImgLinked from "/linkedin-logo.png"
import ImgTikTok from "/tiktok-logo.png"



const Footer = () => {
  return (

    <div className="footer" id="contact">
        
        <div className="md:w-1/2 md:h-full w-5/6 h-auto flex md:flex-row justify-between items-center m-auto
                        flex-col mt-5">
            
            <div className="md:w-4/6 h-1/2">
                <h2 className="text-white text1 md:text-4xl text-2xl font-bold">Fernando Bello Fuentes</h2>
                <p className="text-white text1 md:text-2xl text-base">Cellphone: +526461979027</p>
                <p className="text-white text1 md:text-2xl text-base" >email: fernandojbf123@gmail.com</p>
            </div>

            <div className="md:w-2/6 flex flex-col md:h-full h-1/2">
                <div className='social-media'>
                    <a href = "mailto:fernandojbf123@gmail.com"><img src={ImgGmail} alt="emailtofernando" id="gmail"/></a>
                    <a href="https://www.linkedin.com/in/fernando-bello-6b5160250/"><img src={ImgLinked} alt="Linkedin" id="linkedin"/></a>
                    <a href="https://www.tiktok.com/@soyfernandobello"><img src={ImgTikTok} alt="Tiktok" id="tiktok"/></a>
                </div>
                <p className='text-white text1 text-sm text-center'>This webpage was built using React</p>
            </div>
        
        </div>

    </div>
  )
}

export default Footer
