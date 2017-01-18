import React from 'react';

import {Players} from './../api/players';

export default class Player extends React.Component {
  render() {
    let itemClassName = `item item--position-${this.props.player.rank}`;

    return (
      <div key={this.props.player._id} className={itemClassName}>
        <div className="player">
          <div>
            <h3 className="player__name">{this.props.player.name}</h3>
            <p className="player__stats">
              {this.props.player.position} place - {this.props.player.score} point(s).
            </p>
          </div>
          <div className="player__actions">
            <button className="button button--round" onClick={() => {
              Players.update(this.props.player._id, {$inc: {score: -1}});
            }}>-1</button>
            <button className="button button--round" onClick={() => {
              Players.update(this.props.player._id, {$inc: {score: 1}});
            }}>+1</button>
            <button className="button button--round" onClick={() => Players.remove(this.props.player._id)}>X</button>
          </div>
        </div>
      </div>
    );
  }
};

// Setup prop types. player should be a required object
Player.propTypes = {
  player: React.PropTypes.object.isRequired
};
