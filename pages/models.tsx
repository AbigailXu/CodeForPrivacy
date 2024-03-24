import SEO from "@/components/SEO/SEO";
import SectionTitle from "@/components/UI/SectionTitle";
import TeamCard from "@/components/cards/TeamCard";
import TagList from "@/components/layout/TagList";
import CardList from "@/components/layout/CardList";
import {SAMPLE_DATASETS} from "@/constants/entries";
import { SAMPLE_DATASET_TAGS } from "@/constants/tags";


// import { TEAM } from "@/constants/team";

export default function Database() {
  return (
    <div className="flex">
      <TagList tags = {SAMPLE_DATASET_TAGS}/>
      <CardList heading="Models" cardEntries = {SAMPLE_DATASETS} />
    </div>
  );
}
