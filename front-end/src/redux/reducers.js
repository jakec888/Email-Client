import emailReducer from './reducers/selectEmail.reducer';
import menuReducer from './reducers/selectMenu.reducer';
import composeEmailReducer from './reducers/composeEmail.reducer';
import retrieveEmailReducer from './reducers/retrieveEmails.reducer';
import userReducer from './reducers/user.reducers';

export default {
  SelectedEmail: emailReducer,
  SelectedMenu: menuReducer,
  ComposeEmail: composeEmailReducer,
  RetrieveEmails: retrieveEmailReducer,
  Profile: userReducer
};
