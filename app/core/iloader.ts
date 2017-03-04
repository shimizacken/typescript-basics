
export interface ILoader<T> {
    load<T>(parameter: any) : Promise<T>
}