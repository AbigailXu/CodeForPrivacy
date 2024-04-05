import Image from 'next/image';
import { GrDocumentUpdate } from 'react-icons/gr';

import { Tag } from '@/types/types';

type TagPillProps = {
  tag:Tag;
  handleTagClick: Function;
  getCurrentTag: Function;
};



export default function TagPill(
{
  tag,
  handleTagClick,
  getCurrentTag
}: TagPillProps) {
  
  return (
    <button
      type='button'
      className={`flex break-inside rounded-3xl px-3 py-1 mb-3 ${getCurrentTag() === tag.title 
        ? 'bg-black text-white border border-white' 
        : 'bg-white text-black border border-black'}`}
      onClick={() => handleTagClick(tag.title)}
    >

      <div className='m-auto'>
        <div className='flex items-center justify-start flex-1 space-x-4'>
          <span className='font-medium mb-[-2px]'>
            {tag.title}
          </span>
        </div>
      </div>
    </button>
  );
}
