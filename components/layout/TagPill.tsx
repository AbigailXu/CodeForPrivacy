import Image from 'next/image';
import { GrDocumentUpdate } from 'react-icons/gr';

import { Tag } from '@/types/types';

type TagPillProps = Tag;



export default function TagPill(
{
  title,
  iconType,
  iconName
}: TagPillProps) {
  
  return (
    <button type='button'
      className='flex break-inside bg-white text-black border border-black rounded-3xl px-3 py-1 mb-3 dark:bg-slate-800 dark:text-white'>
      <div className='m-auto'>
        <div className='flex items-center justify-start flex-1 space-x-4'>
          <span className='font-medium mb-[-2px] text-black'>
            {title}
          </span>
        </div>
      </div>
    </button>
  );
}
