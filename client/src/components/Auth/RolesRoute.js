import PropTypes from 'prop-types'
import { Route } from "react-router-dom";
import KeycloakService from "services/KeycloakService";
import AccessDenied from "./AccessDenied";

const RolesRoute = ({ roles, children, ...rest }) => (
  <Route {...rest}>
    {KeycloakService.hasRole(roles) ? children : <AccessDenied/>}
  </Route>
)

RolesRoute.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default RolesRoute
