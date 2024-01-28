import React, { Component } from 'react';
import { useState } from 'react'
import Company from './Company';

function SpotCheck2() {

    let companiesData = [
        { name: "Tesla", revenue: 140 },
        { name: "Microsoft", revenue: 300 },
        { name: "Google", revenue: 600 }]
      
      let [companies, setCompanies] = useState(companiesData)
    
    return (
        <div className="ex-space">
          {companies.map(company => <Company name={company.name} revenue={company.revenue}></Company>)}
        </div>
      )
}

export default SpotCheck2