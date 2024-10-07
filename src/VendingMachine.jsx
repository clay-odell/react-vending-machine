import { useState } from 'react';
import { Link } from 'react-router-dom';
import RoutesComponent from './Routes';


function VendingMachine() {
    const [snack, setSnack] = useState("");

    const handleSnackClick = (name) => {
        setSnack(name);
    };

    const handleGoBack = () => {
        setSnack("");
    };

    return (
        <div>
            {!snack && (
                <ul>
                    <li><Link to="/chips">Chips</Link></li>
                    <li><Link to="/candybar">Candy Bar</Link></li>
                    <li><Link to="/coke">Coke</Link></li>
                </ul>
            )}
            <RoutesComponent handleSnackClick={handleSnackClick} handleGoBack={handleGoBack} />
            {snack && <div>Selected Snack: {snack}</div>}
        </div>
    );
}

export default VendingMachine;
