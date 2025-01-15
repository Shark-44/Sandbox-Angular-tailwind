import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffetOneComponent } from './effet-one.component';

describe('EffetOneComponent', () => {
  let component: EffetOneComponent;
  let fixture: ComponentFixture<EffetOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffetOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffetOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
