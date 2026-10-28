import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => this.setState({ robots: users }));
  }
  onSearchChange = (e) => {
    console.log(e.target.value);
    this.setState({ searchfield: e.target.value });
  };
  render() {
    const { robots, searchfield } = this.state;
    const changedFriends = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Homies4Life</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={changedFriends} />
        </Scroll>
      </div>
    );
  }
}

export default App;
