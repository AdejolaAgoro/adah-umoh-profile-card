import Skill from "./skill";

export default function Skills() {
  return (
    <ul className="profile-skills">
        <Skill name="HTML" icon="😊"/>
        <Skill name="CSS" icon="💕"/>
        <Skill name="JavaScript" icon="❤️"/>
        <Skill name="Figma" icon="👌"/>
      {/* <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Figma</li> */}
    </ul>
  );
}
