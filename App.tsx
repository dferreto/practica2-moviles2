import React from 'react';
		import {View} from 'react-native';
		import {Provider} from 'react-redux';


import ConfigureStore from './android/app/src/components/Store';
import TaskList from './android/app/src/views/TaskList';
	

		const App = () => {
			const store = ConfigureStore();
			return (
				<Provider store={store}>
					<View>
						<TaskList />
					</View>
				</Provider>
			);
		};

		export default App;