import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add'
})
export class AddPipe implements PipeTransform {

  transform(value: any,add:number, args?: any): any {
    let add1 = add;
    return add*value;
  }

}
