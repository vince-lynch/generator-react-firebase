import React from 'react'
import PropTypes from 'prop-types'
import { browserHistory, Router } from 'react-router'
import { withContext } from 'recompose'<% if (includeRedux) { %>
import { Provider } from 'react-redux'<% } %>

// Themeing/Styling
import Theme from 'theme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

<% if (!includeRedux) { %>const App = ({ routes }) => (
  <Router history={browserHistory}>{routes}</Router>
)<% } %>
<% if (includeRedux) { %>const App = ({ routes, store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>
)<% } %>

App.propTypes = {
  routes: PropTypes.object.isRequired<% if (includeRedux) { %>,
  store: PropTypes.object.isRequired<% } %>
}

export default withContext(
  {
    muiTheme: PropTypes.object
  },
  () => ({ muiTheme: getMuiTheme(Theme) })
)(App)
