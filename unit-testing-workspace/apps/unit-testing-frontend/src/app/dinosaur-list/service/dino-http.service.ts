import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { Dino } from '../model/dino-view.model';

@Injectable({
  providedIn: 'root'
})
export class DinoHttpService {

  private readonly baseUrl = `${environment.baseUrl}/dino`;

  constructor(private httpClient: HttpClient) {}

  public getDino(id: number): Observable<Dino> {
    return this.httpClient.get<Dino>(`${this.baseUrl}/${id}`);
  }
}
