/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // return s.split('').sort().join() === t.split('').sort().join()


  // if (s.length !== t.length) {
  //   return false;
  // }

  // const strLen = s.length
  // let sMap = new Map();
  // let tMap = new Map();
  // for (let i = 0; i < strLen; i++) {
  //   let sVal = sMap.get(s[i]);
  //   let tVal = tMap.get(t[i]);
  //   if (sVal) {
  //     sMap.set(s[i], ++sVal)
  //   } else {
  //     sMap.set(s[i], 1)
  //   }

  //   if (tMap.get(t[i])) {
  //     tMap.set(t[i], ++tVal)
  //   } else {
  //     tMap.set(t[i], 1)
  //   }
  // }
  // // let res = true
  // //    tMap.forEach((value, key) => {
  // //         if (!sMap.get(key)) {
  // //             res =  false
  // //         }

  // //         if (sMap.get(key) !== value) {
  // //             res = false
  // //         }
  // //     })
  // let res = true
  // for (let [key, value] of tMap) {
  //   console.log(value, key);
  //   if (!sMap.get(key)) {
  //     res = false
  //     break;
  //   }
  //   if (sMap.get(key) !== value) {
  //     res = false
  //     break
  //   }
  // }
  // return res

  if (s.length !== t.length) {
    return false
  }

  let arr = Array.from({ length: 26 }, () => { return 0; })
  console.log(arr)

  for (let i = 0, len = s.length; i < len; i++) {
    arr[s.charAt(i).charCodeAt() - 97]++;
    arr[t.charAt(i).charCodeAt() - 97]--;
  }

  return arr.every(item => item === 0);
};