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
  set currendIndex(v){
    if(typeof v!=='number'|| !Number.isInteger(v) || v<0){
      throw new TypeError();
    }
    this._currendIndex = v;
  }
  get nextIndex(){
    return (this._currendIndex+1)%(this._images.length-1);
  }
  get prevIndex(){
    return (this._currendIndex-1+this._images.length)%this._images.length;
  }
}