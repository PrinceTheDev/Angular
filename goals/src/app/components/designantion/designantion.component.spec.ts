import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignantionComponent } from './designantion.component';

describe('DesignantionComponent', () => {
  let component: DesignantionComponent;
  let fixture: ComponentFixture<DesignantionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignantionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignantionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
