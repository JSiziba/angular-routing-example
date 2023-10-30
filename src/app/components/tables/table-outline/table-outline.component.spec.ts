import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOutlineComponent } from './table-outline.component';

describe('TableOutlineComponent', () => {
  let component: TableOutlineComponent;
  let fixture: ComponentFixture<TableOutlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableOutlineComponent]
    });
    fixture = TestBed.createComponent(TableOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
