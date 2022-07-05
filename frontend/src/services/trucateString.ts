export function trucateString(text_value: string, text_length: number):string {
    if(text_value.length <= text_length)
        return text_value
    else
        return text_value.slice(0, text_length) + '...'
}