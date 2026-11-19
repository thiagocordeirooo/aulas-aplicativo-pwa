import "./CampoCustomizado.css";

function CampoCustomizado(props) {
  return (
    <div className="CampoCustomizado_root">
      <span>{props.label}</span>
      {props.rows && <textarea {...props} className="CampoCustomizado_input" />}
      {!props.rows && <input {...props} className="CampoCustomizado_input" />}
    </div>
  );
}

export default CampoCustomizado;
