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
    height:'30px',
    marginLeft:'22px'
}
export default function CoinBox({name,image,current_price,market_cap,DailyChange}) {

    const obj= {
        name :name,
        image:image,
        price:((current_price)/80).toFixed(2),
        marketCap:((market_cap)/80).toFixed(2),
        DailyChange:DailyChange=DailyChange      
      };
      const navigate = useNavigate();
    const HandleBuy=async(e)=>{
        e.preventDefault();
       
        navigate(`/BuyCoin?query=${JSON.stringify(obj)}`);
    }


    return (
        <div>
            <div class="card my-3" style={{ width: "18rem" }}>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    
                    <img style={boxImage} src={image} alt="" />
                    <p class="card-text"> current price : {obj.price}$</p>
                    <p class="card-text">Market Cap : {obj.marketCap}$</p>
                    <p class="card-text">Daily Change : {DailyChange}%</p>
                    <button type="button" class="btn btn-primary btn-sm" onClick={HandleBuy} style={ButtonStyle}>Buy Now</button>
                    <button type="button" class="btn btn-primary btn-sm" style={ButtonStyle}>Read News</button>
                </div>
            </div>
        </div>
    )

}





