import _ from 'lodash'
import { camelizeKeys } from 'humps'
import mapKeys from 'remap-keys'

const mergedDeep = (o1, path, o2) => {
    const o1_ = _.cloneDeep(o1)
    const o2Val = _.cloneDeep(_.get(o1, path))
    const mergedVal = _.merge(o2Val, o2)
    return _.set(o1_, path, mergedVal)
}

const mergedDeepFn = (o1, path, getO2) => {
    const o1_ = _.cloneDeep(o1)
    const o2Val = _.cloneDeep(_.get(o1, path))
    const mergedVal = _.merge(o2Val, getO2(o2Val))
    return _.set(o1_, path, mergedVal)
}

_.mixin({
    // run callback for matched values at deep paths
    forDo: (collection, prop, value, callback) =>
        _.forEach(collection, (obj, key) => {
            if (_.get(obj, prop) === value) callback(key)
        }),

    // immutable splice
    spliceStr: (str, from, cmt, replacer) =>
        Array.from(str).splice(from, cmt, replacer).join(''),

    // immutable merge
    merged: (o1, o2) => _.merge(_.cloneDeep(o1), o2),

    // immutable set
    set_: (o, path, val) => _.set(_.cloneDeep(o), path, val),

    //  immutable set for val as object to merge
    mergedDeep: (o1, path, o2) => {
        return (_.isFunction(o2) ? mergedDeepFn(o1, path, o2) : mergedDeep(o1, path, o2))
    },

    //  immutable set for val as object to merge
    concatArrDeep: (o1, path, arr) => {
        const o1_ = _.cloneDeep(o1)
        const o2Val = _.cloneDeep(_.get(o1, path))
        const mergedVal = _.concat(o2Val, arr)
        return _.set(o1_, path, mergedVal)
    },

    //  immutable set for val as object to merge
    filteredDeep: (o1, path, filterFn) => {
        const o1_ = _.cloneDeep(o1)
        const o2Val = _.cloneDeep(_.get(o1, path))
        const filteredVal = _.isPlainObject(o2Val) ? _.pickBy(o2Val, filterFn) : _.filter(o2Val, filterFn)
        return _.set(o1_, path, filteredVal)
    },

    camelizeKeys: o => camelizeKeys(o),

    // immutable custom declarative map keys
    mappedKeys: (o, map) => mapKeys(o, map),

    // immutable map values by custom map function
    mappedValuesFn: (o, map) => _.mapValues(o, (val, key) =>
        map.hasOwnProperty(key) ? map[key](val) : val),

    // omit for collection (omit keys in every object-item of array)
    omitEvery: (arr, keys) => _.map(o, _.partialRight(_.omit, keys))
})
