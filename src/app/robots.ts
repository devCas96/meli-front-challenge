import { ROOT_URL } from '@/constants/globals';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/items',
    },
    sitemap: `${ROOT_URL}sitemap.xml`,
  };
}