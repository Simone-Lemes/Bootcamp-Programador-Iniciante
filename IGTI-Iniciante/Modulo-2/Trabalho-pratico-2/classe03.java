import java.util.Scanner;

public class classe03 {

    public static void main(String[] args) {
     double salarioFixo = 3500.00;
     double comissao = 0.05;
     double totalVendas = 0;
     double salarioTotal = 0;
     double auxilioCreche = 450.00;
     String nome;
     char possuiFilhos;

        
        System.out.println("Digite o nome do vendedor");
        nome = extracted().nextLine();
        
        System.out.println("O vendedor possui filhos (S - Sim; N - Não)?");
        possuiFilhos = extracted().nextLine().charAt(0);

        System.out.println("Digite o total de vendas do vendedor");
        totalVendas = extracted().nextDouble();

        if (totalVendas >= 40000.00){
            if (possuiFilhos == 'S' || possuiFilhos == 's')
             salarioTotal = salarioFixo + (totalVendas * comissao) + auxilioCreche;
            else 
             salarioTotal = salarioFixo + (totalVendas * comissao);
           }
           else {
            if (possuiFilhos == 'S' || possuiFilhos == 's')
             salarioTotal = salarioFixo + auxilioCreche;
            else 
             salarioTotal = salarioFixo;


        System.out.printf("O salário do(a) vendedor(a) %s é de: %.2f.", nome, salarioTotal);
           }
    }

    private static Scanner extracted() {
        return new Scanner(System.in);
    }
}
