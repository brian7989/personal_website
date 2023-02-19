import Header from "../../Shared/Header";
import { education_data } from "./Education.data";

const Education = () => {

  const { education, research } = education_data;

  const Education_ = () => {
    const timeline_list = education.map((e, i) => {
      return (
        <li key={i} className="timeline-item">
          <h4 className="h4 timeline-item-title">{e.school}</h4>
          <span>{e.degree}</span>
          <span style={{ color: "gray" }}>{e.years}</span>

          <p className="timeline-text">  🏆 <b>GPA: </b> {e.description.GPA} </p>
          {e.description.Honors && <p className="timeline-text"> 🔍 <b>Honors:</b> {e.description.Honors} </p>}
          {e.description.Leadership && <p className="timeline-text"> 👑 <b>Leadership:</b> {e.description.Leadership} </p>}
          {e.description.Startup && <p className="timeline-text"> 💼 <b>Startup:</b> {e.description.Startup} </p>}
          {e.description.Hackathons && <p className="timeline-text"> 🎮 <b>Hackathons:</b> {e.description.Hackathons} </p>}
          <br />
          <p className="timeline-text"> 📚 <b>Coursework:</b> </p>
          {e.description.Coursework.map((c, i) =>
            <p key={i} className="timeline-text"> {c} </p>
          )}
        </li>
      )
    })

    return (
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          {timeline_list}
        </ol>
      </section>
    )
  }

  const Research = () => {
    const timeline_list = research.map((r, i) => {
      return (
        <li key={i} className="timeline-item">
          <h4 className="h4 timeline-item-title">{r.title}</h4>
          {r.descriptions.map((d, i) => {
            return (
              <p key={i} className="timeline-text">
                📄 {d}
              </p>
            )
          })}
        </li>
      )
    })

    return (
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Research</h3>
        </div>
        <ol className="timeline-list">
          {timeline_list}
        </ol>
      </section>
    )
  }

  return (

    <article className="education" data-page="education">
      <Header title="Education"></Header>
      <Education_></Education_>
      <Research></Research>
    </article>

  )
}

export default Education;