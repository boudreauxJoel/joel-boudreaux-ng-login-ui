import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertCase'
})
export class ConvertCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/(^\w{1})/, (match) => match.toUpperCase());
  }

}
