
export function update<T>(x: T, props: any): T {
    let newObj: any = {};
    for (let k in x) newObj[k] = (x as any)[k];
    for (let k in props) newObj[k] = props[k];
    return newObj as T;
}
