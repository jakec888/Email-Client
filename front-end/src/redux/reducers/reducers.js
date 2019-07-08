import emailReducer from './selectEmail.reducer';
import menuReducer from './selectMenu.reducer';
import composeEmailReducer from './composeEmail.reducer';
import retrieveEmailReducer from './retrieveEmails.reducer';
import userReducer from './user.reducers';

export default {
  SelectedEmail: emailReducer,
  SelectedMenu: menuReducer,
  ComposeEmail: composeEmailReducer,
  RetrieveEmails: retrieveEmailReducer,
  Profile: userReducer
};
