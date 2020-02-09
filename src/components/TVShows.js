import React from "react";

const TVShows = props => {
  const { title, subtitle, time, type, image, duration, isUnseen } = props.data;

  return (
    <div className="block1">
      <div className="time">{time}</div>
      <div className="block2">
        <img src={image} alt={title} />
      </div>
      <div className="block3">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <div className="type">{type}</div>
        <div className="duration">
          {duration}{" "}
          {isUnseen === true ? <p className="left-border">Inédit</p> : null}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TVShows;
