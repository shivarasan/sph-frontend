import React from 'react';
import moment from "moment";
import { details } from "../../typings/app";
import "./DetailTile.css";

interface DetailTileProps {
    retrieveData: details
}

export default function DetailTile({ retrieveData }: DetailTileProps) {
    return (
        retrieveData && <div className="data-wrapper">
            <div className="data-row"><span>Title</span> : <span>{retrieveData?.title}</span></div>
            <div className="data-row"><span>Author</span> : <span>{retrieveData?.author}</span></div>
            <div className="data-row"><span>Content</span> : <span>{retrieveData?.content}</span></div>
            <div className="data-row"><span>Date Created</span> : <span>{moment(retrieveData?.edited).format('llll')}</span></div>
            <div className="data-row"><span>Date Edited</span> : <span>{moment(retrieveData?.created).format('llll')}</span></div>
        </div>
    );
}
