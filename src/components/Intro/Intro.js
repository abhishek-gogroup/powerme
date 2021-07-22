import './Intro.css'
import IntroForm from './IntroForm'

function Intro() {
    return (
        <div className="intro-container flex">
            <div className="intro-container__content-left">
                <h1>Regionaler Ökostrom zum <span className="primary-color-light">Bestpreis</span>.</h1>
                <p>Hier sollte der Firmen Slogan stehen.</p>
                <IntroForm />
            </div>
            <div className="intro-container__content-right flex">
                <div className="intro-container__content-right__item">
                    <div className="circle">
                        <div className="circle__content">
                            Bis zu <br /><span className="circle__content--span">122€</span>
                            p.J.<br />sparen
                        </div>
                    </div>
                </div>
                <div className="intro-container__content-right__item">
                    <ul>
                        <li className="list-item flex">
                            <img src="https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60deb6eb5a3aacd3b8b1a26a_Zenstrom_icon.png" loading="lazy" height="35" sizes="(max-width: 479px) 40px, 35px" srcSet="https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60deb6eb5a3aacd3b8b1a26a_Zenstrom_icon-p-500.png 500w, https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60deb6eb5a3aacd3b8b1a26a_Zenstrom_icon-p-800.png 800w, https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60deb6eb5a3aacd3b8b1a26a_Zenstrom_icon.png 1080w" alt="icon" />
                            Nachhaltig & Vegan
                        </li>
                        <li className="list-item flex">
                            <img src="https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60deb6eb5a3aacd3b8b1a26a_Zenstrom_icon.png" loading="lazy" height="35" sizes="(max-width: 479px) 40px, 35px" srcSet="https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60deb6eb5a3aacd3b8b1a26a_Zenstrom_icon-p-500.png 500w, https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60deb6eb5a3aacd3b8b1a26a_Zenstrom_icon-p-800.png 800w, https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60deb6eb5a3aacd3b8b1a26a_Zenstrom_icon.png 1080w" alt="icon" />
                            Schneller Wechsel
                        </li>
                        <li className="list-item flex">
                            <img src="https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60deb6eb5a3aacd3b8b1a26a_Zenstrom_icon.png" loading="lazy" height="35" sizes="(max-width: 479px) 40px, 35px" srcSet="https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60deb6eb5a3aacd3b8b1a26a_Zenstrom_icon-p-500.png 500w, https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60deb6eb5a3aacd3b8b1a26a_Zenstrom_icon-p-800.png 800w, https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60deb6eb5a3aacd3b8b1a26a_Zenstrom_icon.png 1080w" alt="icon" />
                            Transparent
                        </li>
                        <li className="list-item flex">
                            <img src="https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60deb6eb5a3aacd3b8b1a26a_Zenstrom_icon.png" loading="lazy" height="35" sizes="(max-width: 479px) 40px, 35px" srcSet="https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60deb6eb5a3aacd3b8b1a26a_Zenstrom_icon-p-500.png 500w, https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60deb6eb5a3aacd3b8b1a26a_Zenstrom_icon-p-800.png 800w, https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60deb6eb5a3aacd3b8b1a26a_Zenstrom_icon.png 1080w" alt="icon" />
                            Kompromisslos
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default Intro;