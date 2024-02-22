import { BellIcon } from '@heroicons/react/24/solid';
import classes from './Header.module.scss';
import { Button } from '@/shared/components/Button/Button';
import { ProfileHeader } from '../ProfileHeader/ProfileHeader';
import { LogoHeader } from '../LogoHeader/LogoHeader';

export const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header__left}>
                <LogoHeader/>
            </div>
            <div className={classes.header__right}>
                <div className={classes.user}>
                    <div className={classes.user__notification}>
                        <BellIcon className={classes.user__notification_icon} />
                    </div>
                    <ProfileHeader />
                </div>
                <Button>Logout</Button>
            </div>
        </header>
    );
};
