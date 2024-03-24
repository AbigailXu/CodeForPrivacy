import SEO from "@/components/SEO/SEO";
import SectionTitle from "@/components/UI/SectionTitle";
import TagList from "@/components/layout/TagList";
import CardList from "@/components/layout/CardList";
import {SAMPLE_DATASETS} from "@/constants/entries";
import { SAMPLE_DATASET_TAGS } from "@/constants/tags";
import React, {useEffect, useState} from "react";
import {Entry} from "@/types/types"


export default function Datasets() {
  const [DATASETS, setDATASETS] = useState<Entry[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8080/getDatasetsMetadata')
      .then((response) => response.json())
      .then((data) => {
        const datasetsArray = Object.values(data) as Entry[];
        setDATASETS(datasetsArray);
      });
  }, []);


  return (
    <div className="flex">
      <TagList tags = {SAMPLE_DATASET_TAGS}/>
      <CardList heading="Datasets" cardEntries = {DATASETS} />
    </div>
  );
}
