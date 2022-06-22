import { getBio } from '../../api';
import *  as fs from 'fs/promises';

export const about = async (args: string[]): Promise<string> => {
  const bio = fs.readFile('public/pages/about.md', 'utf8');
  return bio;
};
