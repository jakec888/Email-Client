import userActions from "../actions/user.actions";
import ProfileConfig from "../../EmailConfig";

const initialState = {
  name: ProfileConfig.NAME,
  email: ProfileConfig.EMAIL,
  password: ProfileConfig.PASSWORD,
  imap_server: ProfileConfig.IMAP_SERVER,
  imap_port: ProfileConfig.IMAP_PORT,
  smtp_server: ProfileConfig.SMTP_SERVER,
  smtp_port: ProfileConfig.SMTP_PORT
};

export default (state = initialState, { type, action }) => {
  switch (type) {
    case userActions.ADD_CREDENTIALS:
      return 0;
    default:
      return state;
  }
};
