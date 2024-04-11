import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class AddEstoqueForm extends JFrame {
    private JTextField categoriaField;
    private JTextField nomeField;
    private JTextField cpfFuncionarioField;
    private JTextField nomeFuncaoField;
    private JTextField idProdutoField;

    public AddEstoqueForm() {
        setTitle("Adicionar Estoque");
        setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
        setSize(400, 300);

        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(0, 2, 10, 10)); // GridLayout com espaçamento de 10 pixels

        JLabel categoriaLabel = new JLabel("Categoria:");
        categoriaField = new JTextField();
        JLabel nomeLabel = new JLabel("Nome:");
        nomeField = new JTextField();
        JLabel cpfFuncionarioLabel = new JLabel("CPF Funcionário:");
        cpfFuncionarioField = new JTextField();
        JLabel nomeFuncaoLabel = new JLabel("Nome Função:");
        nomeFuncaoField = new JTextField();
        JLabel idProdutoLabel = new JLabel("ID Produto:");
        idProdutoField = new JTextField();

        panel.add(categoriaLabel);
        panel.add(categoriaField);
        panel.add(nomeLabel);
        panel.add(nomeField);
        panel.add(cpfFuncionarioLabel);
        panel.add(cpfFuncionarioField);
        panel.add(nomeFuncaoLabel);
        panel.add(nomeFuncaoField);
        panel.add(idProdutoLabel);
        panel.add(idProdutoField);

        JButton addButton = new JButton("Adicionar");
        addButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Adicionar lógica para adicionar o item ao estoque
                // Você precisará usar os dados dos campos para isso
                dispose(); // Fecha o formulário após adicionar
            }
        });

        panel.add(addButton);

        setContentPane(panel);
        setVisible(true);
    }

    public static void main(String[] args) {
        new AddEstoqueForm();
    }
}
