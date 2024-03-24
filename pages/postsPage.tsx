import CardList from "@/components/layout/CardList";
import React from "react";
import TagList from "@/components/layout/TagList";
import {POSTS} from "@/constants/Posts"
import { POST_TAGS } from "@/constants/tags";


export default function Post() {

  return (
    <div className="flex">
      <TagList tags = {POST_TAGS}/>
      <CardList heading="Privacy in AI" cardEntries = {POSTS} />
    </div>
  );
}
