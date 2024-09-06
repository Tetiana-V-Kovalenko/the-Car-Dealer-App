'use client';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const { replace } = useRouter();
  replace('/');
}
