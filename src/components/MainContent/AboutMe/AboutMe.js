import Header from "../../Shared/Header";
import AboutText from "./AboutText/AboutText";
import Clients from "./Clients_/Clients";
import Interests from "./Interests/Interests";
import Philanthropy from "./Philanthropy/Philanthropy";

const AboutMe = () => {
  return (

    <article className="about active" data-page="about">

      <Header title={"About Me"}></Header>
      <AboutText></AboutText>
      <Interests></Interests>
      <Philanthropy></Philanthropy>
      {/* <Clients></Clients> */}
    </article>

  )
}

export default AboutMe;