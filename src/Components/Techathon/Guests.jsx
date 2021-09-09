import { members } from "../../utils/members";
import SpeakerCard from "./SpeakerCard";
import "./styles.css";

export default function Guest() {
  return (
    <section>
      <h1 style={{ marginLeft: "3%" }}>Guest List</h1>
      <div className="row sponsor-images">
        {members.map((member, index) => (
          <SpeakerCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
}
