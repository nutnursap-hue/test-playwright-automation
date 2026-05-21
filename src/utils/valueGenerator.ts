export function generateUniqueString(): string {
  const seconds = Math.floor(Date.now());
  return `${seconds}`;
}

export function generateRandomEmail(domain: string = 'example.com'): string {
  return `user_${generateUniqueString()}@${domain}`;
}