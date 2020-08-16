import { findMedianSortedArrays } from '../main/[04]_median_of_two_sorted_arrays'

describe('findMedianSortedArrays', () => {

  /**
  * nums1 = [1, 3]
  * nums2 = [2]
  * The median is 2.0
  */
  it('should return 2.0', () => {
    const nums1 = [1, 3];
    const nums2 = [2];
    expect(findMedianSortedArrays(nums1, nums2)).toEqual(2.0);
  });

  /**
  * nums1 = [1, 2]
  * nums2 = [3, 4]
  * The median is 2.5
  */
  it('should return 2.5', () => {
    const nums1 = [1, 2];
    const nums2 = [3, 4];
    expect(findMedianSortedArrays(nums1, nums2)).toEqual(2.5);
  });

  /**
  * nums1 = [4, 5, 6, 8, 9]
  * nums2 = []
  * The median is 6.0
  */
  it('should return 6.0', () => {
    const nums1 = [4, 5, 6, 8, 9];
    const nums2: number[] = [];
    expect(findMedianSortedArrays(nums1, nums2)).toEqual(6);
  });
});