import { members } from "../../utils/members";
import SpeakerCard from "./SpeakerCard";
import "./styles.css";

export default function Guest() {
  return (
    <div className="guest-area">
      <h1 style={{ marginLeft: "4%", marginBottom: "2%",fontSize:'40px' }}>Guest List</h1>
      <div className="speakers-grid">
        {members.map((member, index) => (
          <>
            <SpeakerCard key={index} member={member} />
           
          </>
        ))}
      </div>
    </div>
  );
}
