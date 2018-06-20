import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { ShowsComponent } from './shows/shows.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [{
    path: 'shows',
    component: ShowsComponent,
  }, {
    path: 'questions',
    component: QuestionsComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  ShowsComponent,
  QuestionsComponent,
];
