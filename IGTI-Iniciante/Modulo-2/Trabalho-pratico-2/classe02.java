import java.util.Scanner;

public class classe02 {

    public static void main(String[] args) {
        int valor1 = 0;
        int valor2 = 50; 
        int valor3 = 0;
        
        System.out.println("Digite o primeiro para a variável valor1:");
        valor1 = extracted().nextInt();
        valor2 += valor1;
    
        if (valor1 % 2 == 0)
        valor3 = valor1 * 4;
     else if (valor1 % 3 == 0)
        valor3 = valor2 * 3;
     else
        valor3 = valor2;

        System.out.printf("Valor da variável valor3 é: %d.", valor3);

    }

    private static Scanner extracted() {
        return new Scanner(System.in);
    }
}
