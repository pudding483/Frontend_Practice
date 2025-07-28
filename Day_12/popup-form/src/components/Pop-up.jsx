import "./Pop-up.css";

function PopupWindow({ trigger, setTrigger }) {
  return trigger ? (
    <div className="popup-container">
      <div className="popup-window">
        <h2>This is a pop-up window</h2>

        <button className="close-button" onClick={() => setTrigger(false)}>
          X
        </button>

        <p className="message">
          Nothing here,
          <br />
          just a pop-up window
        </p>

        <div className="window-footer">
          <button
            className="rectangle-button cancel-button"
            onClick={() => setTrigger(false)}
          >
            Cancel (取消)
          </button>
          <button
            className="rectangle-button confirm-button"
            onClick={() => setTrigger(false)}
          >
            Confirm (確認)
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export { PopupWindow };
