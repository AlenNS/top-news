import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noData'
})
export class NoDataPipe implements PipeTransform {

  transform(value: any, fallback: string): any {
    if (value === null || value === undefined || value === '') {
      return fallback;
    }

    return value;
  }

}
