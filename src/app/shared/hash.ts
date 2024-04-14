export class Hash {
    static crypt(text: string): string {
        return text.split('')
            .map((text) => text.split('').map(c => c.charCodeAt(0)))
            .map(n => ("0" + Number(n).toString(16)).substr(-2))
            .join('');
    }

    static uncrypt(encoded: string): string {
        return encoded.match(/.{1,2}/g)
            ?.map(hex => parseInt(hex, 16))
            .map(charCode => String.fromCharCode(charCode))
            .join('') ?? '';
    }
}