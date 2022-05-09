import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  protected UrlServiceMenu: string = "http://localhost:3000/"
  header = new HttpHeaders();

  constructor(private http: HttpClient) { 
    this.header.set('Access-Control-Allow-Origin', '*');
  }

  obterMenus(): Observable<Menu[]>{

    return this.http.get<Menu[]>(this.UrlServiceMenu + "menus");

  }
  post(menu: Menu): Observable<Menu>
  {
   
    return this.http.post<Menu>(this.UrlServiceMenu  + "menus", menu,{ headers: this.header });
  }
  update(id: string, menu: Menu): Observable<Menu>
  {
   
    return this.http.put<Menu>(this.UrlServiceMenu  + "menus/" + id, menu,{ headers: this.header });
  }
  delete(id: string): Observable<any>
  {
   
    return this.http.delete(this.UrlServiceMenu  + "menus/" + id,{ headers: this.header });
  }

}