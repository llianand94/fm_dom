class Slider{
  constructor(images=[], currendIndex=0){
    this._images = images;
    this._currendIndex = currendIndex;
  }
  get images(){
    return this._images;
  }
  get currendIndex(){
    return this._currendIndex;
  }
  get currendSlide(){
    return this._images[this.currendIndex];
  }
  set currendIndex(value){
    if(typeof value!=='number'|| Number.isInteger(v)|| v<0){
      throw TypeError('Value');
    }
    this._currendIndex = v;
  }
  next(){
    return this._currendIndex+1;
  }
  prev(){
    return this._currendIndex-1;
  }
}