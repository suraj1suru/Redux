import React, { useState } from "react";
import { connect } from "react-redux";

function Bat(props) {
  //   const [bats, setBats] = useState(0);

  return (
    <div>
      <h2>Bats : {props.bats2}</h2>

      {/* <button onClick={() => setBats(bats - 1)}>Buy Bat</button> */}
      <button onClick={props.buyBat}>Buy Bat</button>
    </div>
  );
}

//mapStateToProps -> it gets its value from reducer function,
//then it returns an object to the component (as Props)
//in which it defined with the help of connect.
//then component uses that object

const mapStateToProps = (state) => {
  return {
    bats2: state.bats1,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyBat: () => {
      dispatch({ type: "BUY_BAT" });
    },
  };
};

//connect is hof
export default connect(mapStateToProps, mapDispatchToProps)(Bat);
