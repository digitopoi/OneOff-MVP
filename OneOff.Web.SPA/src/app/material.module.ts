import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule
  } from '@angular/material';

  @NgModule({
    imports: [
      MatButtonModule,
      MatMenuModule,
      MatFormFieldModule,
      MatInputModule,
      MatToolbarModule,
      MatIconModule,
      MatTableModule,
      MatCardModule
    ],
    exports: [
      MatButtonModule,
      MatMenuModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatFormFieldModule,
      MatTableModule,
      MatInputModule
    ]
  })
  export class MaterialModule {}
