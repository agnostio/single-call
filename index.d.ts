
declare function single(name:string, action: () => void, time:number): Promise<void>;
export default single;