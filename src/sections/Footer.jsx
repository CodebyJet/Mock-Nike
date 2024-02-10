import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container" >
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col" >
        <div className="flex flex-col items-start">
          <a href="/"><img src={footerLogo} alt="Logo" width={150} height={46} /></a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm" >Get shoes ready for the new term at your nearest Nike store. Find your Perfect Size in store. Get Rewards </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((social)=> (
              <div key={social.alt} className="flex justify-center items-center w-12 h-12 bg-white rounded-full" >
                <img src={social.src} alt={social.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <section>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section, index)=> (
              <div key={index}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6" >{section.title}</h4>
                <ul>
                  {section.links.map((link)=> (
                    <li key={link.name} className="mt-3 text-white font-montserrat leading-normal hover:text-slate-gray cursor-pointer">
                      <a>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start gap-2 items-center cursor-pointer font-montserrat">
          <img src={copyrightSign} alt="Copy Right Sign" width={20} height={20} className="rounded-full m-0" />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="cursor-pointer font-montserrat" >Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer