import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit{
  myTitle = 'This title is from the component';

  productsReal: any[] = [];
  constructor(private http: HttpClient){}

  getProductDetails(id:number){
    console.log('ID', id);
  }

  ngOnInit(){
  this.http.get<any>('https://cms.antoinesoumare.me/api/products?populate=*').subscribe(res =>{
    console.log(res);
    this.productsReal = res.data;
  })
  }

  products: any[] = [
    {
      id: 1,
      title: '85 inch TV',
      price: 1999,
      image:
        'https://cdn.thewirecutter.com/wp-content/media/2022/10/lcd-led-tv-2048px-0943-3x2-1.jpg',
      description: 'foejdpejdpkdpoekdpoekdk',
    },
    {
      id: 2,
      title: '65 inch TV',
      price: 999,
      image:
        'https://cdn.thewirecutter.com/wp-content/media/2022/10/lcd-led-tv-2048px-0943-3x2-1.jpg',
      description: 'foejdpejdpkdpoekdpoekdk',
    },
    {
      id: 3,
      title: '25 inch TV',
      price: 99,
      image:
        'https://cdn.thewirecutter.com/wp-content/media/2022/10/lcd-led-tv-2048px-0943-3x2-1.jpg',
      description: 'foejdpejdpkdpoekdpoekdk',
    },
  ];
}
