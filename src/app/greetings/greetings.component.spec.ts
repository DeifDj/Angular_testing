import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GreetingsComponent } from './greetings.component';  // Ajusta la ruta
import { By } from '@angular/platform-browser';

describe('GreetingsComponent', () => {
  let component: GreetingsComponent;  // Asegúrate de que esté correctamente referenciada
  let fixture: ComponentFixture<GreetingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreetingsComponent]
    });

    fixture = TestBed.createComponent(GreetingsComponent);
    component = fixture.componentInstance;
  });

  it('should create the Greetings component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default message value', () => {
    fixture.detectChanges();
    const mensajeElement = fixture.debugElement.query(By.css('.mensaje')).nativeElement;
    expect(mensajeElement.textContent).toBe('Valor por defecto');
  });
});