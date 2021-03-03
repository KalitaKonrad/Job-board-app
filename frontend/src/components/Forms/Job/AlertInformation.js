import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

const AlertInformation = (props) => {
  const [show, setShow] = useState(true);
  const { variant, heading, body } = props;

  if (show) {
    return (
      <Alert variant={variant} onClose={() => setShow(false)}>
        <Alert.Heading>{heading}</Alert.Heading>
        <p>{body}</p>
      </Alert>
    );
  }
};

export default AlertInformation;
