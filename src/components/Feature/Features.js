import './Features.css';
import Card from '../../UI/Card'

function Features() {
    return (
        <section className="features-section">
            <div className="features-container">
                <h2 className="feature-heading">Nachhaltig. Modern. Transparent.</h2>
                <p>Wie Strom schon immer hätte sein sollen!</p>
                <div className="feature-cards flex">
                    <Card className="feature-card">
                        <img src="https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60d34510bab693534af71039_Group.svg" alt="Feature" className="feature-icon" />
                        <h6 className="feature-heading">Nachhaltig</h6>
                        <p>Da uns die Welt am Herzen liegt, haben wir es uns zur Aufgabe gemacht, die Energiebranche zu revolutionieren. </p>
                    </Card>
                    <Card className="feature-card">
                        <img src="https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60d34511d96be5d53f0a2854_Vector.svg" alt="Feature" className="feature-icon" />
                        <h6 className="feature-heading">Modern</h6>
                        <p>Da für uns Energie und Fortschritt kein Widerspruch ist, versprechen wir statt Papierkram 100% digitalen Strom. </p>
                    </Card>
                    <Card className="feature-card">
                        <img src="https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60d345112a354d316deaea59_Group-1.svg" alt="Feature" className="feature-icon" />
                        <h6 className="feature-heading">Transparent</h6>
                        <p>Da leere Versprechen nicht mit unseren Grundsätzen übereinstimmen, setzen wir auf offene und faire Verträge. </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default Features;