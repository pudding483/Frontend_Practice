import "./card.css";

function Card() {
  return (
    <div className="card">
      <img
        src="https://images.steamusercontent.com/ugc/2053120390739748740/1FCFE35F00A1F10D92B668B479187711FF0FEC7F/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        style={{ maxWidth: "50%", height: "auto" }}
      />
      {/* First curly braces represent it is a JS expression */}
      {/* Second one represent it is a object  */}

      <h3 className="text-lg font-bold">AndyShen 483</h3>
      <p>前端新手 Frontend Learner</p>

      <hr />

      <p className="intro">
        我正在學習 HTML & CSS，
        <br />
        希望未來能夠進入網頁開發的領域！
      </p>
    </div>
  );
}

// export function Card; // Cannot export like this
export { Card }; // Should use named export
