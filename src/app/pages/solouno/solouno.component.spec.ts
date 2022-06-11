import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolounoComponent } from './solouno.component';

describe('SolounoComponent', () => {
  let component: SolounoComponent;
  let fixture: ComponentFixture<SolounoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolounoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolounoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
