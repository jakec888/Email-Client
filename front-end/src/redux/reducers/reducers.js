import sampleReducer from "./sampleReducer";
import emailReducer from "./selectEmail.reducer";
import menuReducer from "./selectMenu.reducer";
import composeEmailReducer from "./composeEmail.reducer";

export default {
  ExampleData: sampleReducer,
  SelectedEmail: emailReducer,
  SelectedMenu: menuReducer,
  ComposeEmail: composeEmailReducer
};
