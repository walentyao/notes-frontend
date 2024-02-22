import classes from './ProfileHeader.module.scss';
export const ProfileHeader = () => {
    return (
        <div className={classes.profile}>
            <div className={classes.profile__name}>Walentyao</div>
            <img
                src="/egoisto.jpg"
                alt="user avatar"
                className={classes.profile__avatar}
            />
        </div>
    );
};
