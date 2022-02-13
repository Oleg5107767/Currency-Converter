import "./Header.css";

const Header = (props) => {
  
  return (
    <div className="container ">
      <nav className="navbar fixed-top navbar-dark bg-dark ">
        {props.currency.filter(el => el.ccy !== "UAH").map(el => {
          return (
            <div className="col-4">
              <div className="row">
                <div className="col-4">
                  <h5 className="header__h1">{el.ccy}</h5>
                </div>
                <div className="col-3">
                  <span className=" header__span">
                    sale  
                  </span>
                  <input className="header__input" readOnly value={el.sale} />
                </div>
                  <div className="col-3">
                  <span className=" header__span">
                     buy 
                  </span>
                  <input className="header__input" readOnly value={el.buy} />
                </div>
              </div>
            </div>
          )
        })}
      </nav>
    </div>
  )
}
export default Header;