# lodash-mixins
Yet Another Lodash Mixins. Mixins i use in my pet-projects

## immutabilize lodash
* `spliceStr(str, start, len, replacer)` — immutable splice
* `merged(o1, o2)` — immutable merge
* `set_(o, path)` — immutable set
* `mergedDeep(o1, path, o2)` — immutable merge object by path
* `concatArrDeep(o, path, arr)` — immutable concat array by path
* `filteredDeep(o, path, fn)` — immutable filter by path

## custom things
* `forDo(o, key, val, cb)` — run callback for matched values
* `omitEvery(o, keys)` — omit for collection (omit keys in every object-item of array)
* `mappedValuesFn(o, map)` — map values by custom map function. Where `map` is an `Object {key:(oldVal)=>'newVal'}`

## another libs wrappers
* `camelizeKeys`
* `mappedKeys(o, map)` — custom declarative map keys. Where `map` is an `Object {oldKey:'newKey'}`
