import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUsuarioDialogComponent } from './cadastro-usuario-dialog.component';

describe('CadastroUsuarioDialogComponent', () => {
  let component: CadastroUsuarioDialogComponent;
  let fixture: ComponentFixture<CadastroUsuarioDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroUsuarioDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroUsuarioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
