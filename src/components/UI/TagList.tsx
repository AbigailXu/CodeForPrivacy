import { Tag } from '@/types/types'
import TagPill from '@/components/UI/TagPill'


type TagListProps = {
  tags: Tag[];
  handleTagClick: Function;
  getCurrentTag: Function;
};

export default function TagList ( { tags, handleTagClick, getCurrentTag } : TagListProps) {

  return (
    <>
      {/* Tag list */}
      <section className="mt-10 lg:mt-18">
        
        <h2 className="text-xl font-semibold mb-5">Tags</h2>

        <div role="buttons" className="flex flex-col items-baseline min-w-[15vw]">
        {tags && tags.map((entry, index) => (
            <TagPill key={index} handleTagClick={handleTagClick} getCurrentTag={getCurrentTag} tag={entry}/>
        ))}
        </div>
      </section>
    </>
  );
}
