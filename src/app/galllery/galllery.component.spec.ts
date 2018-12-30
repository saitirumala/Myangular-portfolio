import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallleryComponent } from './galllery.component';

describe('GallleryComponent', () => {
  let component: GallleryComponent;
  let fixture: ComponentFixture<GallleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
