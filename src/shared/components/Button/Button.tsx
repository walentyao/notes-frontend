import classes from './Button.module.scss';

interface IProps {
    children: React.ReactNode;
}
export const Button = ({ children }: IProps) => {
    return <button className={classes.button}>{children}</button>;
};
