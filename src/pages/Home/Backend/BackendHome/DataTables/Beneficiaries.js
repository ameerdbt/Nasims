import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';  
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import npower from '../../../../../assets/npower.jpg'
import tradermoni from '../../../../../assets/trader-moni.png'
import axios from "axios";
import { Link } from "react-router-dom";
import './datatable.scss'
import data from './beneficiaries.json'
import BackendNav from "../../../../../components/Nav/BackendNav";
import Tab from "../../../../../components/Nav/Tabs";
var Router = require("react-router");
var browserHistory = Router.browserHistory;
const { SearchBar, ClearSearchButton } = Search;
function actionFormatter(cell, row) {
  console.log(row) 
  return (
    <div className=' d-flex'>
    
    <div class="dropdown dropdown-action">
        <a href="#" class="action-icon grey-btn text-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Action</a>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave">View Details</a>
              <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve">Benefits</a>
              <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve">Knowledge graph</a>
            </div>
    </div>
  </div>
    
  );
}


export class BeneficiariesTable extends Component {
  state = {
    allSchemes: [],

    columns: [     

      {
        dataField: "name",
        text: "Name",        
        sort: true,
      },
      {
        dataField: "sip",
        text: "Sip Number",
        sort: true,
      },
      {
        dataField: "dob",
        text: "Date of Birth",
        sort: true,
      },
      {
        dataField: "phone",
        text: "Phone Number",
        sort: true,
      },
      {
        dataField: "address",
        text: "Address",
        sort: true,
      },

      {
        dataField: "action",
        text: "Action",
        formatter: actionFormatter, 
      },

     
     
    ],
  };
  
  componentDidMount() {
	console.log(data)
    // axios.get("./mock.json").then((response) => {
	// 	console.log(response)
    //   console.log(response.data);

      this.setState({
        allSchemes: data,
      });
    // });
  }

  render() {
    
	const defaultSorted = [{
		dataField: 'Name',
		order: 'desc'
	  }];
    return (
      <div className="container">
        

        <div
          style={{
            marginTop: 20,
          }}
        >
			  <ToolkitProvider
  keyField="id"
  data={this.state.allSchemes}
  columns={this.state.columns}
  search
>
  {
    props => (
      <div>
          <BackendNav />
          <div className="bg-light">         
        <ul className="nav nav-pills  mb-3 tab-pills" id="pills-tab" role="tablist">
            <li className="nav-item">
                <a  onClick={() => this.props.history.go(-1)} className="nav-link text-success" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><i class="fa fa-angle-left" aria-hidden="true"></i> Back</a>
            </li>
            
        </ul>
        

            </div>
            <div class="page-header mt-5">
						<div class="row align-items-center">
							<div class="col-12 my-2">
								<h3 class="">N-POWER BENEFICIARY DATABASE</h3>
								
							</div>
							<div class="col ">							
                  <SearchBar { ...props.searchProps } placeholder="Search by Scheme Name, Scheme Code" className="search-scheme" />       
								
							</div>
							<div class="col-auto float-right ml-auto mb-2">
								<a href="#" class="btn green-border mr-3" data-toggle="modal" data-target="#add_allSchemes"> <i class="las la-file-download"></i> Import Data</a>
								<a href="#" class="btn green-border" data-toggle="modal" data-target="#add_allSchemes"> <i class="las la-file-upload"></i> Export Data</a>
								
							</div>
						</div>
					</div>
						
        
        <BootstrapTable
          bordered={ false }
          { ...props.baseProps }
        />
        
      </div>
    )
  }
</ToolkitProvider>
    
        </div>
      </div>
    );
  }
}

export default BeneficiariesTable;
