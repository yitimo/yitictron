import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timestamp'
})

export class TimestampPipe implements PipeTransform {
    public transform(value: number): any {
        return new Date(value);
    }
}
