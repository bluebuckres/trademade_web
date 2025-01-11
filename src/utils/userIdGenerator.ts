export const generateUserId = (name: string): string => {
  // Take first 3 letters of name (or pad with 'X' if shorter)
  const prefix = (name.substring(0, 3) + 'XXX').substring(0, 3).toUpperCase();
  
  // Generate 3 random digits
  const suffix = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  
  return `${prefix}${suffix}`;
};
