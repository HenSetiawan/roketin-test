const SectionComponent = (props) => {
  return (
    <div className="col">
      <div className="info-title">
        <h2>{props.value}</h2>
        <p className="text-secondary">{props.title}</p>
      </div>
      <div className="icon-info">
        <i className={props.icon}></i>
      </div>
    </div>
  );
};

export default SectionComponent;
