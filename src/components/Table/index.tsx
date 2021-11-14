import React from 'react';
import { useHistory } from 'react-router';
import { searchResult } from "../../typings/app";
import "./Table.css";

interface TableProps {
  searchResults: Array<searchResult>
  searchKeyword: string;
}

export default function Table({ searchResults, searchKeyword }: TableProps) {
  const history = useHistory();
  return (
    <div className='table-wrapper'>
      <div className='table-heading'>
        <span className='column'>Short Description</span>
        <span className='column'>Long Name</span>
        <span className='column'>Contact</span>
        <span className='column'>Developer</span>
        <span className='column'>Syndication Right</span>
      </div>
      <div className='table-data'>
        {searchResults?.length && searchResults.map((item: searchResult, index: number) => <div className='table-row' key={index} onClick={() =>
          history.push({
            pathname: '/view-details',
            search: `?detailId=${searchKeyword}`
          })}>
          <span className='data-column'>{item.ShortDescription}</span>
          <span className='data-column'>{item.LongName}</span>
          <span className='data-column'>{item.Contact}</span>
          <span className='data-column'>{item.Developer}</span>
          <span className='data-column'>{item.SyndicationRight}</span>
        </div>)}
      </div>
    </div>
  )
}
