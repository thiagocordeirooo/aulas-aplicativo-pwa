import "./BotaoCustomizado.css";

function BotaoCustomizado(props) {
  const classes = ["BotaoCustomizado_root"];

  switch (props.tipo) {
    case "primario":
      classes.push("BotaoCustomizado_primario");
      break;
    case "secundario":
      classes.push("BotaoCustomizado_secundario");
      break;
    default:
      break;
  }

  return (
    <button className={classes.join(" ")} onClick={props.aoClicar}>
      {props.children}
    </button>
  );
}

export default BotaoCustomizado;
