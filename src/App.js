import React , {Component} from 'react';
import {CardList} from './Components/card-list/card-list.component';
import {SearchBox} from './Components/searchbox/search-box.component';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(Users => this.setState({monsters:Users}))
      
    }

  render() {
    const { monsters,searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return(
      <div className='App'>
      <SearchBox
        placeholder={'search monsters'}
        handleChange={e => {this.setState({ searchField: e.target.value })}}
      /> 
      <CardList monsters={filteredMonsters} />
      </div>

    );
  }
}

export default App;
