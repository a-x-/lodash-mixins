# lodash-mixins
Yet Another Lodash Mixins. Mixins i use in my pet-projects

[immutabilize]
[custom]
[wrappers]

* `spliceStr(str, start, len, replacer)` — immutable splice
* `merged(o1, o2)` — immutable merge
* `set_(o, path)` — immutable set
* `mergedDeep(o1, path, o2)` — immutable merge object by path
* `concatArrDeep(o, path, arr)` — immutable concat array by path
* `filteredDeep(o, path, fn)` — immutable filter by path
* `forDo(o, key, val, cb)` — [custom] run callback for matched values
* `omitEvery(o, keys)` — omit for collection (omit keys in every object-item of array)
* `mappedValuesFn(o, map)` — map values by custom map function. <br/>Where `map` is an `Object {key:(oldVal)=>'newVal'}`
* `camelizeKeys` — [wrappers] camelize keys in object. [humps](https://github.com/domchristie/humps)
* `mappedKeys(o, map)` — [wrappers] custom declarative map keys. <br/>Where `map` is an `Object {oldKey:'newKey'}`. [remap-keys](https://github.com/diasdavid/remap-keys)
