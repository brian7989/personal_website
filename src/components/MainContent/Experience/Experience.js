import Header from "../../Shared/Header";
import { experience_data } from "./Experience.data";

const Experience = () => {
    const { experience, skills } = experience_data;

    const Experience = () => {
        const experience_list = experience.map((e, i) =>
            <li key={i} className="timeline-item">
                <h4 className="h4 timeline-item-title">{e.company}</h4>
                <span>{e.role} </span>
                <span style={{ color: "gray" }}>{e.dates}</span>
                {e.description.map((d, i) => {
                    return (
                        <p key={i} className="timeline-text">
                            💻 {d}
                        </p>
                    )
                })}
            </li>
        )
        return (
            <section className="timeline">

                {/* TIMELINE HEADER */}
                <div className="title-wrapper">
                    <div className="icon-box">
                        <ion-icon name="book-outline"></ion-icon>
                    </div>
                    <h3 className="h3">Experience</h3>
                </div>

                {/* TIMELINE CONTENT */}
                <ol className="timeline-list">
                    {experience_list}
                </ol>
            </section>
        )
    }

    const Skills = () => {
        const skill_list = skills.map((s, i) =>
            <li key={i} className="skills-item">
                <div className="title-wrapper">
                    <h5 className="h5">{s.title}</h5>
                    <data value={s.percentage}>{s.percentage}%</data>
                </div>
                <div className="skill-progress-bg">
                    <div className="skill-progress-fill" style={{ width: `${s.percentage}%` }}></div>
                </div>
            </li>
        )

        return (
            // SKILLS PROGRESS BARS
            <section className="skill">
                <h3 className="h3 skills-title">My skills</h3>
                <ul className="skills-list content-card">
                    {skill_list}
                </ul>
            </section>
        )
    }

    return (

        <article className="experience" data-page="experience">

            <Header title="Experience" ></Header>
            <Experience></Experience>
            <Skills></Skills>

        </article>
    )
}

export default Experience;