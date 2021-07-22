import './IntroForm.css';

function IntroForm() {
    return (
        <div className="intro-form-container">
            <form>
                <label htmlFor="address">Deine Adresse</label>
                <div>
                    <div className="input-wrapper ">
                        <img src="https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60c9f96c7d077d380e6d0d0e_MapPin.svg" loading="lazy" alt="Map Icon" className="form-icon" />
                        <input type="text" className="input-width" maxLength="256" name="address" placeholder="Straße und Hausnummer" />
                    </div>
                </div>
                <br />
                <label htmlFor="address">Dein Verbrauch</label>
                <div>
                    <div className="input-wrapper ">
                        <img src="https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60c9fc70c8cd398690a6e93c_Lightning.svg" loading="lazy" alt="Lightning Icon" className="form-icon" />
                        <select className="input-width" placeholder="Verbrauch" name="cars" id="cars">
                            <option >1000 kWh</option>
                            <option >1500 kWh</option>
                            <option >2000 kWh</option>
                            <option >2500 kWh</option>
                        </select>
                    </div>
                </div>
                <button className="submit-button btn" type="submit">
                    Tarif berechnen
                </button>
            </form>
        </div>
    );
}

export default IntroForm;