import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ToastrService } from 'ngx-toastr';
import { SocketclientService } from 'src/socketclient.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {

  public gridData: any[] = [
    {
      ProductID: 1,
      ProductName: "Chai",
      SupplierID: 1,
      CategoryID: 1,
      QuantityPerUnit: "10 boxes x 20 bags",
      UnitPrice: 18,
      UnitsInStock: 39,
      UnitsOnOrder: 0,
      ReorderLevel: 10,
      Discontinued: false,
      Category: {
        CategoryID: 1,
        CategoryName: "Beverages",
        Description: "Soft drinks, coffees, teas, beers, and ales",
      },
      FirstOrderedOn: new Date(1996, 8, 20),
    },
    {
      ProductID: 2,
      ProductName: "Chang",
      SupplierID: 1,
      CategoryID: 1,
      QuantityPerUnit: "24 - 12 oz bottles",
      UnitPrice: 19,
      UnitsInStock: 17,
      UnitsOnOrder: 40,
      ReorderLevel: 25,
      Discontinued: false,
      Category: {
        CategoryID: 1,
        CategoryName: "Beverages",
        Description: "Soft drinks, coffees, teas, beers, and ales",
      },
      FirstOrderedOn: new Date(1996, 7, 12),
    },];
  constructor(private http: HttpClient, private apollo: Apollo, private toastr: ToastrService, private socketcluster: SocketclientService) {
    //    this.showSuccess();
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'gql request sended !');

    this.apollo.query({
      query: gql`query {
        getTasks{
        id
        }
      }`
    }).subscribe(({ data, loading }) => {
      console.log(data);
    });
  }
  public onButtonClick(): void {
    console.log('click');


  }
}
