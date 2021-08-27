import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Popup from "../../components/PopUp/Popup";
// import Lottie from "react-lottie";

// import * as location from "./1055-world-locations.json";

// const defaultOptions1 = {
//   loop: true,
//   autoplay: true,
//   animationData: location.default,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice",
//   },
// };

function PreLoader2() {
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setloading(true);
      setTimeout(() => {
        setcompleted(true);
      }, 1000);
    }, 3000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            // <Lottie options={defaultOptions1} height={200} width={200} />
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/datafiles/wW9k6ALg5Mn9cIj/data.json"
              style={{
                height: "300px",
                width: "300px",
              }}
            ></Player>
          ) : (
            // <Lottie options={defaultOptions2} height={100} width={100} />
            <Player
              autoplay
              loop
              src="https://assets1.lottiefiles.com/datafiles/jXqHQIXI6oO6V47/data.json"
              style={{
                height: "200px",
                width: "200px",
              }}
            ></Player>
          )}
        </>
      ) : (
        <>
          <Popup />
        </>
      )}
    </>
  );
}

export default PreLoader2;
