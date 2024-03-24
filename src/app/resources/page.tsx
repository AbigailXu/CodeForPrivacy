'use client';

import TagList from "@/components/UI/TagList";
import CardList from "@/components/UI/CardList";
import { RESOURCES } from "@/constant/resources";
import { RESOURCE_TAGS } from "@/constant/tags";


export default function ResourcesPage() {
  return (
    <div className="flex">
      <TagList tags = {RESOURCE_TAGS}/>
      <CardList heading="Resources" cardEntries = {RESOURCES} />
    </div>
  );
}
