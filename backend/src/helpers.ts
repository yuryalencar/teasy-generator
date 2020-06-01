const isUndefined = (valueCheck: any) => {
    return valueCheck === undefined;
}

const isNull = (valueCheck: any) => {
    return valueCheck == null;
}

export { isUndefined, isNull };
