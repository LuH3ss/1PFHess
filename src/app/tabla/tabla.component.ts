import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modules/alumno';
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  public dataSource: Alumno[] = [
    {id: 1, 
    fullName: 'Lucas' + 'Hess', 
    Curso: 'Angular', 
    Estado: 'Sudandola'},
  
  ];
  displayedColumns: string[] = ['id', 'fullName', 'Curso', 'Estado'];
  constructor() { }

  ngOnInit(): void {
  }

}
