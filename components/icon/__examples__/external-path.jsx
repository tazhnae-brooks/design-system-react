import React from 'react';

import Icon from '~/components/icon'; // `~` is replaced with design-system-react at runtime
import IconSettings from '~/components/icon-settings';

class Example extends React.Component {
	static displayName = 'IconExample';

	render() {
		return (
			<IconSettings iconPath="/assets/icons">
				<Icon
					assistiveText={{ label: 'We got news!' }}
					inverse
					path="/assets/icons/utility-sprite/svg/symbols.svg#announcement"
					size="medium"
				/>
			</IconSettings>
		);
	}
}

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
