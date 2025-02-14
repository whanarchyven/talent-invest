import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';

export type FileType = 'images' | 'pdf' | 'video';

export async function saveFile(
    file: File,
    fileType: FileType
): Promise<string> {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const originalName = file.name;
    const extension = originalName.split('.').pop();
    const fileName = `${randomUUID()}.${extension}`;
    const relativePath = `/${fileType}/${fileName}`;
    const fullPath = join(process.cwd(), 'public', fileType, fileName);
    
    await writeFile(fullPath, buffer);
    
    return relativePath;
} 