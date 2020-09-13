import React from 'react'
import BackendNav from '../../../../components/Nav/BackendNav'
import Tab from '../../../../components/Nav/Tabs'
import InterventionReportTable from './DataTables/InterventionReportTable'
import Scheme from './Scheme'


const BackendHome = () => {
    return (
        <div>
            <BackendNav />
            <div className="bg-light">
                <Tab/>

            </div>
            <div className="container tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">1...</div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <Scheme />
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <InterventionReportTable />
            </div>
</div>
        </div>
    )
}

export default BackendHome
