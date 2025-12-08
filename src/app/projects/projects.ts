import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../Models/project.interface';
import { ProjectServices } from '../Services/project-services';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit {

  projects$!: Observable<Project[]>

  constructor(private projectService: ProjectServices){}

  ngOnInit(): void {
    this.projects$ = this.projectService.getProjects()
  }

}
