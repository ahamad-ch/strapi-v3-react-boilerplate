import PropTypes from 'prop-types'
import KeycloakService from "../services/KeycloakService";

const RenderOnRole = ({ roles, children }) => (KeycloakService.hasRole(roles)) ? children : null;

RenderOnRole.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default RenderOnRole
