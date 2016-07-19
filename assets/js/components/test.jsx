define(['react', 'reactdom'],
	function (React, ReactDOM) {
		class Test extends React.Component {
			constructor(props) {
				super(props);
				this.state = {
					loading: false
				};
			}

			render () {
				return <div></div>;
			}
		}

		return Test;
	}
);