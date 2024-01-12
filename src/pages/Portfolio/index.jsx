import './index.css'
import habsImg from '../../assets/images/habs.png'
import Headings from '../../components/Headings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faUser } from '@fortawesome/free-regular-svg-icons'
import { faCode, faShare, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const PortfolioData = [
    {
        portNo:1,
        portName:'Organizational Website',
        portLink:'https://www.hamroawaj.org.np/',
        portLanguage:'React, Css3 ',
        portClientName:'Hamro Awaj Baal Sanjal',
        portLinkName:'hamroawaj.org.np',
        portImg:habsImg,
    },
    {
        portNo:2,
        portName:'My websire',
        portLink:'https://www.hamroawaj.org.np/',
        portLanguage:'React, Css3 ',
        portClientName:'Saksham Khatiwada',
        portImg:habsImg,
        portLinkName:'hamroawaj.org.np',
    },
    {
        portNo:3,
        portName:'Organizational Website',
        portLink:'https://www.hamroawaj.org.np/',
        portLanguage:'React, Css3 ',
        portClientName:'Hamro Awaj Baal Sanjal',
        portLinkName:'hamroawaj.org.np',
        portImg:habsImg,
    },
    {
        portNo:4,
        portName:'Organizational Website',
        portLink:'https://www.hamroawaj.org.np/',
        portLanguage:'React, Css3 ',
        portClientName:'Hamro Awaj Baal Sanjal',
        portLinkName:'hamroawaj.org.np',
        portImg:habsImg,
    },
    {
        portNo:5,
        portName:'Organizational Website',
        portLink:'https://www.hamroawaj.org.np/',
        portLanguage:'React, Css3 ',
        portClientName:'Hamro Awaj Baal Sanjal',
        portLinkName:'hamroawaj.org.np',
        portImg:habsImg,
    },
    {
        portNo:6,
        portName:'Organizational Website',
        portLink:'https://www.hamroawaj.org.np/',
        portLanguage:'React, Css3 ',
        portClientName:'Hamro Awaj Baal Sanjal',
        portLinkName:'hamroawaj.org.np',
        portImg:habsImg,
    },
]


const Portfolio = () => {
    const [portData ,setportData] = useState(PortfolioData);
    const [portBoxOpen ,setportBoxOpen] = useState(false);

    const OpenPortBox = (portID) => {
        const filterdPortData = PortfolioData.filter(data => data.portNo == portID)
        setportBoxOpen(!portBoxOpen)
        setportData(filterdPortData)
    }
    const toggleportBox =() => {
        setportBoxOpen(!portBoxOpen)

    }
    return(
        <>

            <div className="portfolioContainer">
            <Headings frontHeading={'My Portfolio'} backHeading={'Works'} />

                {PortfolioData.map((e) => {
                    return(
                        <div key={e.portNo} className="portfolioBox" onClick={() => OpenPortBox(e.portNo)}>
                            <img 
                                src={e.portImg}
                                alt={e.portClientName}
                            />
                            <div className='PortHoverBox'>
                                    <h3>{e.portName}</h3>
                            </div>
                    </div>
                    );
                })}
                    
            </div>
{
    portBoxOpen && (
    
        <div className="portWholeInfo" onClick={toggleportBox}>

                {
                    portData.map((e) => {
                            return(
                                <div key={e.portID} className="PortMoreBox">
                    <div className="PortHead">
                        <h1>Habs website</h1>
                    </div>
                    <div className="portDetails">
                        <div className="portDetail">
                             <FontAwesomeIcon className='PortIcon' icon={faFile} />
                            <h2>Project : {e.portName}</h2>
                        </div>
                        <div className="portDetail">
                             <FontAwesomeIcon className='PortIcon' icon={faUser} />
                            <h2>Client : {e.portClientName}</h2>
                        </div>
                        <div className="portDetail">
                             <FontAwesomeIcon className='PortIcon' icon={faCode} />
                            <h2>Language : {e.portLanguage}</h2>
                        </div>
                        <div className="portDetail">
                             <FontAwesomeIcon className='PortIcon' icon={faShare} />
                            <h2>Preview : <a target='_blank' href={e.portLink}>{e.portLinkName}</a></h2>
                        </div>
                    </div>
                    <div className="portImage">
                            <img
                                src={e.portImg}
                            />
                    </div>
                    <FontAwesomeIcon  onClick={toggleportBox} className='CloseBtnPort' icon={faXmark} />
                </div>
                            );
                    })
                }

            </div>
    )
}
            
        </>
    );
}

export default Portfolio;