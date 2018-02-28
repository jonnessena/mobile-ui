import { MobileService } from '../service/mobile.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobileCreateComponent } from './mobile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatToolbarModule,
    MatCommonModule,
    MatFormField,
    MatTooltipModule,
    MatTabsModule,
    MatTableModule,
    MatStepperModule,
    MatSortModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSidenavModule,
    MatSelectModule,
    MatRippleModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatMenuModule,
    MatNativeDateModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatExpansionModule,
    MatDividerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatChipsModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule } from '@angular/material';
    import { CommonModule } from '@angular/common';
    import { MobileRepository } from '../core/repository';
    
    @NgModule({
        imports: [
            FormsModule,
            ReactiveFormsModule,
            FlexLayoutModule,
            MatAutocompleteModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCardModule,
            MatCheckboxModule,
            MatChipsModule,
            MatDatepickerModule,
            MatDialogModule,
            MatDividerModule,
            MatExpansionModule,
            MatGridListModule,
            MatIconModule,
            MatInputModule,
            MatListModule,
            MatMenuModule,
            MatNativeDateModule,
            MatPaginatorModule,
            MatProgressBarModule,
            MatProgressSpinnerModule,
            MatRadioModule,
            MatRippleModule,
            MatSelectModule,
            MatSidenavModule,
            MatSliderModule,
            MatSlideToggleModule,
            MatSnackBarModule,
            MatSortModule,
            MatStepperModule,
            MatTableModule,
            MatTabsModule,
            MatToolbarModule,
            MatTooltipModule,
            CommonModule
        ],
        exports: [MobileCreateComponent],
        declarations: [MobileCreateComponent],
        providers: [MobileService, MobileRepository]
    })
    export class MobileCreateModule {}
    