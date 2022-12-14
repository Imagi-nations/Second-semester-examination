import React from "react";
import useParticipantId from "../Hooks/useParticipantId";

function FormHandler() {
  const participantNumber = useParticipantId(0);
  const [value,setValue, participantId] = participantNumber;
  return (
    <>
      <h4 className="header"> Register on My React App</h4>
      <h5 className="header"> You are Particpant number '[{value}]'</h5>
      <button className="random-btn" onClick={participantId}>
        Click To Reveal Your Participant Number implemented with custom hook
      </button>
      <form className="form-container">
        <input type="text" placeholder="Enter Your Name"></input>
        <input type="email" placeholder="Enter Your Email"></input>
        <input type="password" placeholder="Enter Your Password"></input>
        <input type="int" placeholder="Enter Participant Number "></input>
    {setValue}{}{}{}
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
}

export default FormHandler;
