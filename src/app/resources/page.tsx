'use client';
import {useState} from 'react';
import TagList from "@/components/UI/TagList";
import CardList from "@/components/UI/CardList";
import { RESOURCES } from "@/constant/resources";
import { RESOURCE_TAGS } from "@/constant/tags";


export default function ResourcesPage() {
  const [currentTag, setCurrentTag] = useState("");

  const handleTagClick = (tag: string) => {
    if (currentTag === tag) {
      setCurrentTag("")
    } else {
      setCurrentTag(tag)}
  }

  const getCurrentTag = (tag: string) => {
    return(currentTag)
  }

  return (
    <div className="flex mb-[5vh] min-h-[85vh]">
      <TagList tags = {RESOURCE_TAGS} handleTagClick={handleTagClick} getCurrentTag={getCurrentTag}/>
      <CardList heading="Resources" cardEntries = {RESOURCES.filter((p) => (currentTag === "" || p.tag === currentTag))} />
    </div>
  );
}
