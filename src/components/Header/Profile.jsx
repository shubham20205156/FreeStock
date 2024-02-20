import React from 'react'
import { Link } from 'react-router-dom'
const Profile = () => {
  const name = localStorage.getItem('name');
  return (
    <div>
      <div className="mainContainerProfile" style={{ background: 'white', height: '87vh' }}>
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>Here are Your Investments Mr. {name}</h2>
        <div className="main" style={{ marginTop: '23px' }}>
          <div className="profileContainer">
            <Link to="/BoughtCoin"><div className="ProfileCoinBox" style={{ background: 'linear-gradient(to right, #000cff, #c300ff)', color: 'white' }}>
              <div style={{ marginLeft: '6px' }}>
                <p style={{ fontSize: '22px' }}>Total Investment in Coins</p>
                <div style={{ display: 'flex' }}>
                  <p>Invested Value : </p>
                  <p>456.17$</p>
                </div>
                <div style={{ display: 'flex' }}>
                  <p>Current Value : </p>
                  <p>469.34$</p>
                </div>
              </div>
            </div></Link>
            <div className="ProfileStockBox" style={{ background: 'linear-gradient(to right, #000cff, #c300ff)', color: 'white' }}>
              <div style={{ marginLeft: '6px' }}>
                <p style={{ fontSize: '22px' }}>Total Investment in stocks</p>
                <div style={{ display: 'flex' }}>
                  <p>Invested Value : </p>
                  <p>456.17$</p>
                </div>
                <div style={{ display: 'flex' }}>
                  <p>Current Value : </p>
                  <p>469.34$</p>
                </div>

              </div>
            </div>
          </div>
          <div className="verticleLine"></div>
          <div className="totalInvestment" style={{ background: 'linear-gradient(to right, #000cff, #c300ff)', color: 'white' }}>
            <p>Available Balance :</p>
            <p>Total Invested Amount :</p>
            <p>Total Returns : </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile