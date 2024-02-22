import classes from './LogoHeader.module.scss';
export const LogoHeader = () => {
    return (
        <div className={classes.logo}>
            <img
                src="/notes.png"
                alt="logo notes"
                className={classes.logo__image}
            />
            <div className={classes.logo__text}>Notes</div>
        </div>
    );
};
