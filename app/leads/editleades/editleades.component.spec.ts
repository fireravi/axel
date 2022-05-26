import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditleadesComponent } from './editleades.component';

describe('EditleadesComponent', () => {
  let component: EditleadesComponent;
  let fixture: ComponentFixture<EditleadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditleadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditleadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
