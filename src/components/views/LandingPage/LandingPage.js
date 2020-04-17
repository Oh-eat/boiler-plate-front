import React, { useState, useEffect } from "react";
import axios from "axios";

function LandingPage(props) {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    axios
      .get("/api/hello_world")
      .then((response) => setResponse(response.data));
  }, []);

  return <div>{response || "Landing Page"}</div>;
}

export default LandingPage;
