import React, { useEffect, useState } from "react";
import Espace from "../../components/Espace/Espace";
// import Popup from "../../components/PopUp/Popup";
// import ReactLoading from "react-loading";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

function PreLoader1() {
  // const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 3000);
  }, []);

  return (
    <div className="Space">
      {!done ? (
        <Player
          autoplay
          loop
          // src="https://assets4.lottiefiles.com/datafiles/13xAsyh2EhxcP9m/data.json"
          src="https://assets4.lottiefiles.com/packages/lf20_ybq8qB.json"
          style={{
            height: "300px",
            width: "300px",
          }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      ) : (
        // <ReactLoading
        //   type={"balls"}
        //   color={"yellow"}
        //   height={100}
        //   width={100}
        // />
        <>
          <div className="Space2">
            <Espace />
          </div>
        </>
      )}
    </div>
  );
}

export default PreLoader1;
