import sampleReducer from "./sampleReducer";
import emailReducer from "./selectEmail.reducer";
import menuReducer from "./selectMenu.reducer";
import composeEmailReducer from "./composeEmail.reducer";
import retrieveEmailReducer from "./retrieveEmails.reducer";
import emailConfigReducer from "./emailConfig.reducers";

export default {
  ExampleData: sampleReducer,
  SelectedEmail: emailReducer,
  SelectedMenu: menuReducer,
  ComposeEmail: composeEmailReducer,
  RetrieveEmails: retrieveEmailReducer,
  ProfileConfig: emailConfigReducer
};
