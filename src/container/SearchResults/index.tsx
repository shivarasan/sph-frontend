import React, { FC, useState, useEffect, useCallback } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom"
import { useQuery } from '../../hooks/useQuery';
import { searchResult } from "../../typings/app";
import { getSearchResults } from "../../redux/search/action";
import Table from "../../components/Table";
import InputWrapper from "../../components/InputWrapper";
import Error from "../../components/Error"
import './SearchResults.css';

interface SearchResutlsProps {
  searchResults: Array<searchResult>;
  isSearchFailed: boolean;
}

const SearchResults: FC<SearchResutlsProps> = ({ searchResults, isSearchFailed }) => {
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const history = useHistory()
  const query = useQuery();
  const dispatch = useDispatch();
  const search = query.get("search");

  const submitSearch = useCallback((keyword: string) => {
    dispatch(getSearchResults(keyword))
  }, [dispatch]);

  useEffect(() => {
    if (search && search !== searchKeyword) {
      setSearchKeyword(search);
      submitSearch(search)

    }
  }, [search, submitSearch])

  return (
    <div className='container'>
      <div className='input-wrapper'>
        <div className='heading'>Search</div>
        <InputWrapper searchKeyword={searchKeyword} handleChangeSearchKeyword={setSearchKeyword} handleSearch={() => {
          submitSearch(searchKeyword);
          history.push({
            pathname: window.location.pathname,
            search: `?search=${searchKeyword}`
          })

        }} />
      </div>
      {!!searchResults?.length && <Table searchResults={searchResults} searchKeyword={searchKeyword} />}
      {isSearchFailed && <Error message="No Results Found" />}
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    searchResults: state.search?.searchResults,
    isSearchFailed: state.search?.isSearchFailed,
  }
}

export default connect(mapStateToProps)(SearchResults)



