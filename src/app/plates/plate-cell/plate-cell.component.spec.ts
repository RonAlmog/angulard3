import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateCellComponent } from './plate-cell.component';

describe('PlateCellComponent', () => {
  let component: PlateCellComponent;
  let fixture: ComponentFixture<PlateCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlateCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlateCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
