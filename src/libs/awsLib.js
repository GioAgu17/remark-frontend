import { Storage } from "aws-amplify";

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;

  const stored = await Storage.put(filename, file, {
    contentType: file.type,
  });

  return stored.key;
}

export async function s3Delete(fileKey){
  const deleted = await Storage.remove(fileKey);
  return deleted;
}

export async function s3Download(fileKey){
  const result = await Storage.get(fileKey, { download: true });
  return result;
}
