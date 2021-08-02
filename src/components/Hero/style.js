import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

export const Section = styled.section`
  background: url(${({ image }) => image && image}) center;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: -60px;
`;
export const Container = styled.div`
  color: #fff;
  padding: 2rem;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.4);
  margin: 2rem;
  border-radius: 10px;
`;
export const useStyles = makeStyles({
  button: {
    fontSize: "clamp(0.8rem, 4vw, 1.2rem)",
    padding: "0.8rem 2rem",
    color: "#000",
    background: "#ffb347 linear-gradient(to right, #ffcc33, #ffb347)",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
    outline: "none",
  },
  typographyStyle: {
    fontSize: "clamp(2rem, 8vw, 5rem)",
    marginBottom: "0.5rem",
  },
  p: {
    fontSize: "clamp(1rem, 6vw, 2.5rem)",
    marginBottom: "1rem",
  },
});
