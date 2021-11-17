import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = ({
    children, onClick, className, disabled, active, 
}) => {

    const classes = classNames(
        className,
        { active },
    );

    return (
        <button
        className={classes}
        disable={disabled}
        onClick={onClick}
        >{children}</button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disable: PropTypes.bool,
    active: PropTypes.bool,
};

Button.defaultProps = {
    children: 'Default button',
    onClick: () => {},
    className: '',
    disable: false,
    active: false,
}

