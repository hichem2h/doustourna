export interface chapter {
    name: string,
    description: string,
    sections:section[]
}
export interface section {
    name: string,
    articles:article[]

}
export interface article{
    number:number,
    name: string,
    content: string,
    videoLink?:string,
    chapter?:string,
    section?:string,
    date?:Date
}