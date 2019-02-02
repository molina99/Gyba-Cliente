import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class BookService{
    constructor(private http:HttpClient){
    }

    consult (){
        const url = 'http://localhost:8089/books';
        return this.http.get(url);
    }
    insert (data:any){
      const url = 'http://localhost:8089/books';
      return this.http.post(url,JSON.stringify(data));
    }

    delete (){
        const url = 'http://localhost:8089/books';
        return this.http.get(url);
    }

    update (data: any){
        const url = 'http://localhost:8089/books';
        return this.http.get(url, data);
    }

}

