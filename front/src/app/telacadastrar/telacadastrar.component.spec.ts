import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelacadastrarComponent } from './telacadastrar.component';

describe('TelacadastrarComponent', () => {
  let component: TelacadastrarComponent;
  let fixture: ComponentFixture<TelacadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelacadastrarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelacadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
