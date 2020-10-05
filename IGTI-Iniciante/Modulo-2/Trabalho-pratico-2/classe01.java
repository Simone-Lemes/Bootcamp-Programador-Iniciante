import java.util.Scanner;

public class classe01 {

    public static void main(String[] args) {
        int n1 = 8;
        int n2 = 5;
        System.out.println("Digite um número inteiro:");
        n1 += extracted().nextInt();
        n2 = n2 + n1;
        System.out.printf("Valor de n1: %d. \nValor de n2: %d.", n1, n2);

    }

    private static Scanner extracted() {
        return new Scanner(System.in);
    }
}
