'worklet';

class ExpensiMark {
  constructor() {
    this.dupa = 1;
  }

  method() {
    console.log('Hello from ' + global._WORKLET);
    this.dupa += 1;
    console.log(this.dupa);
  }
}

export { ExpensiMark };
