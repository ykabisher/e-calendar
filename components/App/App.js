import React from 'react';
import db from '../../src/test-db';

export default class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Content style={{ margin: '0 16px' }}>
        <ul class="flex-container">
          {db.events.map((eventData, index) => {
            return <div></div>
          })}
        </ul>
      </Content>
    );
  }
}

