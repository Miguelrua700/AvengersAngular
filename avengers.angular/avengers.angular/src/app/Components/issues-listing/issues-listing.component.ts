// Conteúdo atualizado para src/app/Components/issues-listing/issues-listing.component.ts
import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common'; // Importar módulos
import { Issue } from '../../Models/issue'; // Importar o modelo
import { IssueService } from '../../Services/issue.service'; // Importar o serviço

@Component({
  selector: 'app-issues-listing',
  standalone: true,
  // 1. Adicionar CommonModule para NgIf, NgFor, etc.
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './issues-listing.component.html',
  styleUrl: './issues-listing.component.css'
})
export class IssuesListingComponent implements OnInit { // 2. Implementar OnInit

  allIssues: Issue[] = []; // Array para guardar todas as issues
  filterStatus: 'All' | 'Open' = 'All'; // Estado do filtro

  // 3. Injetar o serviço
  constructor(private _service: IssueService) { }

  // 4. Carregar os dados quando o componente inicia
  ngOnInit(): void {
    this._service.getAllIssues().subscribe(response => {
      this.allIssues = response;
    });
  }

  /**
   * Filtra a lista de issues com base no estado do filtro.
   * Responde ao pedido de "todas ou somente as nao resolvidas".
   */
  get filteredIssues(): Issue[] {
    if (this.filterStatus === 'Open') {
      // "Não resolvidas" são todas as que não estão 'Closed'
      return this.allIssues.filter(issue => issue.status !== 'Closed');
    }
    // 'All' retorna todas
    return this.allIssues;
  }
}