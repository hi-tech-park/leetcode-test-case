export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let finalNums: number[] = [];
  if (nums1.length === 0) {
    finalNums = nums2;
  }
  else if (nums2.length === 0) {
    finalNums = nums1;
  } else {
    for (let i = 0, j = 0; (i + j) < (nums1.length + nums2.length);) {
      if (i >= nums1.length) {
        finalNums.push(...nums2.slice(j))
        break;
      }
      if (j >= nums2.length) {
        finalNums.push(...nums1.slice(i))
        break;
      }
      const num1 = nums1[i];
      const num2 = nums2[j];
      if (num1 <= num2) {
        finalNums.push(num1);
        i++;
      } else {
        finalNums.push(num2);
        j++;
      }
    }
  }

  const numsLength = finalNums.length;
  if (finalNums.length % 2 === 1) return finalNums[parseInt(numsLength / 2 + '')]
  const second = parseInt(numsLength / 2 + '')
  const first = parseInt(numsLength / 2 + '') - 1;
  return (finalNums[first] + finalNums[second]) / 2;
};