import { useNavigate } from 'react-router-dom';;

const Snack = ({ name, price, onBuy, onGoBack}) => {
    const navigate = useNavigate();
    
    const handleGoBack = (e) => {
        navigate('/');
        onGoBack();
    };

    return (
        <div>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={onBuy}>Buy</button>            
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default Snack;