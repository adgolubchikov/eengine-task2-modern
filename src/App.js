import React, {	Component } from 'react';
import ReactDOM from 'react-dom';

function App() {
	class MyComponent extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				counter: 0,
				items: [1, 2]
			};
			this.increase = this.increase.bind(this);
			this.addItem = this.addItem.bind(this);
		}

		increase() {
			this.setState({
				counter: this.state.counter + 1
			});
		}

		addItem() {
			this.setState({
				items: this.state.items.concat([this.state.items.length + 1])
			});
		}

		render() {
			return (
			<div>
			<div className="data">
			<div>{this.state.counter}</div>
			<ul>
			{this.state.items.map(item => (
				<li key={item}>element {item}</li>
			))}
			</ul>
			</div>
			<div className="actions">
			<button type="button" onClick={this.increase}>zwiększ</button>
			<button type="button" onClick={this.addItem}>dodaj</button>
			</div>
			</div>
			);
		}

	}


	ReactDOM.render(<MyComponent />, document.querySelector("body"));

	return null;
}

export default App;
