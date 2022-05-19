import { ReactiveFormsModule } from '@angular/forms';
import { ColecaoComponent } from './colecao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ColecaoComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [ColecaoComponent]
})
export class ColecaoModule {}
