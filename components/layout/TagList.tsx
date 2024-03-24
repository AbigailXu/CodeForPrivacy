import SEO from "@/components/SEO/SEO";
import SectionTitle from "@/components/UI/SectionTitle";
import { Tag } from '@/types/types'
import TagPill from '@/components/layout/TagPill'


type TagListProps = {
  tags: Tag[];
};

export default function TagList ( { tags } : TagListProps) {
  // Your tag list content goes here
  return (
    <>
      {/* Tag list */}
      <section className="mx-container mb-section mt-10 lg:mt-18">
        
        <h2 className="text-xl font-semibold mb-5">Tags</h2>

        <div role="buttons" className="flex flex-col items-baseline">
        {tags && tags.map((entry, index) => (
            <TagPill key={index} {...entry}/>
        ))}
        </div>
      </section>
    </>
  );
}
