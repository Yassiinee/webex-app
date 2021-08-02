import React, {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState
  } from "react";
  import "./styles.css";
  import { Button } from '@material-ui/core';
  import Typography from '@material-ui/core/Typography';
  import { makeStyles } from "@material-ui/core";
  import { motion, AnimatePresence } from "framer-motion";

const useStyles = makeStyles({
    button: {
      fontSize: "clamp(0.8rem, 4vw, 1.2rem)",
      padding: "0.8rem 2rem",
      color: "#000",
      background: "#ffb347 linear-gradient(to right, #ffcc33, #ffb347)",
      border: "none",
      borderRadius: 4,
      cursor: "pointer",
      outline: "none",
  }});

  export default function Popup() {
    const modalRef = useRef();
    const classes = useStyles()
    const action = () => {
      modalRef.current.open()
    }
    return (
      <>
        {/* <button onClick={action}>Open Modal</button> */}
        <Button className={classes.button} onClick={action} >Learn more</Button>
        <Modal ref={modalRef}>
          <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
          Cloud calling made easy
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Keep colleagues and customers close with a complete cloud phone system built to make and receive business calls on any device.            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Meet from anywhere.
            </Typography>
        </Modal>
      </>
    );
  }
  
  const Modal = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);
  
    useImperativeHandle(ref, () => {
      return {
        open: () => setOpen(true),
        close: () => setOpen(false)
      };
    });
  
    return (
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              }}
              exit={{
                opacity: 0,
                transition: {
                  delay: 0.3
                }
              }}
              onClick={() => setOpen(false)}
              className="modal-backdrop"
            />
            <motion.div
              initial={{
                scale: 0
              }}
              animate={{
                scale: 1,
                transition: {
                  duration: 0.3
                }
              }}
              exit={{
                scale: 0,
                transition: {
                  delay: 0.3
                }
              }}
              className="modal-content-wrapper"
            >
              <motion.div
                className="modal-content"
                initial={{
                  x: 100,
                  opacity: 0
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.3
                  }
                }}
                exit={{
                  x: 100,
                  opacity: 0,
                  transition: {
                    duration: 0.3
                  }
                }}
              >
                {props.children}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  });
  