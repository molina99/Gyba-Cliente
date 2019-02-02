import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookPageComponent } from './book-page.component';

const routes: Routes = [
    {
        path: '',
        component: BookPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookPageRoutingModule {}
