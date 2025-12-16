'use client';
import { useEffect, useState } from 'react';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import Loader from '../components/Loader';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default function HomePage() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const isPreviewing = useIsPreviewing(); // IMPORTANT

  useEffect(() => {
    async function fetchContent() {
      const data = await builder
        .get('page', {
          url: isPreviewing ? window.location.pathname : '/',
        })
        .promise();

      setContent(data);
      setLoading(false);
    }

    fetchContent();
  }, [isPreviewing]);

  if (loading) return <Loader />;
  if (!content) return <div>Page not found</div>;

  return <BuilderComponent model='page' content={content} />;
}
