import React from 'react'
import { useNavigate } from 'react-router-dom';
const boxImage = {
    width: '48px',
    height: '48px',
    position: 'absolute',
    marginLeft: '195px',
    marginTop: '-37px'

}
const ButtonStyle = {
    height: '30px',
    marginLeft: '22px'
}
export default function BoughtCoinsBox({ name, image, current_price, market_cap, DailyChange, quantity }) {
    const formattedCurrentPrice = (current_price);
    const formattedMarketCap = (market_cap);
    const formattedDailyChange = (DailyChange);
    const obj = {
        name: name,
        image: image,
        price: formattedCurrentPrice,
        marketCap: formattedMarketCap,
        DailyChange: DailyChange,
        quantity: quantity
    };
    const navigate = useNavigate();
    const HandleBuy = async (e) => {
        e.preventDefault();
        navigate(`/BuyCoin?query=${JSON.stringify(obj)}`);
    }
    return (
        <div>
            <div className="card my-3" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>

                    <img style={boxImage} src={image} alt="" />
                    <p className="card-text"> current price : {formattedCurrentPrice}$</p>
                    <p className="card-text">Market Cap : {formattedMarketCap}$</p>
                    <p className="card-text">Daily Change : {formattedDailyChange}%</p>
                    <p className="card-text">No. of Coins : {quantity}</p>
                    <button type="button" className="btn btn-success btn-sm" onClick={HandleBuy} style={ButtonStyle}>Sell Now</button>
                    <button type="button" className="btn btn-primary btn-sm" style={ButtonStyle}>Read News</button>
                </div>
            </div>
        </div>
    )

}





