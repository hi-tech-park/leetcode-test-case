export function lengthOfLongestSubstring(s: string): number {
  const arr = s.split('');
  if (arr.length <= 1) return arr.length;
  let maxStart = 0;
  let maxLength = 1;
  let subStr: string[] = arr.slice(maxStart, 1);
  for (let i = 1; i < arr.length; i++) {
    const currentChar = arr[i];
    const repeatCharIndex = subStr.indexOf(currentChar);
    if (repeatCharIndex >= 0) {
      maxLength = subStr.length > maxLength ? subStr.length : maxLength;
      maxStart = maxStart + repeatCharIndex + 1;
    }
    subStr = arr.slice(maxStart, i + 1);

  }
  return subStr.length > maxLength ? subStr.length : maxLength;
};