import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsectionComponent } from './contentsection.component';

describe('ContentsectionComponent', () => {
  let component: ContentsectionComponent;
  let fixture: ComponentFixture<ContentsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
