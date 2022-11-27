import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivategroupComponent } from './privategroup.component';

describe('PrivategroupComponent', () => {
  let component: PrivategroupComponent;
  let fixture: ComponentFixture<PrivategroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivategroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivategroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
