'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _humps = require('humps');

var _remapKeys = require('remap-keys');

var _remapKeys2 = _interopRequireDefault(_remapKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _mergedDeep = function _mergedDeep(o1, path, o2) {
    var o1_ = _lodash2.default.cloneDeep(o1);
    var o2Val = _lodash2.default.cloneDeep(_lodash2.default.get(o1, path));
    var mergedVal = _lodash2.default.merge(o2Val, o2);
    return _lodash2.default.set(o1_, path, mergedVal);
};

var mergedDeepFn = function mergedDeepFn(o1, path, getO2) {
    var o1_ = _lodash2.default.cloneDeep(o1);
    var o2Val = _lodash2.default.cloneDeep(_lodash2.default.get(o1, path));
    var mergedVal = _lodash2.default.merge(o2Val, getO2(o2Val));
    return _lodash2.default.set(o1_, path, mergedVal);
};

_lodash2.default.mixin({
    // run callback for matched values at deep paths
    forDo: function forDo(collection, prop, value, callback) {
        return _lodash2.default.forEach(collection, function (obj, key) {
            if (_lodash2.default.get(obj, prop) === value) callback(key);
        });
    },

    // immutable splice
    spliceStr: function spliceStr(str, from, cmt, replacer) {
        return Array.from(str).splice(from, cmt, replacer).join('');
    },

    // immutable merge
    merged: function merged(o1, o2) {
        return _lodash2.default.merge(_lodash2.default.cloneDeep(o1), o2);
    },

    // immutable set
    set_: function set_(o, path, val) {
        return _lodash2.default.set(_lodash2.default.cloneDeep(o), path, val);
    },

    //  immutable set for val as object to merge
    mergedDeep: function mergedDeep(o1, path, o2) {
        return _lodash2.default.isFunction(o2) ? mergedDeepFn(o1, path, o2) : _mergedDeep(o1, path, o2);
    },

    //  immutable set for val as object to merge
    concatArrDeep: function concatArrDeep(o1, path, arr) {
        var o1_ = _lodash2.default.cloneDeep(o1);
        var o2Val = _lodash2.default.cloneDeep(_lodash2.default.get(o1, path));
        var mergedVal = _lodash2.default.concat(o2Val, arr);
        return _lodash2.default.set(o1_, path, mergedVal);
    },

    //  immutable set for val as object to merge
    filteredDeep: function filteredDeep(o1, path, filterFn) {
        var o1_ = _lodash2.default.cloneDeep(o1);
        var o2Val = _lodash2.default.cloneDeep(_lodash2.default.get(o1, path));
        var filteredVal = _lodash2.default.isPlainObject(o2Val) ? _lodash2.default.pickBy(o2Val, filterFn) : _lodash2.default.filter(o2Val, filterFn);
        return _lodash2.default.set(o1_, path, filteredVal);
    },

    camelizeKeys: function camelizeKeys(o) {
        return (0, _humps.camelizeKeys)(o);
    },

    // immutable custom declarative map keys
    mappedKeys: function mappedKeys(o, map) {
        return (0, _remapKeys2.default)(o, map);
    },

    // immutable map values by custom map function
    mappedValuesFn: function mappedValuesFn(o, map) {
        return _lodash2.default.mapValues(o, function (val, key) {
            return map.hasOwnProperty(key) ? map[key](val) : val;
        });
    },

    // omit for collection (omit keys in every object-item of array)
    omitEvery: function omitEvery(arr, keys) {
        return _lodash2.default.map(o, _lodash2.default.partialRight(_lodash2.default.omit, keys));
    }
});

