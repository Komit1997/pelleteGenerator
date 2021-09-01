import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient ){ }


 

   componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }
  



    getColor(_model):Observable<any>{
      const url ="http://colormind.io/api/"
        let result;
        result ={
          model : 'default'
        };
          
      return this.http.post(url, JSON.stringify(result));  
    
      }
    


   
  
  
    
    }

  

