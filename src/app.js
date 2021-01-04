export default function orderByProps(obj, [...sort]) {
  const arrProps = [];
  for (let i = 0; i < sort.length; i++) {
    for (const prop in obj) {
      if (sort[i] === prop) {
        arrProps.push({ key: prop, value: obj[prop] });
        delete obj[prop];
      }
    }
  }
  const restProps = Object.entries(obj);
  restProps.sort();
  for (let i = 0; i < restProps.length; i++) {
    arrProps.push({ key: restProps[i][0], value: restProps[i][1] });
  }
  return arrProps;
}
