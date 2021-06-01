import { useEffect } from 'react';

export default function useTitle(title: string) {
  // Store and restore the previous title
  useEffect(() => {
    const { title } = document;
    return () => {
      document.title = title;
    };
  }, []);

  // Set the title
  useEffect(() => {
    document.title = `${title} - Basic Flashcards`;
  }, [title]);
}
