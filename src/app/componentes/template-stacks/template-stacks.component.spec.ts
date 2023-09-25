import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateStacksComponent } from './template-stacks.component';

describe('TemplateStacksComponent', () => {
  let component: TemplateStacksComponent;
  let fixture: ComponentFixture<TemplateStacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateStacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateStacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
