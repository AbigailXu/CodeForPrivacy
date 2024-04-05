'use client';

import React, {useState} from 'react';

import CardList from "@/components/UI/CardList";
import TagList from "@/components/UI/TagList";
import {POSTS} from "@/constant/Posts"
import { POST_TAGS } from "@/constant/tags";

export default function PostsPage() {

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
    <main>
      <div className="flex mb-[5vh] min-h-[85vh]">
        <TagList tags = {POST_TAGS} handleTagClick={handleTagClick} getCurrentTag={getCurrentTag}/>
        <CardList 
          heading="Privacy in AI" 
          cardEntries = {POSTS.filter((p) => (currentTag === "" || p.tag === currentTag))} 
        />
      </div>
    </main>
  );
}

