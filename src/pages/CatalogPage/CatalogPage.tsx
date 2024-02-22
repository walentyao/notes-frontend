import classNames from 'classnames';
import classes from './CatalogPage.module.scss';

const pageClasses = classNames('page', classes.catalog);
export const CatalogPage = () => {

    return <div className={pageClasses}>catalog</div>;
};
