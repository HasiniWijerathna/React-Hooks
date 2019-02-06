  import React from 'react';

  import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

  /**
 * @TODO: Override the primary styles
 */
const theme = createMuiTheme({
  direction: 'ltr', // Both here and <body dir="rtl">
});

  /**
   * Defines the root component of the react app. <App /> is the top most component in hierarchy
   * I have inculded the common components here like header and footer which should be included with all the other components
   * This will get the children elements from index.js routes by wrapping them with  <App></App> tag
  */
  const App = props => ({
    render() {
      return (
          <div>
          <div>{props.children}</div>
        </div>
      );
    }
  });

  export default App;
