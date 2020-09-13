import React from 'react'
import './Tabs.scss'
const Tab = () => {
    return (
        <div className="container">
        <ul className="nav nav-pills  mb-3 tab-pills" id="pills-tab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">DASHBOARD</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">SCHEMES</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">INTERVENTION REPORT</a>
            </li>
        </ul>
        </div>
    )
}

export default Tab
