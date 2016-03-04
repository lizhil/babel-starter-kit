
class Animal {
  constructor( type ){
    this.type = type;
  }

  say( word ){
    let word = ''
    alert('${this.type} say ${word} to you!');
  }
}

let bull = new Animal('bull');

bull.say('miemie....');
