import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100';

  constructor(private http: HttpClient) {}

  get apiListAllPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) => {
        res.results.map((resPokemons: any) => {
          this.apiGetPokens(resPokemons.url).subscribe(
            res => resPokemons.status = res
          );
        });
      })
    );
  }

  public apiGetPokens(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map((res) => res),
      catchError((error) => {
        console.error('Erro na requisição:', error);
        return throwError(() => error); // Propaga o erro para o subscribe
      })
    );
  }
}
