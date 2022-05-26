class MyArray {
  length: number;
  data: any;
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index: number) {
    return this.data[index];
  }
  push(item: any) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  deleteAtIndex(index: number) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index: number) {
    if (index > this.length - 1 || index < 0) {
      return false;
    }
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.data.pop();
    this.length--;
  }
}