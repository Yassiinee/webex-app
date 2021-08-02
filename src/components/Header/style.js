import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  height: 60px;
  background: transparent;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Container = styled.div`
  color: #fff;
  padding: 2rem;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.4);
  margin: 2rem;
  border-radius: 10px;
`;
export const Logo = styled(Link)`
  color: #fff;
  padding-left: 1rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
`;

export const NavItems = styled.div`
  position: center;
  color: #fff;
`;

export const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 1rem;
`;
export const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
