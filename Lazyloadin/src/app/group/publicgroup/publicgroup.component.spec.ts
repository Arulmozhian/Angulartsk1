import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicgroupComponent } from './publicgroup.component';

describe('PublicgroupComponent', () => {
  let component: PublicgroupComponent;
  let fixture: ComponentFixture<PublicgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
