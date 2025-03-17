import "./buttonOutlined.css";

const buttonOutlined = ({children, onClick}) => {
  return(
    <button
      className="btn-outlined"
      onClick={() => (window.location.href = "#contato")}
    >
      {children}
    </button>
  );
}

export {buttonOutlined};