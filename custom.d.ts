declare module "*.svg" {
    const content: any;
    export default content;
}

declare module '@public/*' {
    const content: string;
    export default content;
}