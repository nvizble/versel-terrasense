import "./buttonFilled.css";

const buttonFilled = ({children, onClick}) => {
  return(
    <button
      className="btn-filled"
      onClick={() => (window.location.href = "#contato")}
    >
      {children}
    </button>
  );
}

export {buttonFilled};