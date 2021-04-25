import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'limit'
})

export class LimitPipe implements PipeTransform {
    public transform(value: string, maxLen?: number): any {
        maxLen = maxLen || 10;
        value = value || '';
        return value.length > maxLen ? (value.slice(0, maxLen) + '...') : value;
    }
}
