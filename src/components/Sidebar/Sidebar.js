import { useRef } from "react";
import { sidebar_data } from "./Sidebar.data";
import { IonIcon } from "react-ion-icon";


const SideBar = () => {

  const { name, seekingJob, contact_info, socials } = sidebar_data

  const elementRef = useRef(null);

  const handleClick = () => {
    elementRef.current.classList.toggle('active');
  }

  const Dropdown = () => {
    return (
      <button className="info_more-btn" data-sidebar-btn onClick={handleClick}>
        <span>Show Contacts</span>
        <IonIcon name="chevron-down"></IonIcon>
      </button>
    )
  }

  const Header = () => {
    return (
      <div className="sidebar-info">

        {/* AVATAR PICTURE */}
        <figure className="avatar-box">
          <img src="assets/images/my-avatar.png" alt={name} width="80" />
        </figure>

        {/* HEADER CONTENT */}
        <div className="info-content">
          <h1 className="name" title={name}>{name}</h1>
          {seekingJob ?
            <p className="title" style={{color: "greenyellow" }}> OPEN TO WORK</p> :
            <p className="title" style={{color: "yellow" }}> CURRENTLY EMPLOYED </p>
          }
        </div>

        {/* DROPDOWN BUTTON */}
        <Dropdown></Dropdown>
      </div>
    )
  }

  const SocialList = () => {

    // SOCIAL ICONS
    const social_list = socials.map((s, i) =>
      <li key={i} className="social-item">
        <a href={s.link} target={"_blank"} className="social-link">
          <IonIcon name={`logo-${s.type}`}></IonIcon>
        </a>
      </li>
    )
    return (
      <ul className="social-list">
        {social_list}
      </ul>
    )
  }

  const ContactList = () => {
    // CONTACT INFO LIST
    const contact_list = contact_info.map((p, i) =>
      <li key={i} className="contact-item">
        <div className="icon-box">
          <IonIcon name={p.logo}></IonIcon>
        </div>
        <div className="contact-info">
          <p className="contact-title">{p.title}</p>
          <a href={p.href} className="contact-link">{p.content}</a>
        </div>
      </li>
    )
    return (
      <ul className="contacts-list">
        {contact_list}
      </ul>
    )
  }

  return (
    <aside className="sidebar" data-sidebar ref={elementRef}>
      <Header></Header>
      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ContactList></ContactList>
        <div className="separator"></div>
        <SocialList></SocialList>
      </div>
    </aside>
  )
}

export default SideBar;