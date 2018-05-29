import PropTypes from 'prop-types';

export class User {
  static get propType() {
    return PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
      username: PropTypes.string,
      avatar: PropTypes.string,
    });
  }
}
