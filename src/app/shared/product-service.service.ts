import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../shared/product';
import { Observable, throwError } from 'rxjs';
import {retry , catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  httpOptions = {
     headers : new HttpHeaders({
       'Content-Type' : 'application/json'
     })
  }

  getPdoduct(): Observable<Product> {
    return this.http.get<Product>(this.url + '/products')
    .pipe(retry(1),
    catchError(this.handleError));

  }
 getProduct(id): Observable <Product>{
    return this.http.get<Product>(this.url + '/products/' + id)
    .pipe(retry(1),
    catchError(this.handleError));
 }
 createProduct(product): Observable <Product>{
    return this.http.post <Product> (this.url + '/products', JSON.stringify(product), this.httpOptions)
    .pipe(retry(1) , catchError(this.handleError));
 }
deleteProduct(id){

  return this.http.delete<Product>(this.url + '/products/' +id, this.httpOptions)
  .pipe(retry(1),
  catchError(this.handleError));

 }

updateProduct(id, product) : Observable<Product>{
  return this.http.put<Product>(this.url + '/products/' + id, JSON.stringify(product) , this.httpOptions)
  .pipe(retry(1),
  catchError(this.handleError));
}

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
