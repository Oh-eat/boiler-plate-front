import React from "react";
import axios from "axios";
import styled from "styled-components";

const LandingPageBlock = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
  }
`;

function LandingPage(props) {
  const handleLogoutClick = () => {
    axios.get("/api/users/logout").then((response) => {
      console.log(response);
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("ERROR");
      }
    });
  };
  // const [response, setResponse] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("/api/hello_world")
  //     .then((response) => setResponse(response.data));
  // }, []);

  return (
    <LandingPageBlock>
      Landing Page<button onClick={handleLogoutClick}>로그아웃</button>
    </LandingPageBlock>
  );
}

export default LandingPage;
