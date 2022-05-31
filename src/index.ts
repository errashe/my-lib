import { plainToClass } from 'class-transformer';

export class Data {
    Field!: string;
}

export function transform<T>(type: { new(): T }, raw: any): Promise<T> {
    return new Promise((rs, rj) => {
        const res: T = plainToClass(type, raw);

        rs(res);
    })
}