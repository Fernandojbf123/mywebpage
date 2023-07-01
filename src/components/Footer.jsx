import ImgGmail from "/gmail-logo.png"
import ImgLinked from "/linkedin-logo.png"
import ImgTikTok from "/tiktok-logo.png"



const Footer = () => {
  return (

    <div className="footer" id="contact">
        
        <div className="flex flex-col  justify-center items-center m-auto mt-5 md:w-3/5 md:flex-row">
            
            <div className="md:w-1/2 flex flex-col justify-center">
                <h2 className="text-white text1 md:text-4xl text-2xl font-bold">Fernando Bello Fuentes</h2>
                <p className="text-white text1 md:text-2xl text-base">Cellphone: +526461979027</p>
                <p className="text-white text1 md:text-2xl text-base" >email: fernandojbf123@gmail.com</p>
            </div>

            <div className="md:w-1/2 flex justify-center">
                <div className='social-media'>
                    <a href = "mailto:fernandojbf123@gmail.com"><img src={ImgGmail} alt="emailtofernando" id="gmail"/></a>
                    <a href="https://www.linkedin.com/in/fernando-bello-6b5160250/"><img src={ImgLinked} alt="Linkedin" id="linkedin"/></a>
                    <a href="https://www.tiktok.com/@soyfernandobello"><img src={ImgTikTok} alt="Tiktok" id="tiktok"/></a>
                </div>
            </div>

        </div>
        
        {/* <div>
            <p className='text-white text1 text-sm text-center'>Improving is the key to success</p>
        </div> */}

    </div>
  )
}

export default Footer
