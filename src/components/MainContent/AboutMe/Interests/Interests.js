import { IonIcon } from "react-ion-icon";
import { interests_data } from "./Interests.data";

const Interests = () => {
    const { interests } = interests_data;
    return (
        <section className="service">

            <h3 className="h3 service-title">My Interests</h3>

            <ul className="service-list">

                {interests.map(i =>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <div className="icon-box">
                                <IonIcon name={i.logo}></IonIcon>
                            </div>
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">{i.title}</h4>

                            <p className="service-item-text">
                                {i.description}
                            </p>
                        </div>
                    </li>
                )}

            </ul>

        </section>
    )
}

export default Interests;