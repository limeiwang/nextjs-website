import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const news = await prisma.news.findMany();
  return NextResponse.json(news);
}
