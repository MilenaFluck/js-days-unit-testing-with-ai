import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MocksAndSpiesHttpService {

  private readonly baseUrl = `${environment.baseUrl}/parks`;

  constructor(private httpClient: HttpClient) {}

  public get(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.baseUrl}`);
  }
}
