import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const chaine = args.toLowerCase();
    return chaine ? value.filter((item) => item.name.toLowerCase().indexOf(chaine) !== -1) : value;
  }

}
