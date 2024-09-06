'use client';
import { useRouter } from 'next/navigation';

export const BtnBack = () => {
  const { push } = useRouter();
  return (
    <p
      className="absolute top-[10px] left-[10px] text-blue-900 hover:text-blue-600 hover:underline"
      onClick={() => push('/')}
    >
      Return back
    </p>
  );
};
