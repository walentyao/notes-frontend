import { Header } from '@/widgets/Header';
import classes from './App.module.scss';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className={classes.app}>
            <Header />
            <Outlet />
        </div>
    );
}

export default App;
