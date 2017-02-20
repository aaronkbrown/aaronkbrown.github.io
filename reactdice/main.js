

function roll(dieType, dieCount){
  var nDiceResult = 0;
  for(var i = 0; i < dieCount; i++){
    nDiceResult = nDiceResult + Math.ceil(dieType * Math.random());
  }
  return nDiceResult;
}

var DiceRoller = React.createClass({
  getInitialState: function(){
    return {
      dieType: '6',
      dieCount: '1',
      rollResult: ''
    }
  },
  changeDieType: function(newDie){
    this.setState({
      dieType: newDie
    });
  },
  changeDieCount: function(newCount){
    this.setState({
      dieCount: newCount
    });
  },
  rollDice: function(){
    this.setState({
      rollResult: roll(this.state.dieType, this.state.dieCount)
    });
  },
  render: function(){
    return (
      <div>
        <div className="diceSet">
          <DiceNum setNum={this.changeDieCount} />
          <DiceType setType={this.changeDieType} />
        </div>
        <button onClick={this.rollDice}>Roll!</button>
        <p>Your result: {this.state.rollResult}</p>
        {console.log("DieType: " + this.state.dieType + ", DieCount: " + this.state.dieCount)}
      </div>
    )
  }
});

var DiceType = React.createClass({
  getInitialState: function(){
    return {
      newType: '6'
    }
  },
  updateDiceType: function(e){
    this.setState({
      newType: e.target.value
    });
    this.props.setType(e.target.value);
  },
  render: function(){
    return (
      <select value={this.state.newType} onChange={this.updateDiceType}>
        <option value="4">D4</option>
        <option value="6">D6</option>
        <option value="8">D8</option>
        <option value="10">D10</option>
        <option value="12">D12</option>
        <option value="20">D20</option>
        <option value="100">D100</option>
      </select>
    )
  }
});

var DiceNum = React.createClass({
  getInitialState: function(){
    return {
      newCount: '1'
    }
  },
  updateDiceCount: function(e){
    this.setState({
      newCount: e.target.value
    });
    this.props.setNum(e.target.value);
  },
  render: function(){
    return (
      <input type="number" name="dieCount" min="1" max="50" value={this.state.newCount} onChange={this.updateDiceCount} />
    )
  }
});

ReactDOM.render(
  <DiceRoller />,
  document.getElementById('results')
);
