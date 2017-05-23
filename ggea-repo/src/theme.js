import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { indigo500, indigo900, green500 } from 'material-ui/styles/colors';

const theme = {
  "palette": {
    "primary1Color": indigo500,
    "primary2Color": indigo900,
    "primary3Color": "#bdbdbd",
    "accent1Color": green500,
    "accent2Color": "#f5f5f5",
    "accent3Color": "#9e9e9e",
  }
};

const muiTheme = getMuiTheme(theme);

export default muiTheme;