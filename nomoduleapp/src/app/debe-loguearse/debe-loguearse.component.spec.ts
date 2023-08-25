import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebeLoguearseComponent } from './debe-loguearse.component';

describe('DebeLoguearseComponent', () => {
  let component: DebeLoguearseComponent;
  let fixture: ComponentFixture<DebeLoguearseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DebeLoguearseComponent]
    });
    fixture = TestBed.createComponent(DebeLoguearseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
