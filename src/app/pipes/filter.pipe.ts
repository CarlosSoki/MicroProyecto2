import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultProduct=[];
    for(const product of value){
      
     if(product.ingredient[0].name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultProduct.push(product);
       }
      
      

    }
    return resultProduct;
  }

}
