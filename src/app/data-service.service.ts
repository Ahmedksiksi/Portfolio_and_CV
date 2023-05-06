import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
//   urls = 'http://localhost:5000/product/';

//   constructor(private http : HttpClient) {  } 

//   create(product:any):Observable<any>{

//     return this.http.post<any>("http://localhost:5000/product/create",product);
//   }

//   all(){
//     return this.http.get(this.urls + 'all');
//   }

//   delete(id: any){
//     return this.http.delete(this.urls + 'delete/' + id);
//   }

//   update(id: any){
//     return this.http.put(this.urls + 'update/' + id, null);
//   }
//   getProductById(id: any){ 
//     return this.http.get(this.urls + 'getbyid/'+id);
//   }
// }
}
