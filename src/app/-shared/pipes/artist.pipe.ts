import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'artist'
})
export class ArtistPipe implements PipeTransform {
    public transform(value: any[]): any {
        let rs = '';
        value.forEach((i) => {
            rs += i.name + ',';
        });
        return rs.slice(0, rs.length - 1);
    }
}
