import { ModeloComponent } from './modelo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ModeloComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [ModeloComponent]
})
export class ModeloModule {}
