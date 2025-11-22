import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Certifica-te que criaste este ficheiro (issue.ts) como sugeri antes
import { Issue } from '../Models/issue'; 

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  // URL da API de Issues, a apontar para o teu backend
  private theServerURL = "http://localhost:5250/api/Issues/";

  constructor(private webApiClient: HttpClient) { }

  /**
   * Obtém todas as issues da API
   */
  getAllIssues(): Observable<Issue[]> {
    return this.webApiClient.get<Issue[]>(this.theServerURL);
  }
}