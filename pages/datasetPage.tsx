import React from 'react';
import { Link } from 'react-router-dom';
import {Entry} from '@/types/types'


type DatasetPageData = {
    dataset: Entry;
};

function DatasetPage( { dataset } : DatasetPageData) {
  const { _id, title, description } = dataset;

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      
    </div>
  );
}

export default DatasetPage;
