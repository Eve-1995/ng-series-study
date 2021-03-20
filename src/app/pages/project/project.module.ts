import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProjectRoutingModule } from './project-routing.module';

import { IntroductionComponent } from './introduction/introduction.component';
import { AuthorComponent } from './author/author.component';
import { ContentFillModule } from 'src/app/libs/content-fill';

const COMPONENTS_DECLARATIONS = [IntroductionComponent, AuthorComponent];
const DIRECTIVE_DECLARATIONS = [];
const COMPONENTS_ENTRY = [];

@NgModule({
  imports: [SharedModule, ContentFillModule, ProjectRoutingModule],
  declarations: [COMPONENTS_DECLARATIONS, DIRECTIVE_DECLARATIONS, COMPONENTS_ENTRY],
  entryComponents: COMPONENTS_ENTRY
})
export class ProjectModule {}
