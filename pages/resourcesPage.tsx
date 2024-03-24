import TagList from "@/components/layout/TagList";
import CardList from "@/components/layout/CardList";
import { RESOURCES } from "@/constants/resources";
import { RESOURCE_TAGS } from "@/constants/tags";


export default function ResourcesPage() {
  return (
    <div className="flex">
      <TagList tags = {RESOURCE_TAGS}/>
      <CardList heading="Resources" cardEntries = {RESOURCES} />
    </div>
  );
}
