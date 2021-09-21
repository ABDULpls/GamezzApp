export interface IOptions {
    closeButton?: boolean,
    timeout?: number,
    showDuration?: number,
    hideDuration?: number,
    type?: string,
}

export interface IAnimateOptions {
    timing: (timeFraction: number) => number,
    draw: (progress: number) => void,
    duration: number,
}

export interface IToastify {
    show: (message: string, options: IOptions) => void,
    success: (message: string) => void,
    warning: (message: string) => void,
    error: (message: string) => void
}