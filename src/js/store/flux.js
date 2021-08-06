const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			user: ""
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			userLoggedIn: userName => {
				setStore({ user: userName });
				console.log(getStore().user);
			},
			userLoggedOut: () => {
				setStore({ user: "" });
			}
		}
	};
};

export default getState;
