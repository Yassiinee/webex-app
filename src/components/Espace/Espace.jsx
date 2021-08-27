import React, { useEffect } from 'react'
import {Container,Logo,NavbarLink,Navbar,NavItems,useStyles} from "./style";
import ReactiveButton from "reactive-button";
// import Webex from 'webex';
// import { init as initWebex } from 'webex';

function Espace() {
    const classes = useStyles()
    useEffect(()=>{
        let redirect_uri = `${window.location.protocol}//${window.location.host}`;

        if (window.location.pathname) {
        redirect_uri += window.location.pathname;
        }
        const webex = window.webex = window.Webex.init({
            config: {
              credentials: {
                
                client_id: 'Cba63c3b512c8b118ac0dc2c104c6a54d694003eed051a2452d92f138022365a5',
                //redirect_uri:"http://localhost:3000/space",
                redirect_uri:"http://localhost:3000/dashboard",
                //redirect_uri,
                scope: 'spark:all spark:kms'
              }
            }
          });
        //console.log(window.Webex)
        //console.log(window.location)
    },[])
    useEffect(()=>{
      function isAuthenticated(){
        return window.webex.canAuthorize
      }
      try { 
        isAuthenticated()
      }catch(e){
        console.log(e);
      }
    },[])
    
    function authentication() {
        window.webex.authorization.initiateLogin();
    }
    function getStatus() {
        const userInfo = {roomsInitialized: false};
        window.webex.rooms.listWithReadStatus(30)
        .then((rooms) => console.log(rooms))
        .catch((e) => {
          console.error(`rooms.listWithReadStatus failed: ${e}`);
        });
      window.webex.people.get('me').then((me) => {
        userInfo.me = me;
        console.log(userInfo.me);
        console.log(userInfo.me.displayName);
      });
    }
    return (
        <>
        <Navbar>
        <Logo >{"Welcome"}</Logo>
            <NavItems>
                <Container>
                <NavbarLink to="/">Home</NavbarLink>
                <NavbarLink to="/about">About</NavbarLink>
                <NavbarLink to="/services">Services</NavbarLink>
                <NavbarLink to="/space">Space</NavbarLink>
                </Container>        
            </NavItems>      
        </Navbar>
        <div className={classes.title}>
        <h1 >Explore App Hub</h1>
        <ReactiveButton
        onClick={authentication}
        color={"teal"}
        idleText={"Authenticate"}
        type={"button"}
        style={{ borderRadius: "3px" }}
        outline={true}
        shadow={false}
        rounded={true}
        size={"large"}
        block={true}
        disabled={false}
        buttonRef={null}
        width={200}
        height={50}
        animation={true}
        />
        <ReactiveButton
        onClick={getStatus}
        color={"teal"}
        idleText={"Status"}
        type={"button"}
        />
        </div>
        </>
    )
}

export default Espace
