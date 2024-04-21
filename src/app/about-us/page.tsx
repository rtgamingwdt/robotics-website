import "../about.css";
import about from "../../resources/about.json";

export default function Page() {
    return (
        <div className="main">
            <div className="about-hero-section">
                <h1>About Us</h1>
            </div>
            {about["question-sections"].map((sect, index) => {
                return (
                    <div key={index} className="question-section">
                        <h2>{sect.title}</h2>
                        <p>{sect.description}</p>
                    </div>
                )
            })}
            <div className="fill" />
        </div>
    )
}