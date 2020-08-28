import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightOwlerComponent } from './night-owler.component';

describe('NightOwlerComponent', () => {
  let component: NightOwlerComponent;
  let fixture: ComponentFixture<NightOwlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightOwlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightOwlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
