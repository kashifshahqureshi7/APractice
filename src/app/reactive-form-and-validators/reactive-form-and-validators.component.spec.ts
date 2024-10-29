import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormAndValidatorsComponent } from './reactive-form-and-validators.component';

describe('ReactiveFormAndValidatorsComponent', () => {
  let component: ReactiveFormAndValidatorsComponent;
  let fixture: ComponentFixture<ReactiveFormAndValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormAndValidatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormAndValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
