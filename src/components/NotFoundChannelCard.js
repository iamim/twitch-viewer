import React from 'react';

const style = {color: "red"};

export const NotFoundChannelCard = (props) => {
  return (
    <div className="not-found-channel" style={style}>
      <p>{props.name}</p>
    </div>
  );
};

NotFoundChannelCard.propTypes = {
  name: React.PropTypes.string.isRequired
};