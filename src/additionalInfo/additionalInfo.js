import React from "react";

class AdditionalInfo extends React.Component {
  render() {
    return (
      <div className="additionalInfo">
        <h4>{this.props.description}</h4>
      </div>
    );
  }
}

export default AdditionalInfo;
