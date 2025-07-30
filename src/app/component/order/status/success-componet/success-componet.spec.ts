import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessComponet } from './success-componet';

describe('SuccessComponet', () => {
  let component: SuccessComponet;
  let fixture: ComponentFixture<SuccessComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessComponet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
