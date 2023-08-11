import { Component } from "react";
import { UserClass } from "./UserClass";
import { UserContext } from "../utils/UserContext";
// import { Users } from "./Users";
export class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent component constructor");
  }
  componentDidMount() {
    // console.log("parents componentDidMount");
  }
  render() {
    // console.log("Parent render");
    return (
      <div className="about p-5">
        <div className="font-bold">
          loggedInUser :
          <UserContext.Consumer>
            {({ loggedInUser }) => <h2>{loggedInUser}</h2>}
          </UserContext.Consumer>
        </div>
        <h1>This is About Page</h1>
        <p>Welcome to About Page!!</p>
        <h1>User informations</h1>
        {/* <Users name="Varsha"/> */}
        <UserClass name="First" location="pune" />
      </div>
    );
  }
}

export default About;
