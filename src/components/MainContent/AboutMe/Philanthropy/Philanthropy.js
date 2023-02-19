import { useEffect, useState } from "react";
import { philanthropy_data } from "./Philanthropy.data";

const Philanthropy = () => {

    const { volunteering } = philanthropy_data;
    const initialModalState = { active: false, info: null }

    const [modalInfo, setModalInfo] = useState(initialModalState);

    const ModalContainer = () => {
        return (
            <div className={`modal-container ${modalInfo.active ? "active" : ""}`} data-modal-container>
                <div className={`overlay ${modalInfo.active ? "active" : ""}`} data-overlay></div>
                <section className="philanthropy-modal">
                    <button onClick={() => { setModalInfo(initialModalState) }} className="modal-close-btn" data-modal-close-btn>
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                            <img src={modalInfo.info?.imgUrl} alt={modalInfo.info?.organization} width="80" data-modal-img />
                        </figure>
                        <img src="./assets/images/icon-quote.svg" alt="quote icon" />
                    </div>
                    <div className="modal-content">
                        <h4 className="h3 modal-title" data-modal-title>{modalInfo.info?.organization}</h4>
                        <time dateTime={modalInfo.info?.time}>{modalInfo.info?.time}</time>
                        <div data-modal-text>
                            <p>{modalInfo.info?.description}</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    const CardList = () => {

        const card_list = volunteering.map(v =>
            <li onClick={() => {
                setModalInfo({
                    active: true,
                    info: v
                })
            }} className="philanthropy-item">
                <div className="content-card" data-philanthropy-item>
                    <figure className="philanthropy-avatar-box">
                        <img src={v.imgUrl} alt={v.organization} width="60" data-philanthropy-avatar />
                    </figure>
                    <h4 className="h4 philanthropy-item-title" data-philanthropy-title>{v.organization}</h4>
                    <div className="philanthropy-text" data-philanthropy-text>
                        <p> {v.description}</p>
                    </div>
                </div>
            </li>
        )

        return (
            <ul className="philanthropy-list has-scrollbar">
                {card_list}
            </ul>
        )
    }

    return (
        <section className="philanthropy">
            <h3 className="h3 philanthropy-title">Philanthropy</h3>
            <ModalContainer></ModalContainer>
            <CardList></CardList>
        </section>
    )
}

export default Philanthropy;

