'use client';

import React from 'react';

import CardList from "@/components/UI/CardList";
import TagList from "@/components/UI/TagList";
import {POSTS} from "@/constant/Posts"
import { POST_TAGS } from "@/constant/tags";

export default function PostsPage() {

  return (
    <main>
      <div className="flex mb-[5vh] min-h-[85vh]">
        <TagList tags = {POST_TAGS}/>
        <CardList heading="Privacy in AI" cardEntries = {POSTS} />
      </div>
    </main>
  );
}

