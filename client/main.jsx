import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import injectTapEventPlugin from 'react-tap-event-plugin'

import { renderRoutes } from '../imports/startup/client/routes.jsx';

import Hello from '../imports/ui/Hello.jsx';

Meteor.startup(() => {
	injectTapEventPlugin()
  	//render(<Hello />, document.getElementById('app-container'));

  	 render(renderRoutes(), document.getElementById('app-container'));
});
