import { notFound } from 'next/navigation';
import mergedData from '../../constants/index';
import './style.css'
import Bloglayout from '@/components/blogpage/bloglayout';

export async function generateStaticParams() {
  const paths = mergedData.map((post) => ({
    params: { blog: post.id },
  }));
  return paths;
}

export async function getData(blogId) {
  const post = mergedData.find((post) => post.id === blogId);
  return post || null;
}

export default async function BlogPage({ params }) {
  const post = await getData(params.blog);
  if (!post) notFound();
  return (
    <Bloglayout prop = {post} ></Bloglayout>
  );
}
