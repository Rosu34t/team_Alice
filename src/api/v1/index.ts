import { Hono } from 'hono';
import { type HonoType } from '@/lib/consts';

export const v1 = new Hono<HonoType>();
