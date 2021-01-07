export default function orderByProps(obj, [...sort]) {
  const objReplica = {};
  Object.assign(objReplica, obj);
  const arrProps = [];
  for (let i = 0; i < sort.length; i++) {
    for (const prop in objReplica) {
      if (sort[i] === prop) {
        arrProps.push({ key: prop, value: objReplica[prop] });
        delete objReplica[prop];
      }
    }
  }
  const restProps = Object.entries(objReplica);
  restProps.sort();
  for (let i = 0; i < restProps.length; i++) {
    arrProps.push({ key: restProps[i][0], value: restProps[i][1] });
  }
  return arrProps;
}
