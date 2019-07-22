import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterArticleBuilderComponent } from './ajouter-article-builder.component';

describe('AjouterArticleBuilderComponent', () => {
  let component: AjouterArticleBuilderComponent;
  let fixture: ComponentFixture<AjouterArticleBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterArticleBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterArticleBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
