import React, { FC, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import DetailTile from "../../components/DetailTile";
import { useQuery } from '../../hooks/useQuery';
import { details } from "../../typings/app";
import Error from "../../components/Error"

import { getRetrieveResults } from "../../redux/search/action";
import './ViewDetails.css';

interface ViewDetailsProps {
	retrieveData: details;
	isRetrieveFailed: boolean;
}

const ViewDetails: FC<ViewDetailsProps> = ({ retrieveData, isRetrieveFailed }) => {
	const query = useQuery();
	const dispatch = useDispatch();
	useEffect(() => {
		const detailId = query.get("detailId");
		if (detailId) {
			dispatch(getRetrieveResults(detailId))
		}
	}, [dispatch, query])
	return (
		<div className='details-container'>
			<div className='details-heading'>View details</div>
			<DetailTile retrieveData={retrieveData} />
			{isRetrieveFailed && <Error message="No Results Found" />}
		</div>
	);
};



function mapStateToProps(state: any) {
	return {
		retrieveData: state.search?.retrieveData,
		isRetrieveFailed: state.search?.isRetrieveFailed
	}
}

export default connect(mapStateToProps)(ViewDetails)
