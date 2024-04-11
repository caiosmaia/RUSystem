import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.FocusEvent;
import java.awt.event.FocusListener;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;


public class Estoque extends JPanel {
    private JTextField searchField;

    public Estoque() {
        setLayout(new BorderLayout());

        JPanel searchPanel = new JPanel(new BorderLayout());
        searchField = new JTextField();
        setSearchPlaceholder("Buscar:");
        searchField.setPreferredSize(new Dimension(200, 30));
        searchField.setBorder(BorderFactory.createEmptyBorder(5, 5, 5, 5));
        searchField.setFont(new Font("Arial", Font.PLAIN, 14));
        searchPanel.add(searchField, BorderLayout.CENTER);

        JButton addButton = new JButton("Adicionar");
        addButton.setPreferredSize(new Dimension(100, 30));
        addButton.setFont(new Font("Arial", Font.PLAIN, 14));
        addButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                new AddEstoqueForm(); // Cria uma instância do formulário de adicionar estoque
            }
        });
        searchPanel.add(addButton, BorderLayout.EAST);

        add(searchPanel, BorderLayout.NORTH);

        JPanel itemsPanel = new JPanel();
        itemsPanel.setLayout(new GridLayout(0, 1, 0, 10));
        itemsPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        for (int i = 0; i < 10; i++) {
            JLabel itemLabel = new JLabel("Item " + i);
            itemLabel.setFont(new Font("Arial", Font.PLAIN, 14));
            itemsPanel.add(itemLabel);
        }
        JScrollPane scrollPane = new JScrollPane(itemsPanel);
        add(scrollPane, BorderLayout.CENTER);
    }

    
    private void setSearchPlaceholder(String placeholder) {
        searchField.setText(placeholder);
        searchField.setForeground(Color.GRAY);
        searchField.addFocusListener(new FocusListener() {
            @Override
            public void focusGained(FocusEvent e) {
                if (searchField.getText().equals(placeholder)) {
                    searchField.setText("");
                    searchField.setForeground(Color.BLACK);
                }
            }

            @Override
            public void focusLost(FocusEvent e) {
                if (searchField.getText().isEmpty()) {
                    searchField.setText(placeholder);
                    searchField.setForeground(Color.GRAY);
                }
            }
        });
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Estoque");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 300);
        frame.setContentPane(new Estoque());
        frame.setVisible(true);
    }
}
