import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateProductsComponent } from './add-update-products.component';

describe('AddUpdateProductsComponent', () => {
  let component: AddUpdateProductsComponent;
  let fixture: ComponentFixture<AddUpdateProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
