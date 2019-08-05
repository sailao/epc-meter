import './App.css';
import HomePlan from './HomePlan';
import Table from './components/Table';
import KeyPad from './components/KeyPad';
import BusinessPlan from './BusinessPlan';
import LastHomePlan from './LastHomePlan';
import React,{useState, useEffect, useRef} from 'react';
import LastBusinessPlan from './LastBusinessPlan';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./i18n";

const App = () => {
    const refInput = useRef(null);
    const [ t,locale ] = useTranslation();
    const [unit, setUnit] = useState('');
    const [show, setShow] = useState(true);
    const [home_price, setHomePrice] = useState(0);
    const [business_price, setBusinessPrice] = useState(0);
    const [last_home_price, setLastHomePrice] = useState(0);
    const [last_business_price, setLastBusinessPrice] = useState(0);
    
    const handleUnit =  (e) =>{
        setUnit(e.target.value || '')
    }

    useEffect(() => {
        if (unit | unit === ''){
            setLastHomePrice(LastHomePlan(unit));
            setLastBusinessPrice(LastBusinessPlan(unit));
            setHomePrice(HomePlan(unit))
            setBusinessPrice(BusinessPlan(unit))
        }
    }, [unit]);

    const handleKeyPad = (e)=>{
        setUnit(unit + e.target.id);
        refInput.current.focus();
    }

    const handleDelete = ()=>{
        setUnit('');
        refInput.current.focus();
    };

    const keypad_pros = {handleKeyPad,handleDelete};
    const table_pros = {unit,home_price,last_home_price,business_price,last_business_price,t};

    const Home = () =>{
        return <h2>Code Yay Nay Tal</h2>;
    }

    const handleLocale = (e)=> {
        locale.changeLanguage(e.target.id);        
    }

    const handleShow = ()=> {
        setShow(!show);
    }
    const hover = {
        cursor: 'pointer'
    }
    const meter_mesure = ()=>{
        return (
            <div>
                <br/>
                <div style={{direction: 'rtl',marginRight: '30px'}}>
                    <span id="tai" style={hover} onClick={handleLocale}>{t('tai')}  </span>
                    <span id="burma" style={hover} onClick={handleLocale}>     {t('burma')} </span>
                    <span id="en" style={hover} onClick={handleLocale}>{t('english')}</span>
                </div>
                <br/>
                <h1 className="App">-- {t('welcome')} --</h1>
                <h3 className="App">{t('message')}</h3>
                <div className="App">
                    <span style={{color:'red'}}>***</span>{t('remark')}
                </div>
                <div className="App">
                    <input type="number" autoFocus ref={refInput} value={unit} onChange={handleUnit} placeholder="0"/>
                    <label onClick={handleShow}>{t('keyboard')}</label>
                </div>
                <div className="App">
                    <Table val={table_pros}/>
                </div>
                <br/>
                <div className="App">
                    { show ? <KeyPad val={keypad_pros}/> : ''}
                </div>
            </div>
        );
    };

    return (
        <Router>
            <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/unit-meter/">Epc Meter</Link>
            </li>
          </ul>
        </nav>
            <Route exact path="/" component={Home} />
            <Route path="/unit-meter" component={meter_mesure} />
        </Router>
    );
}

export default App;