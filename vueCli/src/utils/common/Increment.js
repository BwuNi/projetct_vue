function Increment(min = 0, max) {
 return{
     _value:initOrigin(min,max),
     _max:max,
     _min:min,
     getValue
 }
}

function initOrigin(min, max) {
    return !max
        ? min
        : min + Math.floor(Math.random() * (max - min))
}

function getValue() {
    return this._max
        ? this._value < this._max
            ? ++this._value
            : this._value = this._min
        : ++this._value
}

export default Increment
