/**
 * @param {number} capacity
 * ref: https://leetcode-cn.com/problems/lfu-cache/solution/js-ti-jie-zhi-xing-yong-shi-452-ms-zai-suo-you-jav/
 */
var LFUCache = function (capacity) {
  this.seqMap = new Map(); // 存放put进来的元素，结构:{key,value,seq} seq:访问次数（put,get都+1）
  this.ageMap = new Map(); // 这个map用来记录每个元素的年龄，年龄越大，被删除的优先级越高
  this.capacity = capacity; // 初始可以删除的位置从年龄为1的位置开始
  this.ensurePointAgeMapIsInited = function (item) {
    if (!this.ageMap.has(item.seq)) {
      this.ageMap.set(item.seq, new Map());
    }
    return this.ageMap.get(item.seq); // 这里返回新开的这一层
  }

  this.addAge = function (item) { // 更新已经存在的元素的年龄层级，或者加入新的元素
    if (this.seqMap.has(item.key)) {
      relativeAge = this.ensurePointAgeMapIsInited(item);
      relativeAge.delete(item.key);
      // 删除以后 判断一下当前可删除层级是否为空了
      if (this.ageMap.get(this.canDeleteAgeGroupKey).size === 0) {
        this.canDeleteAgeGroupKey++
      }
      item.seq++;
    }
    relativeAge = this.ensurePointAgeMapIsInited(item); // 开启新的层级
    relativeAge.set(item.key, item); // 加入到新层级的队列最后
  }
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  const item = this.seqMap.get(key);
  if (!item) {
    return -1
  } else {
    // 提升该元素的年龄层级
    this.addAge(item);
    return item.value
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity == 0) {
    return;
  }
  // 获取元素
  let item = this.seqMap.get(key)
  if (!item) { // 不存在 则添加进seqMap
    if (this.seqMap.size >= this.capacity) {
      // 当缓存里已满时，要删除一个元素，从canDeleteAgeGroupKey代表的age层级的头元素开始删除
      var relativeAge = this.ageMap.get(this.canDeleteAgeGroupKey);
      var firstKey = relativeAge.keys().next().value; // 获取当前层级队列第一个元素的key
      relativeAge.delete(firstKey);
      this.seqMap.delete(firstKey);

      if (relativeAge.size == 0) { // 如果当前层级已经被清空，那么下次删除的位置就要更上一层及
        this.canDeleteAgeGroupKey++;
      }
    }
    // init the new element
    item = {
      seq: 1,
      key: key,
      value: value
    }
    this.canDeleteAgeGroupKey = 1;
  } else { // 存在，则更新value
    item.value = value
  }
  // 提升该元素的年龄层级
  this.addAge(item)
  return this.seqMap.set(key, item)
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */