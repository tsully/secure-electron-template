import React from "react";
import Button from "@material-ui/core/Button";

const Section = () => {
  const name: string = "Tyler";
  return (
    <div>
      <p>This is the section!!!! YOOO {name}!!!</p>
      <Button variant="contained" color="primary">
        Hello World!
      </Button>
    </div>
  );
};

export default Section;
