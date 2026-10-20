import "./CampoCustomizado.css";

function CampoCustomizado(props) {
  return (
    <div className="CampoCustomizado_root">
      <span>{props.label}</span>
      <input {...props} className="CampoCustomizado_input" />
    </div>
  );
}

export default CampoCustomizado;
