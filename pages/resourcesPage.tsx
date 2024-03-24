// import SEO from "@/components/SEO/SEO";
// import SectionTitle from "@/components/UI/SectionTitle";
// import TeamCard from "@/components/cards/TeamCard";
import TagList from "@/components/layout/TagList";
import CardList from "@/components/layout/CardList";
import { RESOURCES } from "@/constants/Resources";
import { RESOURCE_TAGS } from "@/constants/tags";


// import { TEAM } from "@/constants/team";

export default function ResourcesPage() {
  return (
    <div className="flex">
      <TagList tags = {RESOURCE_TAGS}/>
      <CardList heading="Resources" cardEntries = {RESOURCES} />
    </div>
  );
}
