import React, { useState, useEffect } from "react";
import DesignCard from "../components/designCard";
import Axios from "axios";

const GenerativeDesign = () => {
  /*
  const [designs, setDesigns] = useState([
    {
      url:
        "https://zaldanaraul.s3.ca-central-1.amazonaws.com/final_5f3d525472fd8200151f788d_690551.mp4",
    },
    {
      url:
        "https://zaldanaraul.s3.ca-central-1.amazonaws.com/final_5f3d6f1fc8a9110015a7f193_206578.mp4",
    },
    {
      url:
        "https://zaldanaraul.s3.ca-central-1.amazonaws.com/final_5f3d77875759d200159d425f_164183.mp4",
    },
    {
      url:
        "https://zaldanaraul.s3.ca-central-1.amazonaws.com/final_5f3d7962df7ba0001595d60f_230711.mp4",
    },
  ]);
  */

  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    const getDesigns = async () => {
      try {
        var response = await Axios.get(
          "https://0ctuwq7814.execute-api.ca-central-1.amazonaws.com/dev/designs"
        );
        setDesigns(
          response.data.sort((a, b) => {
            return a.id - b.id;
          })
        );
      } catch (error) {
        console.error(error);
      }
    };

    getDesigns();
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {designs.map((design) => {
            return (
              <div
                className="col-md-3 col-sm-4 col-6 p-0 pr-3 pb-3"
                key={design.id}
              >
                <DesignCard design={design} key={design.id}></DesignCard>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default GenerativeDesign;
