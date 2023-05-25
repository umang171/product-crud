import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemViewComponent } from './product-item-view.component';

describe('ProductItemViewComponent', () => {
  let component: ProductItemViewComponent;
  let fixture: ComponentFixture<ProductItemViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductItemViewComponent]
    });
    fixture = TestBed.createComponent(ProductItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
