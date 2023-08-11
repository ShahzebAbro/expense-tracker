import React from "react";

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100%",
};

function PreLoader() {
  return (
    <div style={styles} className="preloader">
      <img src="assets/beating-hearts.gif" alt="beating hearts" />
    </div>
  );
}

export default PreLoader;
