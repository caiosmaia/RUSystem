import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

public class Menu extends JFrame {
    private JPanel menuPanel;
    private JPanel contentPanel;
    private String[] modules = {"Estoque", "Função", "Funcionários", "Refeição", "Pedido", "Financeiro"};

    public Menu() {
        setTitle("Menu");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(800, 600);

        // Cria um JPanel personalizado para o fundo degradê
        JPanel backgroundPanel = new JPanel() {
            @Override
            protected void paintComponent(Graphics g) {
                super.paintComponent(g);
                Graphics2D g2d = (Graphics2D) g;
                int width = getWidth();
                int height = getHeight();
                Color color1 = new Color(230, 230, 255); // Cor de fundo pastel roxo
                Color color2 = new Color(180, 180, 255); // Cor de fundo pastel azul
                g2d.setPaint(new GradientPaint(0, 0, color1, width, 0, color2));
                g2d.fillRect(0, 0, width, height);
            }
        };
        backgroundPanel.setLayout(new BorderLayout());

        menuPanel = new JPanel();
        menuPanel.setLayout(new GridLayout(0, 1, 0, 10)); // GridLayout com espaçamento vertical de 10 pixels
        menuPanel.setOpaque(false); // Deixa o JPanel do menu transparente
        backgroundPanel.add(menuPanel, BorderLayout.WEST);

        // Adiciona o JPanel personalizado ao JFrame
        setContentPane(backgroundPanel);

        contentPanel = new JPanel();
        contentPanel.setLayout(new BorderLayout());
        backgroundPanel.add(contentPanel, BorderLayout.CENTER);

        for (String module : modules) {
            JLabel moduleLabel = new JLabel(module, SwingConstants.CENTER);
            moduleLabel.setForeground(new Color(50, 50, 150)); // Cor do texto azul pastel
            moduleLabel.setFont(new Font("Arial", Font.PLAIN, 16)); // Fonte redondinha
            moduleLabel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10)); // Espaçamento interno

            moduleLabel.addMouseListener(new MouseAdapter() {
                @Override
                public void mouseClicked(MouseEvent e) {
                    // Limpa o conteúdo anterior
                    contentPanel.removeAll();
                    contentPanel.repaint();

                    // Adiciona o novo conteúdo da aba selecionada
                    if (module.equals("Estoque")) {
                        contentPanel.add(new Estoque());
                    }
                    // Repita para as outras abas...
                    contentPanel.revalidate();
                    contentPanel.repaint();
                }

                @Override
                public void mouseEntered(MouseEvent e) {
                    animate(moduleLabel, 10); // Animação de 10 pixels para a direita
                }

                @Override
                public void mouseExited(MouseEvent e) {
                    animate(moduleLabel, -10); // Animação de volta para a posição original
                }
            });
            menuPanel.add(moduleLabel);
        }

        setVisible(true);
    }

    private void animate(JLabel label, int pixels) {
        new Thread(() -> {
            int targetX = label.getLocation().x + pixels;
            while (label.getLocation().x != targetX) {
                int direction = label.getLocation().x < targetX ? 1 : -1;
                int newX = label.getLocation().x + direction;
                label.setLocation(newX, label.getLocation().y);
                try {
                    Thread.sleep(10); // Ajuste a velocidade da animação conforme necessário
                } catch (InterruptedException ex) {
                    ex.printStackTrace();
                }
            }
        }).start();
    }

    public static void main(String[] args) {
        new Menu();
    }
}
